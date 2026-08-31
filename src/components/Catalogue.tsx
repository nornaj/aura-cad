import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    name: 'Meridian Solitaire',
    img: '/gold-ring.webp',
    alt: 'solitaire ring render',
  },
  {
    name: 'Aster Halo',
    img: '/gold-ring.webp',
    alt: 'halo ring render',
  },
  {
    name: 'Kerf Eternity Band',
    img: '/gold-ring.webp',
    alt: 'eternity band render',
  },
  {
    name: 'Fluted Hoops',
    img: '/gold-ring.webp',
    alt: 'hoop earring render',
  },
  {
    name: 'Oval Signet',
    img: '/gold-ring.webp',
    alt: 'signet ring render',
  },
  {
    name: 'Bezel Drop Pendant',
    img: '/gold-ring.webp',
    alt: 'pendant render',
  },
  {
    name: 'Trilogy Tapered',
    img: '/gold-ring.webp',
    alt: 'three-stone ring render',
  },
  {
    name: 'Cuff No. 04',
    img: '/gold-ring.webp',
    alt: 'bangle / cuff render',
  },
]

const Catalogue = () => {
  const ref = useScrollReveal()

  return (
    <section className="catalogue" ref={ref}>
      <div className="catalogue__head">
        <div className="catalogue__headline">
          <div className="eyebrow" data-reveal="up"><em></em><span>07 &#8212; Selected work</span></div>
          <h2 data-reveal="up" data-reveal-delay="1">Recent<br />projects</h2>
        </div>
        <Link to="/portfolio" className="btn-outline" data-reveal="up" data-reveal-delay="2">View full portfolio <span>&#8594;</span></Link>
      </div>

      <div className="models">
        {projects.map((m, i) => (
          <a href="#" className="model" key={i} data-reveal="up" data-reveal-delay={String((i % 4) + 1)}>
            <div className="model__media">
              <img src={m.img} alt={m.alt} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Catalogue
