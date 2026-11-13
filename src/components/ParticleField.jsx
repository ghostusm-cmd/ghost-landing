import { useEffect, useRef } from 'react'

const CHARS = 'アイウエオカキクケコサシスセソ0123456789ABCDEF<>/\\|#$%&*'

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    // --- matrix rain columns ---
    const fontSize = 15
    let cols = Math.floor(w / 26)
    let drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -60))

    // --- particle network ---
    const count = Math.min(70, Math.floor((w * h) / 22000))
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
    }))

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 8, 7, 0.16)'
      ctx.fillRect(0, 0, w, h)

      // rain
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`
      for (let i = 0; i < cols; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * 26
        const y = drops[i] * fontSize
        ctx.fillStyle = Math.random() > 0.975 ? 'rgba(164, 255, 206, 0.85)' : 'rgba(0, 255, 136, 0.28)'
        ctx.fillText(ch, x, y)
        if (y > h && Math.random() > 0.975) drops[i] = Math.floor(Math.random() * -40)
        drops[i]++
      }

      // particles + links
      for (const p of parts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 255, 136, 0.6)'
        ctx.fill()
      }
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i]
          const b = parts[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0, 255, 136, ${(1 - d / 130) * 0.16})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }

    const loop = () => {
      if (cols !== Math.floor(w / 26)) {
        cols = Math.floor(w / 26)
        drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -60))
      }
      draw()
      raf = requestAnimationFrame(loop)
    }

    if (reduced) {
      draw()
    } else {
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
