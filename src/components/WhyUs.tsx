import { useScrollReveal } from '../hooks/useScrollReveal'

const WhyUs = () => {
  const ref = useScrollReveal()

  return (
    <section className="why" ref={ref}>
      <div className="why__orbit"></div>

      <div className="why__head">
        <div className="why__headline">
          <div className="eyebrow" data-reveal="up">
            <em></em>
            <span>05 &#8212; Why us</span>
          </div>
          <h2 data-reveal="up" data-reveal-delay="1">Geometry you<br />can cast blind</h2>
        </div>
        <p className="why__intro" data-reveal="up" data-reveal-delay="2">
          Twelve years of CAD for jewellery houses, condensed into a library and
          a studio that hand you working files &#8212; not renders with problems
          hidden inside.
        </p>
      </div>

      <div className="why__grid">
        <div className="why-card" data-reveal="up" data-reveal-delay="1">
          <div className="why-card__media">
            <img src="/gold-ring.webp" alt="3D wireframe ring render" />
          </div>
          <div className="why-card__body">
            <span className="why-card__label">01 &#183; Watertight</span>
            <h3>Solids, not shells</h3>
            <p>
              Every model closes cleanly, so slicers and casters never argue
              with your file.
            </p>
          </div>
        </div>

        <div className="why-card" data-reveal="up" data-reveal-delay="2">
          <div className="why-card__media">
            <img src="/gold-ring.webp" alt="Stone setting close-up render" />
          </div>
          <div className="why-card__body">
            <span className="why-card__label">02 &#183; Measured</span>
            <h3>Seats cut to the stone</h3>
            <p>
              Girdle, table and culet modelled per cut &#8212; stones drop in
              without filing.
            </p>
          </div>
        </div>

        <div className="why-card" data-reveal="up" data-reveal-delay="3">
          <div className="why-card__media">
            <img src="/gold-ring.webp" alt="Printed resin piece" />
          </div>
          <div className="why-card__body">
            <span className="why-card__label">03 &#183; Proven</span>
            <h3>Printed before it ships</h3>
            <p>
              Each design is resin-tested at 0.02 mm, so what you download
              already exists.
            </p>
          </div>
        </div>

        <div className="stats-card" data-reveal="up" data-reveal-delay="4">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="stats-card__label">04 &#183; In numbers</span>
            <ul>
              <li>
                <b>12 yrs</b>
                <i>in CAD</i>
              </li>
              <li>
                <b>98%</b>
                <i>first-cast rate</i>
              </li>
              <li>
                <b>300+</b>
                <i>studios served</i>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-dark">
            Start a project <span>&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
