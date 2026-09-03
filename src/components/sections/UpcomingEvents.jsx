import './UpcomingEvents.css'
import { UPCOMING_EVENTS } from '../../data/content.js'
import { IconClock, IconWorkshop, IconTalk } from '../icons/Icon.jsx'
import Button from '../ui/Button.jsx'

const TYPE_ICON = {
  Oficina: IconWorkshop,
  Palestra: IconTalk,
}

export default function UpcomingEvents() {
  return (
    <div id="eventos" className="events">
      <div className="events__head">
        <h3>{UPCOMING_EVENTS.title}</h3>
        <p>{UPCOMING_EVENTS.subtitle}</p>
      </div>

      <div className="events__grid">
        {UPCOMING_EVENTS.events.map((event) => {
          const Icon = TYPE_ICON[event.type] ?? IconWorkshop
          return (
            <div key={event.title} className="event-card">
              <div className="event-card__meta">
                <span className="event-card__type mono">
                  <Icon size={13} strokeWidth={2.2} />
                  {event.type}
                </span>
                <span className="event-card__duration mono">
                  <IconClock size={13} strokeWidth={2.2} />
                  {event.duration}
                </span>
              </div>

              <h4>{event.title}</h4>
              <p className="event-card__desc">{event.description}</p>

              <div className="event-card__footer">
                <span className="event-card__date mono">{event.date}</span>
                <Button href="#cadastro" variant="ghost" className="event-card__btn">
                  {event.cta}
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
