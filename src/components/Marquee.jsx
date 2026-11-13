import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'

const ITEMS = [
  'GHOST IN THE MACHINE',
  'CODE',
  'SYSTEMS',
  'DEEP DIVES',
  'BUILDING IN THE DARK',
  'SHIPPING IN SILENCE',
]

function Row() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className={i % 2 ? 'outline' : ''}>
          {item} <i>✦</i>
        </span>
      ))}
    </>
  )
}

export default function Marquee() {
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 })
  const skewX = useTransform(smoothVelocity, [-1400, 0, 1400], [-7, 0, 7])

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div className="marquee-track" style={{ skewX }}>
        <Row />
        <Row />
      </motion.div>
    </div>
  )
}
