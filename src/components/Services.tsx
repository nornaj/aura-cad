import { useScrollReveal } from '../hooks/useScrollReveal'

const Services = () => {
  const ref = useScrollReveal()

  return (
    <section className="services" ref={ref}>
<div className="services__head">
        <div className="services__headline">
          <div className="eyebrow" data-reveal="up"><em></em><span>03 &#8212; Services</span></div>
          <h2 data-reveal="up" data-reveal-delay="1">From sketch<br />to castable file</h2>
        </div>
        <p className="services__intro" data-reveal="up" data-reveal-delay="2">
          Eight ways studios, brands and independent jewellers work with us
          &#8212; pick one, or hand us the whole pipeline.
        </p>
      </div>

      <div className="services__grid">
        <a href="#" className="service service--dark" data-reveal="scale" data-reveal-delay="1">
          <div className="service__top"><span>01</span><em></em></div>
          <div className="service__body">
            <h3>Ready-made CAD library</h3>
            <p>1 240+ licensed models &#8212; rings, bands, settings &#8212; downloadable the moment you pay.</p>
            <span className="service__meta">Instant &#183; from $19 &#8594;</span>
          </div>
        </a>

        <a href="#" className="service" data-reveal="scale" data-reveal-delay="2">
          <div className="service__top"><span>02</span><em></em></div>
          <div className="service__body">
            <h3>Bespoke modelling</h3>
            <p>Send a sketch, photo or reference. We author the piece from zero, revisions included.</p>
            <span className="service__meta">3&#8211;5 days &#8594;</span>
          </div>
        </a>

        <a href="#" className="service" data-reveal="scale" data-reveal-delay="3">
          <div className="service__top"><span>03</span><em></em></div>
          <div className="service__body">
            <h3>Photoreal rendering</h3>
            <p>Studio-lit stills and 360&#176; turntables for your store, portfolio and paid social.</p>
            <span className="service__meta">4K &#183; per angle &#8594;</span>
          </div>
        </a>

        <a href="#" className="service" data-reveal="scale" data-reveal-delay="4">
          <div className="service__top"><span>04</span><em></em></div>
          <div className="service__body">
            <h3>Print &amp; cast prep</h3>
            <p>Sprues, wall-thickness checks and orientation tuned to your resin printer or caster.</p>
            <span className="service__meta">0.02 mm tolerance &#8594;</span>
          </div>
        </a>

        <a href="#" className="service" data-reveal="scale" data-reveal-delay="1">
          <div className="service__top"><span>05</span><em></em></div>
          <div className="service__body">
            <h3>Parametric sizing</h3>
            <p>One file, every size and stone variant &#8212; driven by parameters instead of remodelling.</p>
            <span className="service__meta">Full size range &#8594;</span>
          </div>
        </a>

        <a href="#" className="service" data-reveal="scale" data-reveal-delay="2">
          <div className="service__top"><span>06</span><em></em></div>
          <div className="service__body">
            <h3>White-label collections</h3>
            <p>An exclusive capsule authored for your brand, with rights transferred on delivery.</p>
            <span className="service__meta">Exclusive rights &#8594;</span>
          </div>
        </a>

        <a href="#" className="service" data-reveal="scale" data-reveal-delay="3">
          <div className="service__top"><span>07</span><em></em></div>
          <div className="service__body">
            <h3>Engraving &amp; texturing</h3>
            <p>Monograms, hallmarks and surface texture cut straight into the geometry &#8212; legible after casting.</p>
            <span className="service__meta">48 h turnaround &#8594;</span>
          </div>
        </a>

        <a href="#" className="service" data-reveal="scale" data-reveal-delay="4">
          <div className="service__top"><span>08</span><em></em></div>
          <div className="service__body">
            <h3>Stone sourcing specs</h3>
            <p>Full stone charts with cut, size and count per piece, so your supplier quotes without guesswork.</p>
            <span className="service__meta">CSV + PDF &#8594;</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Services
