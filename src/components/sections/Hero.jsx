import './Hero.css'
import { HERO, JOIN_FORM_URL } from '../../data/content.js'
import Button from '../ui/Button.jsx'
import { IconBranch } from '../icons/Icon.jsx'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow mono">{HERO.eyebrowCommand}</p>

          <h1 className="hero__title">
            {HERO.title} <span className="hero__title-accent">{HERO.highlight}</span>
          </h1>

          <p className="hero__subtitle">{HERO.subtitle}</p>

          <div className="hero__actions">
            <Button href={JOIN_FORM_URL} variant="primary">
              Entrar no Clube
            </Button>
            <Button href="#trilhas" variant="ghost" showArrow>
              Ver trilhas
            </Button>
          </div>

          <dl className="hero__stats">
            {HERO.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="editor">
            <div className="editor__bar">
              <span className="editor__dot editor__dot--red" />
              <span className="editor__dot editor__dot--yellow" />
              <span className="editor__dot editor__dot--green" />
              <span className="editor__file mono">clubeds.log</span>
            </div>
            <div className="editor__body mono">
              {HERO.commits.map((commit) => (
                <div key={commit.hash} className="editor__row">
                  <IconBranch size={14} strokeWidth={2} />
                  <span className="editor__hash">{commit.hash}</span>
                  <span className="editor__message">{commit.message}</span>
                  <span className="editor__tag">{commit.tag}</span>
                </div>
              ))}
              <div className="editor__prompt">
                <span className="editor__prompt-caret">clube-ds$</span>
                <span className="editor__cursor" />
              </div>
            </div>
          </div>
          <div className="hero__glow" />
        </div>
      </div>
    </section>
  )
}
