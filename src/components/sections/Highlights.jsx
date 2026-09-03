import './Highlights.css'
import { HIGHLIGHTS } from '../../data/content.js'
import { IconWorkshop, IconTalk, IconProject } from '../icons/Icon.jsx'
import Button from '../ui/Button.jsx'
import { useReveal } from '../../hooks/useReveal.js'

const ICONS = [IconWorkshop, IconTalk, IconProject]

export default function Highlights() {
  const { ref, visible } = useReveal()

  return (
    <section className={`section highlights reveal${visible ? ' is-visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow mono">{HIGHLIGHTS.title}</p>
          <h2>{HIGHLIGHTS.subtitle}</h2>
        </div>

        <div className="highlights__grid">
          {HIGHLIGHTS.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <div key={item.title} className="highlight-card">
                <div className="highlight-card__icon">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p className="highlight-card__desc">{item.description}</p>
                <p className="highlight-card__detail">{item.detail}</p>
              </div>
            )
          })}
        </div>

        <div className="highlights__footer">
          <div className="highlights__stats">
            {HIGHLIGHTS.stats.map((stat, i) => (
              <div key={stat.label} className="highlights__stat">
                <span className="highlights__stat-label mono">{stat.label}</span>
                <span className="highlights__stat-value">{stat.value}</span>
                {i < HIGHLIGHTS.stats.length - 1 && <span className="highlights__stat-sep" />}
              </div>
            ))}
          </div>

          <p className="highlights__note">* {HIGHLIGHTS.note}</p>

          <Button href="#trilhas" variant="ghost" showArrow>
            Ver atividades
          </Button>
        </div>
      </div>
    </section>
  )
}
