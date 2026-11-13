import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Full-screen WebGL hero scene.
 * Centerpiece: a 3D GHOST skull — extruded silhouette, neon edge lines,
 * glowing green eyes — floating behind the headline. Around it: a smaller
 * wireframe torus knot, a dim particle field, orbiting shards and holograms.
 * Camera dives + world rotates as you SCROLL; skull + camera follow the MOUSE.
 * Pauses when off-screen / tab hidden; reduced counts on mobile.
 */

function buildSkull() {
  const group = new THREE.Group()

  // --- skull silhouette (front view), extruded ---
  const right = [
    [0, 1.55], [0.55, 1.5], [0.95, 1.25], [1.12, 0.85], [1.1, 0.45],
    [0.98, 0.05], [0.85, -0.35], [0.72, -0.7], [0.66, -1.05],
    [0.55, -1.28], [0.3, -1.35], [0, -1.35],
  ]
  const left = right
    .slice()
    .reverse()
    .map(([x, y]) => [-x, y])
  const loop = [...right, ...left.slice(1)]
  const shape = new THREE.Shape()
  shape.splineThru(loop.map(([x, y]) => new THREE.Vector2(x, y)))
  shape.closePath()

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.42,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.045,
    bevelSegments: 2,
    curveSegments: 24,
    steps: 1,
  })
  geo.center()
  const skull = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({
      color: 0x0b100d,
      roughness: 0.42,
      metalness: 0.35,
      emissive: 0x00ff88,
      emissiveIntensity: 0.05,
      flatShading: true,
    }),
  )
  group.add(skull)

  // neon outline
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(geo, 24),
    new THREE.LineBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.85 }),
  )
  group.add(edges)

  // --- eye sockets + glowing eyes ---
  const socketMat = new THREE.MeshStandardMaterial({ color: 0x020403, roughness: 1 })
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 })
  const eyes = []
  for (const sx of [-1, 1]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 18), socketMat)
    socket.scale.set(0.34, 0.24, 0.12)
    socket.position.set(sx * 0.42, 0.42, 0.2)
    group.add(socket)
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.085, 16, 12), eyeMat)
    eye.position.set(sx * 0.42, 0.42, 0.3)
    group.add(eye)
    eyes.push(eye)
  }

  // --- nose (inverted pyramid) ---
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.3, 4), socketMat)
  nose.rotation.x = Math.PI
  nose.rotation.y = Math.PI / 4
  nose.scale.z = 0.5
  nose.position.set(0, -0.14, 0.26)
  group.add(nose)

  // --- teeth + mouth line ---
  const toothMat = new THREE.MeshStandardMaterial({ color: 0xb8d8c2, roughness: 0.6 })
  for (let i = -2; i <= 2; i++) {
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.3, 0.04), toothMat)
    tooth.position.set(i * 0.2, -1.02, 0.28)
    group.add(tooth)
  }
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.035, 0.02), socketMat)
  mouth.position.set(0, -0.84, 0.28)
  group.add(mouth)

  // --- face light (makes the eyes feel alive) ---
  const faceLight = new THREE.PointLight(0x00ff88, 6, 5, 1.8)
  faceLight.position.set(0, 0.4, 1.4)
  group.add(faceLight)

  return { group, eyes, faceLight }
}

