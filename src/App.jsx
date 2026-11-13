import { motion, useScroll, useSpring } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Operator from './components/Operator'
import Projects from './components/Projects'
import Terminal from './components/Terminal'
import Arsenal from './components/Arsenal'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="noise" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Operator />
        <Projects />
        <Terminal />
        <Arsenal />
      </main>
      <Footer />
    </>
  )
}
