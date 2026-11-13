import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const SCRIPT = [
  { cmd: 'whoami', out: ['ghost'] },
  { cmd: 'uptime', out: ['03:00 AM — peak performance. The city sleeps. The machine does not.'] },
  { cmd: 'cat mission.txt', out: ['"Build in the dark. Ship in silence."'] },
  { cmd: './defeat-alarm.sh', out: ['Alarm defeated. Again.', 'Streak: undefeated.'] },
  {
    cmd: 'sudo make me-a-legend',
    out: ['[sudo] password for ghost: ••••••••', 'access granted. welcome back, operator.'],
  },
]

export default function Terminal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-120px' })
  const [shown, setShown] = useState(0)
  const [runId, setRunId] = useState(0)

  useEffect(() => {
    if (!inView) return
    setShown(0)
    const total = SCRIPT.length
    const t = setInterval(() => {
      setShown((s) => {
        if (s >= total) {
          clearInterval(t)
          return s
        }
        return s + 1
      })
    }, 900)
    return () => clearInterval(t)
  }, [inView, runId])

  const replay = () => {
    setShown(0)
    setRunId((r) => r + 1)
  }

  return (
    <section id="terminal">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="kicker">// 03 — Live Feed</div>
          <h2 className="section-title">Talk to the machine.</h2>
          <p className="section-sub">
            No forms. No small talk. A terminal is the most honest interface
            ever built — it does exactly what you tell it. Nothing more.
          </p>
        </motion.div>

        <motion.div
          className="terminal-wrap"
          ref={ref}
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="terminal">
            <div className="terminal-bar">
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-title">ghost@machine — zsh</span>
              <button className="term-replay" onClick={replay}>
                ↻ REPLAY
              </button>
            </div>
            <div className="terminal-body">
              {SCRIPT.slice(0, shown).map((line, i) => (
                <div key={`${runId}-${i}`}>
                  <div className="term-line term-cmd">
                    <span className="prompt">ghost@machine:~$ </span>
                    {line.cmd}
                  </div>
                  {line.out.map((o, j) => (
                    <div key={j} className="term-line term-out">
                      {o.includes('granted') ? (
                        <span className="green">{o}</span>
                      ) : o.includes('defeated') ? (
                        <span className="green">{o}</span>
                      ) : (
                        o
                      )}
                    </div>
                  ))}
                </div>
              ))}
              <div className="term-line term-cmd">
                <span className="prompt">ghost@machine:~$ </span>
                <span className="term-cursor" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
