import './JoinCta.css'
import { JOIN_CTA, JOIN_FORM_URL } from '../../data/content.js'
import { useReveal } from '../../hooks/useReveal.js'

export default function JoinCta() {
  const { ref, visible } = useReveal()

  return (
    <section id="cadastro" className={`section join reveal${visible ? ' is-visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="join__panel">
          <div className="join__card">
            {JOIN_CTA.image && (
              <img
                src={JOIN_CTA.image}
                alt="Ilustração do processo de cadastro"
                className="join__image"
                loading="lazy"
              />
            )}
            <h2>{JOIN_CTA.title}</h2>
            <p>{JOIN_CTA.subtitle}</p>

            <a href={JOIN_FORM_URL} className="join__button">
              {JOIN_CTA.buttonLabel}
            </a>
          </div>

          <div className="join__side">
            <div className="join__block">
              <h3 className="mono">{JOIN_CTA.after.title}</h3>
              <ol className="join__steps">
                {JOIN_CTA.after.steps.map((step, i) => (
                  <li key={step}>
                    <span className="mono">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="join__block">
              <h3 className="mono">{JOIN_CTA.quickRules.title}</h3>
              <ul className="join__quick-rules">
                {JOIN_CTA.quickRules.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
