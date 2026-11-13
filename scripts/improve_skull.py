"""Ghost pass: take the real skull STL and paint it like Ghost's mask —
stark white print, black eye sockets / nasal cavity / mouth interior —
then decimate, smooth shade, export GLB + beauty render to check the paint."""
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

# --- materials: Ghost print white / socket black ---
def make_mat(name, color, roughness):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    bsdf = m.node_tree.nodes['Principled BSDF']
    bsdf.inputs['Base Color'].default_value = (*color, 1.0)
    bsdf.inputs['Roughness'].default_value = roughness
    bsdf.inputs['Metallic'].default_value = 0.0
    return m

white = make_mat('GhostWhite', (0.96, 0.96, 0.95), 0.9)
black = make_mat('SocketBlack', (0.02, 0.02, 0.02), 0.95)
obj.data.materials.append(white)   # slot 0
obj.data.materials.append(black)   # slot 1

# black zones (Blender coords; face is on -Y, up is +Z)
# eye sockets, nasal cavity, mouth interior
BLACK_ZONES = [
    ((-0.58, -1.35, 0.45), 0.32),   # left eye socket
    ((0.58, -1.35, 0.45), 0.32),    # right eye socket
    ((0.0, -1.45, -0.16), 0.26),    # nasal cavity
    ((0.0, -1.05, -0.75), 0.40),    # mouth interior (behind the teeth)
]

def dist(a, b):
    return math.sqrt(sum((a[i] - b[i]) ** 2 for i in range(3)))

n_black = 0
for poly in obj.data.polygons:
    c = (poly.center.x, poly.center.y, poly.center.z)
    for center, radius in BLACK_ZONES:
        if dist(c, center) < radius:
            poly.material_index = 1
            n_black += 1
            break
    else:
        poly.material_index = 0
print('black faces:', n_black, 'of', len(obj.data.polygons))

# --- decimate (keeps material slots) ---
n_polys = len(obj.data.polygons)
dec = obj.modifiers.new('Decimate', 'DECIMATE')
dec.ratio = TARGET_TRIS / n_polys
dec.use_collapse_triangulate = True
bpy.ops.object.modifier_apply(modifier=dec.name)
print('after decimate polys:', len(obj.data.polygons), 'verts:', len(obj.data.vertices))

# --- smooth shading ---
for p in obj.data.polygons:
    p.use_smooth = True

# --- export GLB ---
bpy.ops.export_scene.gltf(
    filepath='/tmp/skull-ghost.glb',
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
scene.render.filepath = '/tmp/skull-ghost.png'
bpy.ops.render.render(write_still=True)
print('GHOST DONE')
