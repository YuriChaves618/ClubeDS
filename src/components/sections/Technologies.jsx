import './Technologies.css'
import { TECHNOLOGIES } from '../../data/content.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import { useReveal } from '../../hooks/useReveal.js'

export default function Technologies() {
  const { ref, visible } = useReveal()

  return (
    <section className={`section tech reveal${visible ? ' is-visible' : ''}`} ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow={TECHNOLOGIES.eyebrow}
          title={TECHNOLOGIES.title}
          subtitle={TECHNOLOGIES.subtitle}
        />

        <div className="tech__grid">
          {TECHNOLOGIES.items.map((item) => (
            <div key={item.name} className="tech-card">
              <span className="tech-card__name">{item.name}</span>
              <span className="tech-card__role mono">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
