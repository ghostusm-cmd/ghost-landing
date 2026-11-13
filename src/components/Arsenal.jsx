import { motion } from 'framer-motion'
import {
  Binary,
  Braces,
  Crosshair,
  Eye,
  Fingerprint,
  FlaskConical,
  Lock,
  Network,
  Radar,
  Server,
  Shield,
  Workflow,
} from 'lucide-react'

const SKILLS = [
  { name: 'Python', level: 92 },
  { name: 'Networking & Protocols', level: 88 },
  { name: 'Linux & Systems', level: 90 },
  { name: 'React / Frontend', level: 84 },
  { name: 'Security & Hardening', level: 80 },
  { name: 'Reverse Engineering', level: 72 },
]

const STACK = [
  { icon: Braces, label: 'Python' },
  { icon: Binary, label: 'TypeScript' },
  { icon: Server, label: 'Linux' },
  { icon: Network, label: 'Wireshark' },
  { icon: Shield, label: 'Xray' },
  { icon: Lock, label: '3X-UI' },
  { icon: Workflow, label: 'Docker' },
  { icon: Radar, label: 'Nmap' },
  { icon: Eye, label: 'OSINT' },
  { icon: Fingerprint, label: 'OPSEC' },
  { icon: Crosshair, label: 'Precision' },
  { icon: FlaskConical, label: 'Experiments' },
]

export default function Arsenal() {
  return (
    <section id="arsenal">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="kicker">// 04 — Arsenal</div>
          <h2 className="section-title">Tools of the trade.</h2>
          <p className="section-sub">
            A short list. The real arsenal is the habit of taking things apart
            until they make sense — everything else is just syntax.
          </p>
        </motion.div>

        <div className="arsenal-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            {SKILLS.map((s) => (
              <div className="skill" key={s.name}>
                <div className="skill-head">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 1.3, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="stack-grid"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {STACK.map((item) => {
              const Icon = item.icon
              return (
                <div className="stack-item" key={item.label} data-hover>
                  <Icon size={26} />
                  {item.label}
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
