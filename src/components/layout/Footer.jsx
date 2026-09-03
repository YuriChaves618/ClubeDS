import './Footer.css'
import { FOOTER, JOIN_FORM_URL } from '../../data/content.js'
import Button from '../ui/Button.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={FOOTER.logo} alt={`Logo ${FOOTER.brand}`} className="footer__logo" />
          <div>
            <p className="footer__name">{FOOTER.brand}</p>
            <p className="footer__tagline">{FOOTER.tagline}</p>
            <p className="footer__description">{FOOTER.description}</p>
          </div>
        </div>

        <div className="footer__columns">
          {FOOTER.columns.map((col) => (
            <nav key={col.title} className="footer__col" aria-label={col.title}>
              <p className="footer__col-title mono">{col.title}</p>
              {col.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <Button href={JOIN_FORM_URL} variant="ghost" className="footer__cta">
          Entrar no Clube
        </Button>
      </div>

      <div className="container footer__bottom">
        <p>© {FOOTER.year} {FOOTER.brand}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
