import { useState } from 'react'
import './Faq.css'
import { FAQ, JOIN_FORM_URL } from '../../data/content.js'
import { IconChevron } from '../icons/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { useReveal } from '../../hooks/useReveal.js'

export default function Faq() {
  const { ref, visible } = useReveal()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className={`section faq reveal${visible ? ' is-visible' : ''}`} ref={ref}>
      <div className="container">
        <SectionHeading eyebrow={FAQ.eyebrow} title={FAQ.title} subtitle={FAQ.subtitle} />

        <div className="faq__list">
          {FAQ.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.question} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <IconChevron size={18} strokeWidth={2} className="faq__chevron" />
                </button>
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="faq__closing">
          <div>
            <h3>{FAQ.closing.title}</h3>
            <p>{FAQ.closing.subtitle}</p>
          </div>
          <a href={JOIN_FORM_URL} className="faq__closing-btn">
            {FAQ.closing.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
