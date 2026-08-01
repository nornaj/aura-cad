const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__rules"></div>

      {/* ── STAGE (wordmark + 3D render) ── */}
      <div className="stage">
        <h1 className="wordmark">
          <span>AU</span>
          <span className="wordmark__gem"></span>
          <span>RA</span>
        </h1>

        <div className="render">
          <div className="render__ring"></div>
          <div className="render__ring--dashed"></div>
          <img
            className="render__img"
            src="/hero-ring.webp"
            alt="3D render of a hand holding a gold ring"
          />
        </div>

        {/* ── CONTENT GRID ── */}
        <div className="grid">
          {/* Left column – Intro */}
          <div className="intro">
            <div className="intro__kicker">
              Collection<br />2026
            </div>
            <p className="intro__copy">
              Production-ready 3D jewellery models — parametric, print-tested,
              and delivered as clean solids. Every piece is authored in CAD, not
              sculpted by guess.
            </p>
            <div className="intro__cta">
              <a href="#" className="btn">
                Browse models <span>&#8594;</span>
              </a>
              <div className="intro__note">1 240+ files &#183; instant download</div>
            </div>
          </div>

          {/* Middle spacer */}
          <div className="grid__spacer"></div>

          {/* Right column – Aside */}
          <div className="aside">
            <div className="aside__tagline">
              Jewellery designed<br />
              in millimetres,<br />
              felt in carats
            </div>
            <nav className="cats">
              <a href="#">
                <span>Rings</span>
                <span>&#8594;</span>
              </a>
              <a href="#">
                <span>Earrings</span>
                <span>&#8594;</span>
              </a>
              <a href="#">
                <span>Pendants</span>
                <span>&#8594;</span>
              </a>
              <a href="#">
                <span>Bridal sets</span>
                <span>&#8594;</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="foot">
        <div className="stats">
          <div>
            <b>1 240+</b>
            <i>CAD models</i>
          </div>
          <div>
            <b>0.02 mm</b>
            <i>print tolerance</i>
          </div>
          <div>
            <b>30+</b>
            <i>studio designers</i>
          </div>
        </div>
        <div className="foot__scroll">
          <em></em>
          <span>Scroll to explore the library</span>
        </div>
      </footer>
    </section>
  )
}

export default Hero
