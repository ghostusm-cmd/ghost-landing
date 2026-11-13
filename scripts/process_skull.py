"""Final pass: import the Wikimedia skull STL, normalize, decimate to ~30k
triangles, smooth shade, bone material, export GLB + beauty render."""
import bpy
import math
import mathutils

TARGET_TRIS = 30000

# --- clean scene ---
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# --- import ---
bpy.ops.import_mesh.stl(filepath='/tmp/skull-wiki.stl')
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.join()
obj = bpy.context.active_object
print('IMPORTED:', obj.name, 'polys:', len(obj.data.polygons))

# --- normalize: scale so height (Z) = 3.6, center at origin ---
bb = [obj.matrix_world @ mathutils.Vector(c) for c in obj.bound_box]
mins = [min(v[i] for v in bb) for i in range(3)]
maxs = [max(v[i] for v in bb) for i in range(3)]
size = [maxs[i] - mins[i] for i in range(3)]
scale = 3.6 / size[2]
obj.scale = (scale, scale, scale)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='BOUNDS')
obj.location = (0, 0, 0)
print('normalized')

# --- decimate ---
n_polys = len(obj.data.polygons)
dec = obj.modifiers.new('Decimate', 'DECIMATE')
dec.ratio = TARGET_TRIS / n_polys
dec.use_collapse_triangulate = True
bpy.ops.object.modifier_apply(modifier=dec.name)
print('after decimate polys:', len(obj.data.polygons), 'verts:', len(obj.data.vertices))

# --- smooth shading ---
for p in obj.data.polygons:
    p.use_smooth = True

# --- bone material ---
mat = bpy.data.materials.new('Bone')
mat.use_nodes = True
bsdf = mat.node_tree.nodes['Principled BSDF']
bsdf.inputs['Base Color'].default_value = (0.91, 0.89, 0.84, 1.0)
bsdf.inputs['Roughness'].default_value = 0.65
bsdf.inputs['Metallic'].default_value = 0.0
obj.data.materials.append(mat)

# --- export GLB (face points -Y in Blender -> +Z in glTF, toward camera) ---
bpy.ops.export_scene.gltf(
    filepath='/tmp/skull.glb',
    export_format='GLB',
    export_apply=True,
    export_yup=True,
)
print('exported GLB')

# --- beauty render (front, workbench) ---
scene = bpy.context.scene
scene.render.engine = 'BLENDER_WORKBENCH'
scene.display.shading.light = 'STUDIO'
scene.display.shading.color_type = 'MATERIAL'
scene.display.shading.show_cavity = True
scene.render.resolution_x = 512
scene.render.resolution_y = 512
world = bpy.data.worlds.new('W')
world.color = (0.02, 0.03, 0.03)
scene.world = world
cam_data = bpy.data.cameras.new('Cam')
cam = bpy.data.objects.new('Cam', cam_data)
scene.collection.objects.link(cam)
scene.camera = cam
cam.location = (0, -7, 0.3)
cam.rotation_euler = (math.radians(90), 0, 0)
scene.render.filepath = '/tmp/skull-final.png'
bpy.ops.render.render(write_still=True)
print('PROCESS DONE')
