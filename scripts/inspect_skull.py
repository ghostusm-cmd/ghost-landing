"""Inspect pass: import the Wikimedia skull STL, normalize scale,
render front (-Y) and back (+Y) views so we can see which way the face points."""
import bpy
import math
import mathutils

# --- clean scene ---
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
for coll in (bpy.data.meshes, bpy.data.curves, bpy.data.cameras, bpy.data.lights):
    pass

# --- import ---
bpy.ops.import_mesh.stl(filepath='/tmp/skull-wiki.stl')
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.join()
obj = bpy.context.active_object
print('IMPORTED:', obj.name)
print('verts:', len(obj.data.vertices), 'polys:', len(obj.data.polygons))

# --- normalize: scale so height (Z) = 3.6, center at origin ---
bb = [obj.matrix_world @ mathutils.Vector(c) for c in obj.bound_box]
mins = [min(v[i] for v in bb) for i in range(3)]
maxs = [max(v[i] for v in bb) for i in range(3)]
size = [maxs[i] - mins[i] for i in range(3)]
print('bbox size (x,y,z):', [round(s, 3) for s in size])
scale = 3.6 / size[2]
obj.scale = (scale, scale, scale)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='BOUNDS')
obj.location = (0, 0, 0)
bb = [obj.matrix_world @ mathutils.Vector(c) for c in obj.bound_box]
mins = [min(v[i] for v in bb) for i in range(3)]
maxs = [max(v[i] for v in bb) for i in range(3)]
print('normalized bbox size:', [round(maxs[i] - mins[i], 3) for i in range(3)])
print('normalized bbox min:', [round(v, 3) for v in mins], 'max:', [round(v, 3) for v in maxs])

# --- bone-ish material so the form reads ---
mat = bpy.data.materials.new('Bone')
mat.use_nodes = True
bsdf = mat.node_tree.nodes['Principled BSDF']
bsdf.inputs['Base Color'].default_value = (0.91, 0.89, 0.84, 1.0)
bsdf.inputs['Roughness'].default_value = 0.65
obj.data.materials.append(mat)

# --- workbench render setup ---
scene = bpy.context.scene
scene.render.engine = 'BLENDER_WORKBENCH'
scene.display.shading.light = 'STUDIO'
scene.display.shading.color_type = 'MATERIAL'
scene.display.shading.show_cavity = True
scene.render.resolution_x = 512
scene.render.resolution_y = 512
scene.render.film_transparent = False
world = bpy.data.worlds.new('W')
world.color = (0.02, 0.03, 0.03)
scene.world = world

cam_data = bpy.data.cameras.new('Cam')
cam = bpy.data.objects.new('Cam', cam_data)
scene.collection.objects.link(cam)
scene.camera = cam

# front view: camera on -Y looking toward +Y
cam.location = (0, -7, 0.3)
cam.rotation_euler = (math.radians(90), 0, 0)
scene.render.filepath = '/tmp/skull-front.png'
bpy.ops.render.render(write_still=True)
print('rendered front')

# back view: camera on +Y looking toward -Y
cam.location = (0, 7, 0.3)
cam.rotation_euler = (math.radians(90), 0, math.radians(180))
scene.render.filepath = '/tmp/skull-back.png'
bpy.ops.render.render(write_still=True)
print('rendered back')
print('INSPECT DONE')
