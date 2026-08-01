import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const filters = ['All', 'Solitaire', 'Halo', 'Bands', 'Earrings', 'Signet']

const models = [
  {
    name: 'Meridian Solitaire',
    price: '$39',
    specs: ['6.5 mm round', '·', 'US 4–12', '·', 'STL / 3DM / OBJ'],
    badge: 'New',
    badgeGold: false,
    img: '/gold-ring.webp',
    alt: 'solitaire ring render',
  },
  {
    name: 'Aster Halo',
    price: '$54',
    specs: ['1.2 ct centre', '·', '34 pavé', '·', 'Stone chart'],
    img: '/gold-ring.webp',
    alt: 'halo ring render',
  },
  {
    name: 'Kerf Eternity Band',
    price: '$29',
    specs: ['2.4 mm', '·', 'Parametric sizing', '·', 'Print-tested'],
    badge: 'Bestseller',
    badgeGold: true,
    img: '/gold-ring.webp',
    alt: 'eternity band render',
  },
  {
    name: 'Fluted Hoops',
    price: '$34',
    specs: ['28 mm', '·', 'Hollow build', '·', 'Pair file'],
    img: '/gold-ring.webp',
    alt: 'hoop earring render',
  },
  {
    name: 'Oval Signet',
    price: '$44',
    specs: ['13 × 11 mm face', '·', 'Engraving-ready'],
    img: '/gold-ring.webp',
    alt: 'signet ring render',
  },
  {
    name: 'Bezel Drop Pendant',
    price: '$32',
    specs: ['8 × 6 mm oval', '·', 'Bail included'],
    img: '/gold-ring.webp',
    alt: 'pendant render',
  },
  {
    name: 'Trilogy Tapered',
    price: '$49',
    specs: ['3 × round', '·', 'Tapered shank', '·', 'US 4–12'],
    badge: 'New',
    badgeGold: false,
    img: '/gold-ring.webp',
    alt: 'three-stone ring render',
  },
  {
    name: 'Cuff No. 04',
    price: '$58',
    specs: ['62 mm inner', '·', 'Hinged build', '·', 'Hollow'],
    img: '/gold-ring.webp',
    alt: 'bangle / cuff render',
  },
]

const Catalogue = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useScrollReveal()

  return (
    <section className="catalogue" ref={ref}>
<div className="catalogue__head">
        <div className="catalogue__headline">
          <div className="eyebrow" data-reveal="up"><em></em><span>07 &#8212; Featured collection</span></div>
          <h2 data-reveal="up" data-reveal-delay="1">Eight files,<br />ready to cast</h2>
        </div>
        <a href="#" className="btn-outline" data-reveal="up" data-reveal-delay="2">All 1 240 models <span>&#8594;</span></a>
      </div>

      <div className="filters" data-reveal="fade" data-reveal-delay="3">
        {filters.map(f => (
          <span
            key={f}
            className={f === activeFilter ? 'is-active' : ''}
            onClick={() => setActiveFilter(f)}
            style={{ cursor: 'pointer' }}
          >
            {f}
          </span>
        ))}
      </div>

      <div className="models">
        {models.map((m, i) => (
          <a href="#" className="model" key={i} data-reveal="up" data-reveal-delay={String((i % 4) + 1)}>
            <div className="model__media">
              <img src={m.img} alt={m.alt} />
              {m.badge && (
                <span className={`badge${m.badgeGold ? ' badge--gold' : ''}`}>{m.badge}</span>
              )}
            </div>
            <div className="model__body">
              <div className="model__row">
                <h3>{m.name}</h3>
                <span className="model__price">{m.price}</span>
              </div>
              <div className="model__specs">
                {m.specs.map((s, j) => <span key={j}>{s}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Catalogue
