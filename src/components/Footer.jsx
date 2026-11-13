import { Github, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-giant">GHOST</div>
        <div className="footer-row">
          <p>© 2026 GHOST — BUILT IN THE DARK, SHIPPED IN SILENCE.</p>
          <p className="footer-credit">
            SKULL MODEL: DR MARIANO CORETTI, CC BY 4.0
          </p>
          <div className="footer-links">
            <a href="https://github.com/ghostusm-cmd" target="_blank" rel="noreferrer">
              <Github size={15} /> GITHUB
            </a>
            <a href="https://www.instagram.com/develop_ghost/" target="_blank" rel="noreferrer">
              <Instagram size={15} /> INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
