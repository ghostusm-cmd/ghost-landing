import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Ghost, Sparkles } from 'lucide-react'

// Three.js is heavy — split it out so the first paint stays fast on mobile.
const ThreeScene = lazy(() => import('./ThreeScene'))

const WORDS = [
  'Code, systems & deep dives.',
  'Building in the dark.',
  'Shipping in silence.',
  'No alarm survives me.',
]

function useTypewriter(words) {
  const [text, setText] = useState('')
  const [wi, setWi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wi % words.length]
    const speed = deleting ? 32 : 68
    let t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1)
        setText(next)
        if (next === word) setTimeout(() => setDeleting(true), 1500)
      } else {
        const next = word.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setWi((v) => v + 1)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, wi, words])

  return text
}

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const dur = 1400
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {val}
      <em>{suffix}</em>
    </span>
  )
}

function Magnetic({ children }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * 0.3,
      y: (e.clientY - (r.top + r.height / 2)) * 0.35,
    })
  }
  const onLeave = () => setPos({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 14, mass: 0.4 }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const typed = useTypewriter(WORDS)
  const [stealth, setStealth] = useState(false)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const toggleStealth = () => {
    const next = !stealth
    setStealth(next)
    document.documentElement.style.setProperty(
      '--accent',
      next ? '#ff2d55' : '#00ff88',
    )
  }

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>
      <div className="hero-glow" />
      <div className="hero-grid-bg" />

      <div className="container hero-inner">
        <motion.div style={{ y: yTitle, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <button className="hero-eyebrow" onClick={toggleStealth} data-hover>
              <Ghost size={15} />
              {stealth ? 'STEALTH MODE — ENGAGED' : 'GHOST PROTOCOL — ACTIVE'}
              <Sparkles size={13} />
            </button>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="glitch" data-text="GHOST">
              GHOST
            </span>
            <br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(233,245,238,0.75)' }}>
              IN THE
            </span>
            <br />
            MACHINE
          </motion.h1>

          <motion.div
            className="hero-sub-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <span className="typed">
              {typed}
              <span className="caret" />
            </span>
          </motion.div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Not a mascot. Not a costume. An operator who works where nobody is
            watching — <b>deep systems, real networks, code that ships</b> —
            and disappears before the applause starts.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <Magnetic>
              <a className="btn btn-primary" href="#projects">
                ENTER THE DARK
                <ArrowDown size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="btn btn-ghost"
                href="https://github.com/ghostusm-cmd"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB ↗
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            <div className="stat">
              <b>
                <Counter to={100} suffix="%" />
              </b>
              <span>Dark mode</span>
            </div>
            <div className="stat">
              <b>
                <Counter to={3} suffix=" AM" />
              </b>
              <span>Peak hours</span>
            </div>
            <div className="stat">
              <b>
                <Counter to={0} />
              </b>
              <span>Alarms survived</span>
            </div>
            <div className="stat">
              <b>
                <Counter to={1} suffix="∞" />
              </b>
              <span>Curiosity</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-hint">
        SCROLL
        <ArrowDown size={14} />
      </div>

      {stealth && (
        <motion.div
          className="stealth-toast"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ▸ STEALTH MODE ENGAGED — signature changed, trace lost.
        </motion.div>
      )}
    </section>
  )
}
