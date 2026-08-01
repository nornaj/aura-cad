import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const categories = ['All', 'Rings', 'Bridal', 'Earrings', 'Pendants', 'Bracelets', 'Signets']

const products = [
  { name: 'Meridian Solitaire', price: '$39', specs: ['6.5 mm round', 'US 4–12'], badge: 'New', category: 'Rings' },
  { name: 'Aster Halo', price: '$54', specs: ['1.2 ct centre', '34 pavé'], category: 'Bridal' },
  { name: 'Kerf Eternity Band', price: '$29', specs: ['2.4 mm', 'Parametric'], badge: 'Bestseller', badgeGold: true, category: 'Rings' },
  { name: 'Fluted Hoops', price: '$34', specs: ['28 mm', 'Hollow build'], category: 'Earrings' },
  { name: 'Oval Signet', price: '$44', specs: ['13 × 11 mm', 'Engraving-ready'], category: 'Signets' },
  { name: 'Bezel Drop Pendant', price: '$32', specs: ['8 × 6 mm oval', 'Bail included'], category: 'Pendants' },
  { name: 'Trilogy Tapered', price: '$49', specs: ['3 × round', 'Tapered shank'], badge: 'New', category: 'Bridal' },
  { name: 'Cuff No. 04', price: '$58', specs: ['62 mm inner', 'Hinged'], category: 'Bracelets' },
  { name: 'Bezel Studs', price: '$24', specs: ['4 mm round', 'Pair file'], category: 'Earrings' },
  { name: 'Court Band 3 mm', price: '$19', specs: ['3 mm', 'Comfort fit'], category: 'Rings' },
  { name: 'Line Bracelet', price: '$62', specs: ['48 links', 'Stone chart'], category: 'Bracelets' },
  { name: 'Cathedral Six-Claw', price: '$42', specs: ['1 ct centre', 'US 4–12'], category: 'Rings' },
]

const CataloguePage = () => {
  const ref = useScrollReveal()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <section className="cat-page" ref={ref}>
      <div className="cat-page__head" data-reveal="up">
        <div className="cat-page__copy">
          <h1>The library</h1>
          <p>
            Every file is a watertight solid, print-tested at 0.02 mm and
            shipped with a stone chart. Licence once, cast as often as you like.
          </p>
        </div>
        <div className="cat-page__notes">
          <span>.STL &#183; .3DM &#183; .OBJ</span>
          <span>Commercial licence included</span>
          <span>Instant download</span>
        </div>
      </div>

      <div className="cat-page__bar" data-reveal="up" data-reveal-delay="1">
        <div className="cat-page__filters">
          {categories.map((c) => (
            <span
              key={c}
              className={active === c ? 'is-active' : ''}
              onClick={() => setActive(c)}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="cat-page__sort">
          <span>Sort</span>
          <b>Newest first <span>&#8595;</span></b>
        </div>
      </div>

      <div className="cat-page__grid">
        {filtered.map((item) => (
          <a href="#" className="cat-model" key={item.name}>
            <div className="cat-model__media">
              {item.badge && (
                <span className={`cat-badge${item.badgeGold ? ' cat-badge--gold' : ''}`}>
                  {item.badge}
                </span>
              )}
            </div>
            <div className="cat-model__body">
              <div className="cat-model__row">
                <h3>{item.name}</h3>
                <span className="cat-model__price">{item.price}</span>
              </div>
              <div className="cat-model__specs">
                {item.specs.map((s, i) => (
                  <span key={i}>{i > 0 ? <>&nbsp;&#183;&nbsp;</> : ''}{s}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="cat-page__more">
        <span>Showing {filtered.length} of 1 240 files</span>
        <a href="#">
          Load more <b>&#8595;</b>
        </a>
      </div>
    </section>
  )
}

export default CataloguePage
