import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { SKULL_TEXTURE } from '../assets/skullTexture'

/**
 * Full-screen WebGL hero scene.
 * Centerpiece: the real GHOST face — a photorealistic skull-mask portrait
 * on a plane with additive blending (black = transparent), so the mask
 * floats out of the dark like a hologram. It turns toward you with scroll
 * and follows the mouse. Around it: a dim particle field and hologram texts.
 * Pauses when off-screen / tab hidden; reduced counts on mobile.
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

    const world = new THREE.Group()
    scene.add(world)

    // ---------- GHOST face (photorealistic mask, additive = hologram) ----------
    const skullGroup = new THREE.Group()
    const skullBase = isMobile
      ? { x: 0, y: 0.55, z: -0.5, s: 0.78 }
      : { x: 2.1, y: 0.1, z: 0, s: 1 }
    skullGroup.position.set(skullBase.x, skullBase.y, skullBase.z)
    skullGroup.scale.setScalar(skullBase.s)
    world.add(skullGroup)

    // soft green halo behind the face
    const haloCanvas = document.createElement('canvas')
    haloCanvas.width = 256
    haloCanvas.height = 256
    const hg = haloCanvas.getContext('2d')
    const grad = hg.createRadialGradient(128, 128, 8, 128, 128, 128)
    grad.addColorStop(0, 'rgba(0, 255, 136, 0.55)')
    grad.addColorStop(0.5, 'rgba(0, 255, 136, 0.14)')
    grad.addColorStop(1, 'rgba(0, 255, 136, 0)')
    hg.fillStyle = grad
    hg.fillRect(0, 0, 256, 256)
    const haloTex = new THREE.CanvasTexture(haloCanvas)
    const halo = new THREE.Mesh(
      new THREE.PlaneGeometry(6.4, 6.4),
      new THREE.MeshBasicMaterial({
        map: haloTex,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    )
    halo.position.z = -0.7
    skullGroup.add(halo)

    const skullTex = new THREE.TextureLoader().load(SKULL_TEXTURE)
    skullTex.colorSpace = THREE.SRGBColorSpace
    skullTex.anisotropy = 4
    const skullFace = new THREE.Mesh(
      new THREE.PlaneGeometry(3.7, 3.7),
      new THREE.MeshBasicMaterial({
        map: skullTex,
        transparent: true,
        opacity: 0.96,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    )
    skullGroup.add(skullFace)

    // ---------- particle field ----------
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

      // --- the face: turns toward you, follows the mouse, breathes ---
      skullGroup.rotation.y =
        Math.sin(t * 0.25) * 0.06 + progress * 0.7 + pointer.x * 0.3
      skullGroup.rotation.x = pointer.y * 0.08 + Math.sin(t * 0.4) * 0.02
      skullGroup.position.y = skullBase.y + Math.sin(t * 0.8) * 0.06
      skullGroup.scale.setScalar(skullBase.s * (1 + Math.sin(t * 0.8) * 0.012))
      halo.material.opacity = 0.42 + Math.sin(t * 1.3) * 0.1

      // --- ambient motion ---
      nebula.rotation.y = t * 0.018 * speed
      nebula.rotation.x = Math.sin(t * 0.05) * 0.08
      holos.forEach((h, i) => {
        h.position.y += Math.sin(t * 0.9 + i * 2.1) * 0.0012
        h.lookAt(camera.position)
      })

      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(tick)

    // ---------- cleanup ----------
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onPointer)
      skullTex.dispose()
      haloTex.dispose()
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
          mats.forEach((m) => {
            if (m.map && m.map !== skullTex && m.map !== haloTex) m.map.dispose()
            m.dispose()
          })
        }
      })
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
