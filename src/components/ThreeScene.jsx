import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Full-screen WebGL scene for the hero.
 * - particle nebula + wireframe torus knot + emissive icosahedron core
 * - orbiting shards, rings and floating GHOST hologram planes
 * - camera dives + world rotates as you SCROLL, parallax follows the MOUSE
 * - pauses when off-screen / tab hidden; reduced counts on mobile
 */
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

    // ---------- particle nebula ----------
    const P_COUNT = isMobile ? 1300 : 2600
    const positions = new Float32Array(P_COUNT * 3)
    for (let i = 0; i < P_COUNT; i++) {
      // 70% shell, 30% flat disk
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
    const pMat = new THREE.PointsMaterial({
      color: 0x00ff88,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })
    const nebula = new THREE.Points(pGeo, pMat)
    world.add(nebula)

    // ---------- torus knot (wireframe) ----------
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.5, 0.42, 220, 36),
      new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        wireframe: true,
        transparent: true,
        opacity: 0.34,
      }),
    )
    knot.position.x = isMobile ? 0 : 2.1
    knot.position.y = isMobile ? 0.4 : 0.1
    world.add(knot)

    // ---------- icosahedron core (emissive + wireframe shell) ----------
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
    core.position.copy(knot.position)
    world.add(core)
    const coreWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.85, 1),
      new THREE.MeshBasicMaterial({ color: 0x7dffc4, wireframe: true, transparent: true, opacity: 0.5 }),
    )
    coreWire.position.copy(knot.position)
    world.add(coreWire)

    // ---------- rings ----------
    const rings = []
    const ringSpecs = [
      { r: 2.6, tube: 0.012, x: 0.4, z: 0.9 },
      { r: 3.3, tube: 0.01, x: 1.2, z: -0.6 },
    ]
    for (const s of ringSpecs) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(s.r, s.tube, 8, 120),
        new THREE.MeshBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.4 }),
      )
      ring.rotation.x = s.x
      ring.rotation.z = s.z
      ring.position.copy(knot.position)
      world.add(ring)
      rings.push(ring)
    }

    // ---------- orbiting shards ----------
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
      const scale = 0.5 + Math.random() * 1.1
      shard.scale.setScalar(scale)
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
    const holoDefs = [
      { text: 'GHOST', x: 0, y: 3.3, z: -2.5, s: 0.9 },
      { text: '0777', x: 0, y: -3.3, z: -3, s: 0.5 },
    ]
    for (const d of holoDefs) {
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

      // idle motion
      const speed = reduced ? 0 : 1
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
          Math.cos(a) * s.orbitR + knot.position.x * 0.4,
          s.yBase + Math.sin(t * 0.7 + s.phase) * 0.35,
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
