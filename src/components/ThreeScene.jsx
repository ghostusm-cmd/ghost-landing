import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { SKULL_TEXTURE } from '../assets/skullTexture'

/**
 * Full-screen WebGL hero scene.
 * Centerpiece: a REAL 3D head — a dark hood sphere (the balaclava) with the
 * photorealistic skull face wrapped around a curved cylinder segment, so the
 * face has true depth and visibly turns in 3D when you scroll or move the
 * mouse. Glowing green eyes sit on the curved surface; a rim-glow shell
 * outlines the whole head. Around it: a dim particle field and holograms.
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

    // ---------- lights ----------
    scene.add(new THREE.AmbientLight(0xffffff, 0.35))
    const keyLight = new THREE.PointLight(0xffffff, 40, 25, 1.6)
    keyLight.position.set(4, 3, 6)
    scene.add(keyLight)
    const rimLight = new THREE.PointLight(0x00ff88, 25, 15, 1.8)
    rimLight.position.set(-5, 0, 3)
    scene.add(rimLight)

    const world = new THREE.Group()
    scene.add(world)

    // ---------- THE HEAD ----------
    const headGroup = new THREE.Group()
    const headBase = isMobile
      ? { x: 0, y: 0.3, z: -0.5, s: 0.95 }
      : { x: 2.1, y: 0.15, z: 0, s: 1 }
    headGroup.position.set(headBase.x, headBase.y, headBase.z)
    headGroup.scale.setScalar(headBase.s)
    world.add(headGroup)

    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x0d0f0e,
      roughness: 0.85,
      metalness: 0.1,
    })

    // hood — the balaclava dome
    const hood = new THREE.Mesh(new THREE.SphereGeometry(1.85, 48, 32), darkMat)
    hood.scale.set(1, 1.12, 0.85)
    headGroup.add(hood)

    // rim-glow shell — green halo outlining the head silhouette
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    })
    const rim = new THREE.Mesh(new THREE.SphereGeometry(1.85, 48, 32), rimMat)
    rim.scale.set(1.04, 1.16, 0.88)
    headGroup.add(rim)

    // neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.05, 1.4, 24), darkMat)
    neck.position.y = -2.3
    headGroup.add(neck)

    // face — the skull photo wrapped around a curved cylinder segment
    // (crop the texture to the face band of the portrait)
    const skullTex = new THREE.TextureLoader().load(SKULL_TEXTURE)
    skullTex.colorSpace = THREE.SRGBColorSpace
    skullTex.anisotropy = 4
    skullTex.repeat.set(0.52, 0.48)
    skullTex.offset.set(0.24, 0.25)
    const face = new THREE.Mesh(
      new THREE.CylinderGeometry(1.95, 1.85, 2.7, 48, 1, true, -1.0, 2.0),
      new THREE.MeshStandardMaterial({
        map: skullTex,
        emissive: 0xffffff,
        emissiveMap: skullTex,
        emissiveIntensity: 0.3,
        roughness: 0.6,
        metalness: 0.05,
        side: THREE.FrontSide,
      }),
    )
    headGroup.add(face)

    // glowing eyes sitting on the curved surface
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 })
    const eyes = []
    for (const sx of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 12), eyeMat)
      eye.position.set(sx * 0.8, 0.5, 1.72)
      headGroup.add(eye)
      eyes.push(eye)
    }
    const faceLight = new THREE.PointLight(0x00ff88, 6, 6, 1.8)
    faceLight.position.set(0, 0.5, 3.2)
    headGroup.add(faceLight)

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

      // --- the head: turns toward you, follows the mouse, breathes ---
      headGroup.rotation.y =
        Math.sin(t * 0.22) * 0.08 + progress * 0.85 + pointer.x * 0.38
      headGroup.rotation.x = pointer.y * 0.1 + Math.sin(t * 0.33) * 0.03
      headGroup.position.y = headBase.y + Math.sin(t * 0.8) * 0.06
      headGroup.scale.setScalar(headBase.s * (1 + Math.sin(t * 0.8) * 0.012))
      const eyePulse = 1 + Math.sin(t * 2.4) * 0.15
      eyes.forEach((eye) => eye.scale.setScalar(eyePulse))
      rimMat.opacity = 0.16 + Math.sin(t * 1.3) * 0.06
      faceLight.intensity = 5 + Math.sin(t * 2.4) * 2

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
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
          mats.forEach((m) => {
            if (m.map && m.map !== skullTex) m.map.dispose()
            m.dispose()
          })
        }
      })
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
