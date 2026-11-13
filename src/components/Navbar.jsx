import { useEffect, useState } from 'react'
import { Ghost } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <span className="logo-badge">
            <Ghost size={19} />
          </span>
          GHOST
          <span className="flag-strip" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </a>

        <nav className="nav-links">
          <a href="#operator">OPERATOR</a>
          <a href="#projects">PROJECTS</a>
          <a href="#terminal">TERMINAL</a>
          <a href="#arsenal">ARSENAL</a>
        </nav>

        <span className="status-pill">
          <span className="status-dot" />
          ONLINE — 03:00
        </span>
      </div>
    </header>
  )
}
