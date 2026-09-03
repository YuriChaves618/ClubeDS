import { useEffect, useState } from 'react'
import './Navbar.css'
import { NAV_LINKS, JOIN_FORM_URL } from '../../data/content.js'
import Button from '../ui/Button.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__brand">
          <img src="/assets/logo-icon.png" alt="Logo ClubeDS" className="navbar__brand-logo" />
          <span className="mono">ClubeDS</span>
        </a>

        <nav className="navbar__links" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <Button href={JOIN_FORM_URL} variant="primary" className="navbar__cta">
            Entrar no Clube
          </Button>

          <button
            className={`navbar__burger${open ? ' is-open' : ''}`}
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button href={JOIN_FORM_URL} variant="primary" onClick={() => setOpen(false)}>
            Entrar no Clube
          </Button>
        </div>
      )}
    </header>
  )
}
