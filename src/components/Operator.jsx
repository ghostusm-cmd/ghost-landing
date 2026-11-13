import { motion } from 'framer-motion'
import { Ghost } from 'lucide-react'

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' },
}

export default function Operator() {
  return (
    <section id="operator">
      <div className="container">
        <motion.div {...reveal}>
          <div className="kicker">// 01 — The Operator</div>
          <h2 className="section-title">
            A ghost with <span style={{ color: 'var(--accent)' }}>dignity</span>,
            <br />
            not a mascot.
          </h2>
        </motion.div>

        <div className="operator-grid">
          <motion.div className="operator-text" {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <p>
              Every system has a surface — and a truth underneath it. Ghost lives
              in the second one. <b>Networks, protocols, operating systems,
              security:</b> not as trivia to memorize, but as machines to take
              apart until the <span className="hl">“why”</span> chain hits the
              first principle.
            </p>
            <p>
              The core question is always the same — <b>who controls this?</b>{' '}
              Follow that question far enough and you end up at physics, at
              design decisions made decades ago, at the people who wrote the
              rules everyone else just obeys.
            </p>
            <p>
              No crowd-blending. No cute ghost. Just a mask, a terminal, and
              work that gets finished — <b>in the dark, in silence</b>.
            </p>
            <div className="chip-row">
              <span className="chip">ENTP</span>
              <span className="chip">WHY-CHAIN THINKER</span>
              <span className="chip">NIGHT SHIFT</span>
              <span className="chip">FIRST PRINCIPLES</span>
              <span className="chip">DEVIL'S ADVOCATE</span>
            </div>
          </motion.div>

          <motion.div
            className="id-card"
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.18 }}
            whileHover={{ y: -6 }}
          >
            <div className="id-card-head">
              <div className="avatar">
                <Ghost size={32} />
              </div>
              <div>
                <h3>GHOST</h3>
                <p>OPERATOR // CLEARANCE: NEED-TO-KNOW</p>
              </div>
            </div>
            <div className="id-rows">
              <div className="id-row">
                <span>CALLSIGN</span>
                <span>GHOST</span>
              </div>
              <div className="id-row">
                <span>ORIGIN</span>
                <span>KERMAN — IR</span>
              </div>
              <div className="id-row">
                <span>FIELD</span>
                <span>SYSTEMS / NETWORKS / CODE</span>
              </div>
              <div className="id-row">
                <span>MASK</span>
                <span>ALWAYS ON</span>
              </div>
              <div className="id-row">
                <span>ALARMS</span>
                <span className="ok">DEFEATED — 100%</span>
              </div>
              <div className="id-row">
                <span>STATUS</span>
                <span className="ok">● ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
