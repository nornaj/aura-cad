import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  { name: 'Meridian Solitaire' },
  { name: 'Aster Halo' },
  { name: 'Kerf Eternity Band' },
  { name: 'Fluted Hoops' },
  { name: 'Oval Signet' },
  { name: 'Bezel Drop Pendant' },
  { name: 'Trilogy Tapered' },
  { name: 'Cuff No. 04' },
  { name: 'Bezel Studs' },
  { name: 'Court Band 3 mm' },
  { name: 'Line Bracelet' },
  { name: 'Cathedral Six-Claw' },
]

const CataloguePage = () => {
  const ref = useScrollReveal()

  return (
    <section className="cat-page" ref={ref}>
      <div className="cat-page__head" data-reveal="up">
        <div className="cat-page__copy">
          <h1>Portfolio</h1>
          <p>
            A selection of CAD projects we've designed for jewellery houses,
            independent makers, and studios worldwide. Every piece shown
            was modelled, refined, and delivered production-ready.
          </p>
        </div>
        <div className="cat-page__notes">
          <span>Rings · Earrings · Pendants</span>
          <span>Bracelets · Bridal · Signets</span>
          <span>Custom commissions welcome</span>
        </div>
      </div>

      <div className="cat-page__grid">
        {projects.map((item) => (
          <a href="#" className="cat-model" key={item.name}>
            <div className="cat-model__media"></div>
          </a>
        ))}
      </div>

      <div className="cat-page__more">
        <span>Showing {projects.length} featured projects</span>
        <a href="#">
          Load more <b>&#8595;</b>
        </a>
      </div>
    </section>
  )
}

export default CataloguePage
