import './Pedagogy.css'
import { PEDAGOGY, JOIN_FORM_URL } from '../../data/content.js'
import { IconCheck } from '../icons/Icon.jsx'
import Button from '../ui/Button.jsx'
import { useReveal } from '../../hooks/useReveal.js'

export default function Pedagogy() {
  const { ref, visible } = useReveal()

  return (
    <section className={`section pedagogy reveal${visible ? ' is-visible' : ''}`} ref={ref}>
      <div className="container pedagogy__inner">
        <div className="pedagogy__left">
          <h2>{PEDAGOGY.title}</h2>
          <p className="pedagogy__subtitle">{PEDAGOGY.subtitle}</p>

          <ul className="pedagogy__routine">
            {PEDAGOGY.routine.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="delivery-card">
          <h3>{PEDAGOGY.delivery.title}</h3>
          <p>{PEDAGOGY.delivery.subtitle}</p>

          <ul className="delivery-card__list">
            {PEDAGOGY.delivery.items.map((item) => (
              <li key={item}>
                <IconCheck size={16} strokeWidth={2.2} />
                {item}
              </li>
            ))}
          </ul>

          <Button href={JOIN_FORM_URL} variant="primary" className="delivery-card__cta">
            Entrar no clube
          </Button>
        </div>
      </div>
    </section>
  )
}
