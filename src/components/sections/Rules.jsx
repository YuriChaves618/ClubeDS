import './Rules.css'
import { RULES } from '../../data/content.js'
import { IconShield, IconVote, IconCrown, IconHeart } from '../icons/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { useReveal } from '../../hooks/useReveal.js'

const ICONS = [IconShield, IconVote, IconCrown, IconHeart]

export default function Rules() {
  const { ref, visible } = useReveal()

  return (
    <section id="regras" className={`section rules reveal${visible ? ' is-visible' : ''}`} ref={ref}>
      <div className="container">
        <SectionHeading title={RULES.title} subtitle={RULES.subtitle} />

        <div className="rules__grid">
          {RULES.items.map((rule, i) => {
            const Icon = ICONS[i]
            return (
              <div key={rule.title} className="rule-card">
                <Icon size={20} />
                <h3>{rule.title}</h3>
                <p>{rule.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
