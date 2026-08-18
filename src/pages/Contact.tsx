import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const serviceOptions = ['Bespoke model', 'Library licence', 'Rendering', 'Print prep', 'White label']

const Contact = () => {
  const ref = useScrollReveal()
  const [activeChip, setActiveChip] = useState('Bespoke model')

  return (
    <section className="contact" ref={ref}>
      <div className="contact__orbit"></div>

      <div className="contact__grid">
        {/* Left column – Info */}
        <div className="contact-lead" data-reveal="up">
          <div className="contact-lead__top">
            <h1>
              Let&#8217;s talk
              <br />
              millimetres
            </h1>
            <p>
              Tell us what you need modelled, or ask us anything about a file in
              the library. A designer &#8212; not a form robot &#8212; answers
              within one working day.
            </p>
          </div>

          <div className="contact-rows">
            <a href="mailto:hello@aura.cad" className="contact-row">
              <span className="contact-row__stack">
                <span className="contact-row__label">Email</span>
                <span className="contact-row__value">hello@aura.cad</span>
              </span>
              <span className="contact-row__arrow">&#8594;</span>
            </a>
            <div className="contact-row">
              <span className="contact-row__stack">
                <span className="contact-row__label">Studio Hours</span>
                <span className="contact-row__value">Mon–Fri 09:00–18:00 CET</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right column – Form */}
        <form
          className="contact-brief"
          onSubmit={(e) => e.preventDefault()}
          data-reveal="up"
          data-reveal-delay="2"
        >
          <div className="contact-brief__head">
            <h2>Start a project</h2>
            <p className="contact-brief__sub">
              Quote and timeline back within 24 hours.
            </p>
          </div>

          <div className="contact-brief__pair">
            <label>
              Name
              <input type="text" placeholder="Marta Keller" />
            </label>
            <label>
              Studio
              <input type="text" placeholder="Keller Atelier" />
            </label>
          </div>

          <div className="contact-brief__pair">
            <label>
              Email
              <input type="email" placeholder="studio@atelier.com" />
            </label>
            <label>
              Deadline
              <input type="text" placeholder="Mid-August" />
            </label>
          </div>

          <div className="contact-brief__group">
            <span>What do you need?</span>
            <div className="contact-chips">
              {serviceOptions.map((opt) => (
                <span
                  key={opt}
                  className={activeChip === opt ? 'is-active' : ''}
                  onClick={() => setActiveChip(opt)}
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>

          <label>
            Brief
            <textarea
              rows={5}
              placeholder="Oval halo, 1.5 ct centre, US 6, yellow gold, cathedral shank."
            ></textarea>
          </label>

          <div className="contact-brief__foot">
            <span className="contact-attach">
              Attach sketch &#183; JPG, PDF, 3DM
            </span>
            <button type="submit" className="contact-send">
              Send the brief <span>&#8594;</span>
            </button>
          </div>

          <div className="contact-terms">
            <span>Reply in &#8804; 24 h</span>
            <span>&#183;</span>
            <span>NDA on request</span>
            <span>&#183;</span>
            <span>Mon&#8211;Fri 09&#8211;18 CET</span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
