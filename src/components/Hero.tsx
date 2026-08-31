import { Link } from 'react-router-dom'

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
              Studio<br />2026
            </div>
            <p className="intro__copy">
              Production-ready 3D jewellery models — parametric, print-tested,
              and delivered as clean solids. Every piece is authored in CAD, not
              sculpted by guess.
            </p>
            <div className="intro__cta">
              <a href="#" className="btn">
                View our work <span>&#8594;</span>
              </a>
              <div className="intro__note">300+ projects completed</div>
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
              <Link to="/portfolio?category=Rings">
                <span>Rings</span>
                <span>&#8594;</span>
              </Link>
              <Link to="/portfolio?category=Earrings">
                <span>Earrings</span>
                <span>&#8594;</span>
              </Link>
              <Link to="/portfolio?category=Pendants">
                <span>Pendants</span>
                <span>&#8594;</span>
              </Link>
              <Link to="/portfolio?category=Bridal">
                <span>Bridal sets</span>
                <span>&#8594;</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Hero
