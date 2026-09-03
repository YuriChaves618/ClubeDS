import './Coordination.css'
import { COORDINATION } from '../../data/content.js'
import { IconMail } from '../icons/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { useReveal } from '../../hooks/useReveal.js'

export default function Coordination() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="coordenacao"
      className={`section coordination reveal${visible ? ' is-visible' : ''}`}
      ref={ref}
    >
      <div className="container">
        <SectionHeading
          eyebrow={COORDINATION.eyebrow}
          title={COORDINATION.title}
          subtitle={COORDINATION.subtitle}
        />

        <div className="coordination__grid">
          {COORDINATION.team.map((person) => (
            <div key={person.name} className="person-card">
              <span className="person-card__badge mono">{person.initials}</span>

              <div className="person-card__media">
                {person.photo ? (
                  <img src={person.photo} alt={person.name} loading="lazy" />
                ) : (
                  <span className="person-card__placeholder mono">{person.initials}</span>
                )}
              </div>

              <h3>{person.name}</h3>
              <p className="person-card__role">{person.role}</p>
              <p className="person-card__bio">{person.bio}</p>
            </div>
          ))}
        </div>

        <p className="coordination__note mono">
          <IconMail size={14} strokeWidth={2} />
          dúvidas sobre matrícula e participação passam pela coordenação
        </p>
      </div>
    </section>
  )
}
