const AboutHero = () => {
  return (
    <section id="about" className="about">
      <div className="about__visual">
        <div className="about__orbit"></div>
        <div className="about__render">
          <img
            src="/about-hero.webp"
            alt="3D render of a gold ring"
          />
        </div>
      </div>

      <div className="panel">

        <div className="panel__copy">
          <h1>The studio<br />behind the<br />geometry</h1>
          <p>We are thirty CAD designers who came out of jewellery benches, not render farms. Every model we author is measured to the stone and tested on a printer before it reaches a portfolio page.</p>
          <p className="is-strong">No mass output, no recycled meshes &#8212; each piece is built from scratch and detailed down to the last millimetre.</p>
        </div>
      </div>

      <div className="est"><em></em><span>Est. 2014 &#183; Vienna &#183; Tbilisi</span></div>

      <div className="about-stats">
        <div className="about-stats__grid">
          <div className="stat">
            <span className="stat__arrow">&#8594;</span>
            <b>1 240+</b>
            <i>production-ready<br />CAD models</i>
          </div>
          <div className="stat">
            <span className="stat__arrow">&#8594;</span>
            <b>30+</b>
            <i>designers<br />across 9 countries</i>
          </div>
          <div className="stat">
            <span className="stat__arrow">&#8594;</span>
            <b>98%</b>
            <i>first-cast<br />success rate</i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
