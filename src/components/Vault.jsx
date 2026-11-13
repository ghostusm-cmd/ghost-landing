import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import {
  Binary,
  Braces,
  Crosshair,
  Eye,
  Fingerprint,
  Lock,
  Network,
  Radar,
  Server,
  Shield,
  Workflow,
} from 'lucide-react'

const ITEMS = [
  { icon: Braces, label: 'PYTHON', sub: 'the bridge language' },
  { icon: Network, label: 'XRAY', sub: 'traffic, bent to will' },
  { icon: Lock, label: 'VLESS', sub: 'invisible by design' },
  { icon: Server, label: 'LINUX', sub: 'home turf' },
  { icon: Workflow, label: 'DOCKER', sub: 'ships anywhere' },
  { icon: Radar, label: 'NMAP', sub: 'sees the unseen' },
  { icon: Eye, label: 'OSINT', sub: 'open-source eyes' },
  { icon: Fingerprint, label: 'OPSEC', sub: 'no trace left' },
  { icon: Shield, label: 'HARDENING', sub: 'locked down tight' },
  { icon: Crosshair, label: 'PRECISION', sub: 'one clean strike' },
  { icon: Binary, label: 'TYPESCRIPT', sub: 'types as armor' },
  { icon: Braces, label: 'VITE', sub: 'instant builds' },
]

/**
 * Scroll-driven 3D ring: a tall scroll track pins the viewport while the
 * ring of arsenal cards rotates a full turn as you scroll through it.
 */
export default function Vault() {
  const [radius, setRadius] = useState(406)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const ringScale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.82, 1, 1, 0.82])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 1, 0.25])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -24])
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.5 })
  const smoothRotate = useTransform(smooth, [0, 1], [0, 360])

  useEffect(() => {
    const update = () => {
      // radius from card width so neighbours never overlap:
      // radius = (cardWidth / 2) / tan(π / n) + gap, n = 12 cards
      const card = window.innerWidth < 760 ? 168 : 208
      setRadius(card / 2 / Math.tan(Math.PI / ITEMS.length) + 18)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const step = 360 / ITEMS.length

  return (
    <section id="vault" ref={sectionRef} className="vault-track">
      <div className="vault-sticky">
        <div className="container vault-inner">
          <motion.div style={{ y: titleY }} className="vault-head">
            <div className="kicker">// 02.5 — The Vault</div>
            <h2 className="section-title">
              Scroll. <span style={{ color: 'var(--accent)' }}>The ring turns.</span>
            </h2>
            <p className="section-sub">
              Twelve tools, one orbit. Keep scrolling — the vault opens itself.
              Every card is a weapon the operator actually uses.
            </p>
          </motion.div>

          <motion.div className="vault-glow" style={{ opacity: glowOpacity }} />

          <div className="ring-stage">
            <motion.div
              className="ring"
              style={{ rotateY: smoothRotate, scale: ringScale }}
            >
              {ITEMS.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={`${item.label}-${i}`}
                    className="ring-card"
                    style={{
                      transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
                    }}
                  >
                    <div className="ring-card-icon">
                      <Icon size={30} />
                    </div>
                    <div className="ring-card-label">{item.label}</div>
                    <div className="ring-card-sub">{item.sub}</div>
                  </div>
                )
              })}
            </motion.div>
            <div className="ring-center">
              <span className="ring-center-glyph">
                <Eye size={40} />
              </span>
              <span className="ring-center-text">ARSENAL</span>
            </div>
          </div>

          <div className="vault-hint">SCROLL TO ROTATE — 360°</div>
        </div>
      </div>
    </section>
  )
}
