import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronRight, Cpu, Network, Swords } from 'lucide-react'

const PROJECTS = [
  {
    icon: Cpu,
    title: 'Antigravity Bridge',
    tag: 'PYTHON // CLI AUTOMATION',
    desc: 'A stdlib-only bridge that injects prompts into the official Antigravity CLI terminal and reads answers from its stdout — no OAuth extraction, no direct API calls. Exposes an OpenAI-compatible endpoint for Hermes.',
    tags: ['Python', 'CLI', 'API', 'Automation'],
  },
  {
    icon: Network,
    title: 'Boxd VPN Lab',
    tag: 'XRAY // VLESS // SELF-HOSTED',
    desc: 'A personal VPN stack on a cloud box: Xray + 3X-UI, VLESS over WebSocket tunneled through the Boxd HTTPS proxy. Built, broken, hardened — in the dark, like everything else.',
    tags: ['Xray', 'VLESS', 'Linux', 'Docker'],
  },
  {
    icon: Swords,
    title: 'Nightblade',
    tag: 'RPG // ROGUE-ASSASSIN',
    desc: 'The class pick: twin daggers, green code-runes, an Iranian flag badge on the chest. Precision over brute force — one clean strike from the shadows beats ten loud ones.',
    tags: ['RPG', 'Character', 'Design', 'Stealth'],
  },
]

function TiltCard({ project, index }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [9, -9]), { stiffness: 160, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-11, 11]), { stiffness: 160, damping: 18 })
  const [glare, setGlare] = useState({ x: 50, y: 50 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px)
    my.set(py)
    setGlare({ x: px * 100, y: py * 100 })
  }
  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  const Icon = project.icon

  return (
    <motion.article
      ref={ref}
      className="project-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        '--gx': `${glare.x}%`,
        '--gy': `${glare.y}%`,
      }}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: 'easeOut' }}
    >
      <div className="glare" />
      <div className="project-icon">
        <Icon size={26} />
      </div>
      <h3>{project.title}</h3>
      <div className="tag-line">{project.tag}</div>
      <p>{project.desc}</p>
      <div className="project-tags">
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <span className="project-link">
        OPEN FILE <ChevronRight size={15} />
      </span>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="kicker">// 02 — Field Work</div>
          <h2 className="section-title">
            Built in the dark.
            <br />
            Shipped in silence.
          </h2>
          <p className="section-sub">
            Three operations, three different machines — one operator. Move your
            cursor over a card. It watches you back.
          </p>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
