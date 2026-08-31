import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Expectations = () => {
  const ref = useScrollReveal()

  return (
    <section className="expect" ref={ref}>
      {/* ── LEFT: Copy column ── */}
      <div className="expect__copy">
        <div className="eyebrow" data-reveal="up">
          <em></em>
          <span>02 &#8212; What you get</span>
        </div>
        <h2 data-reveal="up" data-reveal-delay="1">We meet your<br />expectations</h2>
        <p data-reveal="up" data-reveal-delay="2">
          Every project we take on is built to production standard:
          watertight solids, correct metal thickness, stone seats measured to the
          cut. You get a working file, not a pretty picture.
        </p>
        <p data-reveal="up" data-reveal-delay="3">
          Need something that isn't there yet? Send a sketch or a reference and
          our designers will author it from scratch &#8212; revisions included
          until the geometry is right.
        </p>
        <div className="chips" data-reveal="up" data-reveal-delay="4">
          <span>Watertight solids</span>
          <span>Stone charts</span>
          <span>Print-tested</span>
        </div>
        <Link to="/portfolio" className="btn-ghost" data-reveal="up" data-reveal-delay="5">
          View the portfolio <span>&#8594;</span>
        </Link>
      </div>

      {/* ── RIGHT: Showcase column ── */}
      <div className="expect__showcase">
        <div className="ghost-word">Rings</div>

        <div className="showcase__body">
          <div className="featured" data-reveal="scale">
            <div className="featured__orbit"></div>
            <img src="/gold-ring.webp" alt="Featured ring render" />
          </div>

          <div className="cards">
            <a href="#" className="card" data-reveal="up" data-reveal-delay="1">
              <img src="/gold-ring.webp" alt="Earrings" />
              <span>Earrings</span>
            </a>
            <a href="#" className="card" data-reveal="up" data-reveal-delay="2">
              <img src="/gold-ring.webp" alt="Pendants" />
              <span>Pendants</span>
            </a>
            <a href="#" className="card" data-reveal="up" data-reveal-delay="3">
              <img src="/gold-ring.webp" alt="Brooches" />
              <span>Brooches</span>
            </a>
          </div>
        </div>

        <div className="formats" data-reveal="fade" data-reveal-delay="4">
          Delivered as .STL &#183; .3DM &#183; .OBJ
        </div>
      </div>
    </section>
  )
}

export default Expectations
