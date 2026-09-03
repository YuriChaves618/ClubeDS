import './HowItWorks.css'
import { HOW_IT_WORKS } from '../../data/content.js'
import { IconStack, IconCode, IconRocket } from '../icons/Icon.jsx'
import { useReveal } from '../../hooks/useReveal.js'

const ICONS = [IconStack, IconCode, IconRocket]

export default function HowItWorks() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="como-funciona"
      className={`section how reveal${visible ? ' is-visible' : ''}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-head section-head--center how__head">
          <p className="eyebrow mono" style={{ justifyContent: 'center' }}>
            {HOW_IT_WORKS.eyebrow}
          </p>
          <h2>{HOW_IT_WORKS.title}</h2>
        </div>

        <ol className="how__steps">
          {HOW_IT_WORKS.steps.map((step, i) => {
            const Icon = ICONS[i]
            return (
              <li key={step.step} className="how__step">
                <div className="how__step-top">
                  <span className="how__step-num mono">{step.step}</span>
                  <Icon size={20} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
