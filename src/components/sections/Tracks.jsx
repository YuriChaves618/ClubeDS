import './Tracks.css'
import { TRACKS } from '../../data/content.js'
import { IconCheck } from '../icons/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import UpcomingEvents from './UpcomingEvents.jsx'

export default function Tracks() {
  const { ref, visible } = useReveal()

  return (
    <section id="trilhas" className={`section tracks reveal${visible ? ' is-visible' : ''}`} ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="trilhas/"
          title="Trilhas do ClubeDS"
          subtitle="Um caminho claro para evoluir, sem pular etapas importantes."
        />

        <div className="tracks__grid">
          {TRACKS.map((track, i) => (
            <div key={track.id} className="track-card">
              <div className="track-card__num mono">{track.number}</div>
              <h3>{track.name}</h3>
              <p className="track-card__tagline">{track.tagline}</p>
              <ul className="track-card__topics">
                {track.topics.map((topic) => (
                  <li key={topic}>
                    <IconCheck size={15} strokeWidth={2.2} />
                    {topic}
                  </li>
                ))}
              </ul>
              {i < TRACKS.length - 1 && <span className="track-card__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <UpcomingEvents />
      </div>
    </section>
  )
}
