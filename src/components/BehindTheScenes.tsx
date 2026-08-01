import { useScrollReveal } from '../hooks/useScrollReveal'

const BehindTheScenes = () => {
  const ref = useScrollReveal()

  return (
    <section className="bts" ref={ref}>
<div className="bts__head">
        <div className="bts__headline">
          <div className="eyebrow" data-reveal="up"><em></em><span>06 &#8212; Behind the scenes</span></div>
          <h2 data-reveal="up" data-reveal-delay="1">Inside the<br />modelling room</h2>
        </div>
        <p className="bts__intro" data-reveal="up" data-reveal-delay="2">
          Five stages between a reference photo and a file your caster can
          trust. Nothing leaves the studio before stage five.
        </p>
      </div>

      <div className="mosaic">
        <div className="tile tile--hero" data-reveal="scale">
          <img src="/gold-ring.webp" alt="Modelling viewport" />
        </div>

        <div className="tile" data-reveal="up" data-reveal-delay="1">
          <img src="/gold-ring.webp" alt="Wireframe close-up" />
          <div className="cap">Stage 01 &#183; Surfacing</div>
        </div>

        <div className="live" data-reveal="up" data-reveal-delay="2">
          <span className="live__label">Live now</span>
          <div className="live__num">41</div>
          <span className="live__sub">files in production</span>
        </div>

        <div className="tile tile--wide" data-reveal="up" data-reveal-delay="3">
          <img src="/gold-ring.webp" alt="Stone-setting detail render" />
          <div className="cap">Stage 02 &#183; Stone seats</div>
        </div>

      </div>

      <div className="film" data-reveal="up" data-reveal-delay="4">
        <p>Watch a piece go from photo to cast in four minutes.</p>
        <a href="#">Play the studio film <span>&#8594;</span></a>
      </div>
    </section>
  )
}

export default BehindTheScenes