export default function ThreeScene() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const parent = canvas.parentElement
    if (!parent) return

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })
    } catch {
      return // no WebGL — CSS gradient behind stays as fallback
    }

    const isMobile = window.innerWidth < 768
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2))

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x050807, 0.045)

    const camera = new THREE.PerspectiveCamera(
      58,
      parent.clientWidth / Math.max(parent.clientHeight, 1),
      0.1,
      100,
    )
    camera.position.set(0, 0, 9)

    // ---------- lights ----------
    scene.add(new THREE.AmbientLight(0xffffff, 0.25))
    const keyLight = new THREE.PointLight(0x00ff88, 60, 30, 1.6)
    keyLight.position.set(4, 3, 5)
    scene.add(keyLight)
    const rimLight = new THREE.PointLight(0x2d8cff, 25, 30, 1.8)
    rimLight.position.set(-5, -2, 3)
    scene.add(rimLight)

    const world = new THREE.Group()
    scene.add(world)

    // ---------- GHOST skull (centerpiece) ----------
    const skull = buildSkull()
    const skullBase = isMobile
      ? { x: 0, y: 0.55, z: -0.5, s: 0.82 }
      : { x: 2.1, y: 0.1, z: 0, s: 1 }
    skull.group.position.set(skullBase.x, skullBase.y, skullBase.z)
    skull.group.scale.setScalar(skullBase.s)
    world.add(skull.group)

    // ---------- torus knot group (smaller, off to the side) ----------
    const knotGroup = new THREE.Group()
    knotGroup.position.set(isMobile ? 0 : -3.4, isMobile ? -2.7 : -1.5, -1)
    knotGroup.scale.setScalar(isMobile ? 0.5 : 0.6)
    world.add(knotGroup)

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.5, 0.42, 220, 36),
      new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        wireframe: true,
        transparent: true,
        opacity: 0.34,
      }),
    )
    knotGroup.add(knot)

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.62, 1),
      new THREE.MeshStandardMaterial({
        color: 0x062b18,
        emissive: 0x00ff88,
        emissiveIntensity: 0.9,
        flatShading: true,
        metalness: 0.2,
        roughness: 0.35,
      }),
    )
    knotGroup.add(core)
    const coreWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.85, 1),
      new THREE.MeshBasicMaterial({ color: 0x7dffc4, wireframe: true, transparent: true, opacity: 0.5 }),
    )
    knotGroup.add(coreWire)

    const rings = []
    for (const s of [
      { r: 2.6, x: 0.4, z: 0.9 },
      { r: 3.3, x: 1.2, z: -0.6 },
    ]) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(s.r, 0.012, 8, 120),
        new THREE.MeshBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.4 }),
      )
      ring.rotation.x = s.x
      ring.rotation.z = s.z
      knotGroup.add(ring)
      rings.push(ring)
    }

    // ---------- particle field (dimmer now — the skull is the star) ----------
    const P_COUNT = isMobile ? 700 : 1400
    const positions = new Float32Array(P_COUNT * 3)
    for (let i = 0; i < P_COUNT; i++) {
      if (Math.random() < 0.7) {
        const r = 3.2 + Math.random() * 5.5
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7
        positions[i * 3 + 2] = r * Math.cos(phi)
      } else {
        const r = 2 + Math.random() * 6
        const a = Math.random() * Math.PI * 2
        positions[i * 3] = Math.cos(a) * r
        positions[i * 3 + 1] = (Math.random() - 0.5) * 0.9
        positions[i * 3 + 2] = Math.sin(a) * r
      }
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const nebula = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: 0x00ff88,
        size: 0.04,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    )
    world.add(nebula)

    // ---------- orbiting shards (around the knot) ----------
    const SHARDS = isMobile ? 8 : 16
    const shards = []
    const shardGeo = new THREE.TetrahedronGeometry(0.16)
    const shardMat = new THREE.MeshBasicMaterial({ color: 0x9dffd9, wireframe: true, transparent: true, opacity: 0.75 })
    for (let i = 0; i < SHARDS; i++) {
      const shard = new THREE.Mesh(shardGeo, shardMat)
      const orbitR = 2.6 + Math.random() * 3.4
      const speed = 0.12 + Math.random() * 0.25
      const phase = Math.random() * Math.PI * 2
      const yBase = (Math.random() - 0.5) * 3.4
      shard.scale.setScalar(0.5 + Math.random() * 1.1)
      world.add(shard)
      shards.push({ mesh: shard, orbitR, speed, phase, yBase })
    }

    // ---------- hologram planes (procedural canvas texture) ----------
    const makeHoloTexture = (text) => {
      const c = document.createElement('canvas')
      c.width = 1024
      c.height = 256
      const g = c.getContext('2d')
      g.clearRect(0, 0, 1024, 256)
      g.font = '700 150px "JetBrains Mono", monospace'
      g.textAlign = 'center'
      g.textBaseline = 'middle'
      g.shadowColor = '#00ff88'
      g.shadowBlur = 34
      g.fillStyle = 'rgba(0, 255, 136, 0.95)'
      g.fillText(text, 512, 128)
      g.font = '500 44px "JetBrains Mono", monospace'
      g.shadowBlur = 14
      g.fillStyle = 'rgba(125, 255, 196, 0.8)'
      g.fillText('· · · 01000111 01001000 01001111 01010011 · · ·', 512, 224)
      const tex = new THREE.CanvasTexture(c)
      tex.anisotropy = 4
      return tex
    }
    const holos = []
    for (const d of [
      { text: 'GHOST', x: 0, y: 3.3, z: -2.5, s: 0.9 },
      { text: '0777', x: 0, y: -3.3, z: -3, s: 0.5 },
    ]) {
      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(4.4 * d.s, 1.1 * d.s),
        new THREE.MeshBasicMaterial({
          map: makeHoloTexture(d.text),
          transparent: true,
          opacity: 0.7,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.DoubleSide,
        }),
      )
      plane.position.set(d.x, d.y, d.z)
      world.add(plane)
      holos.push(plane)
    }

    // ---------- sizing ----------
    const resize = () => {
      const w = parent.clientWidth
      const h = parent.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / Math.max(h, 1)
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(parent)

    // ---------- interaction state ----------
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 }
    const onPointer = (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onPointer, { passive: true })

    let visible = true
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0 })
    io.observe(canvas)

    // ---------- loop ----------
    const clock = new THREE.Clock()
    let raf = 0
    const BASE_Z = 9

    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visible || document.hidden) return
      const t = clock.getElapsedTime()

      // scroll progress through the hero (0 → 1)
      const rect = parent.getBoundingClientRect()
      const progress = THREE.MathUtils.clamp(-rect.top / Math.max(rect.height * 0.9, 1), 0, 1)

      // mouse parallax (lerped)
      pointer.x += (pointer.tx - pointer.x) * 0.04
      pointer.y += (pointer.ty - pointer.y) * 0.04

      // camera dive + drift
      camera.position.z = BASE_Z - progress * 3.6
      camera.position.x = pointer.x * 0.55
      camera.position.y = -pointer.y * 0.35 + progress * 0.4
      camera.lookAt(0, 0, 0)

      // world slowly rotates with scroll
      world.rotation.y = progress * 1.9 + t * 0.02
      world.rotation.x = progress * 0.35

      const speed = reduced ? 0 : 1

      // --- skull: turns toward you, follows the mouse, breathes ---
      skull.group.rotation.y =
        Math.sin(t * 0.25) * 0.12 + progress * 0.9 + pointer.x * 0.35
      skull.group.rotation.x = pointer.y * 0.12 + Math.sin(t * 0.4) * 0.04
      skull.group.position.y = skullBase.y + Math.sin(t * 0.8) * 0.06
      const eyePulse = 1 + Math.sin(t * 2.4) * 0.18
      skull.eyes.forEach((eye) => eye.scale.setScalar(eyePulse))
      skull.faceLight.intensity = 5 + Math.sin(t * 2.4) * 2

      // --- knot group idle motion ---
      knot.rotation.x = t * 0.11 * speed
      knot.rotation.y = t * 0.16 * speed
      core.rotation.y = t * 0.5 * speed
      core.rotation.x = t * 0.22 * speed
      coreWire.rotation.y = -t * 0.35 * speed
      coreWire.rotation.z = t * 0.18 * speed
      nebula.rotation.y = t * 0.018 * speed
      nebula.rotation.x = Math.sin(t * 0.05) * 0.08
      rings[0].rotation.z = t * 0.2 * speed
      rings[1].rotation.z = -t * 0.14 * speed
      rings[1].rotation.x = 1.2 + Math.sin(t * 0.2) * 0.15

      for (const s of shards) {
        const a = s.phase + t * s.speed * speed
        s.mesh.position.set(
          Math.cos(a) * s.orbitR + knotGroup.position.x * 0.4,
          s.yBase + Math.sin(t * 0.7 + s.phase) * 0.35 + knotGroup.position.y * 0.4,
          Math.sin(a) * s.orbitR,
        )
        s.mesh.rotation.x = t * 0.8 + s.phase
        s.mesh.rotation.y = t * 0.6
      }
      holos.forEach((h, i) => {
        h.position.y += Math.sin(t * 0.9 + i * 2.1) * 0.0012
        h.lookAt(camera.position)
      })

      // pulse the key light
      keyLight.intensity = 55 + Math.sin(t * 1.4) * 10

      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(tick)

    // ---------- cleanup ----------
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onPointer)
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
          mats.forEach((m) => {
            if (m.map) m.map.dispose()
            m.dispose()
          })
        }
      })
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
