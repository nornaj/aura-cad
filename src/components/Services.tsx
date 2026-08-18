import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const servicesList = [
  {
    num: '01',
    title: 'Custom CAD',
    desc: 'Bespoke 3D modelling from technical drawings, sketches, or physical samples — authored with exact stone seats and casting tolerances.',
    meta: 'Precision CAD · 3–5 Days →',
    dark: true,
    link: '/custom-cad',
  },
  {
    num: '02',
    title: 'Rings',
    desc: 'Solitaires, halos, eternity bands, and signets — engineered for correct metal thickness, stone seating, and size range scalability.',
    meta: 'US 4–12 · Watertight →',
    link: '/portfolio?category=Rings',
  },
  {
    num: '03',
    title: 'Zbrush Sculpting',
    desc: 'Organic bas-reliefs, heraldry, anatomical motifs, and complex freeform textures crafted with high-density digital sculpting.',
    meta: 'High-poly Mesh · STL / OBJ →',
    link: '/custom-cad',
  },
  {
    num: '04',
    title: 'Render',
    desc: 'Studio-lit 4K photoreal stills, 360° turntable animations, and material showcases for ecommerce, portfolios, and client pitch decks.',
    meta: '4K Ultra HD · 360° Turntable →',
    link: '/custom-cad',
  },
  {
    num: '05',
    title: 'Pendants',
    desc: 'Medallions, bezel-set drops, and complex locket assemblies designed with balanced bail placement and optimal weight distribution.',
    meta: 'Bail Integrated · Castable →',
    link: '/portfolio?category=Pendants',
  },
  {
    num: '06',
    title: 'Grillz',
    desc: 'Custom dental caps, open-face frames, and iced pavé grillz authored directly from intraoral 3D scans for an anatomical fit.',
    meta: '3D Scan Compatible · Dental CAD →',
    link: '/custom-cad',
  },
  {
    num: '07',
    title: 'Watches',
    desc: 'Case architecture, bezel assemblies, dial indices, and custom link bracelets authored for Swiss-standard mechanical tolerances.',
    meta: 'Case & Bezel Geometry →',
    dark: true,
    link: '/custom-cad',
  },
  {
    num: '08',
    title: 'Earrings',
    desc: 'Hoops, huggies, studs, and drop earrings calculated with hollowed weight reduction and secure post or clasp geometry.',
    meta: 'Hollow Weight Balance →',
    link: '/portfolio?category=Earrings',
  },
  {
    num: '09',
    title: 'Bracelets',
    desc: 'Tennis bracelets, hinged cuffs, and articulated link assemblies featuring concealed clasps and fluid movement joints.',
    meta: 'Articulated Links · Hidden Clasp →',
    link: '/portfolio?category=Bracelets',
  },
  {
    num: '10',
    title: 'Eyewear',
    desc: 'Precious metal frames, temple hinges, bridge components, and rimless mountings crafted for ergonomic luxury and structural strength.',
    meta: 'Ergonomic Frames · Metal CAD →',
    link: '/custom-cad',
  },
  {
    num: '11',
    title: 'Necklaces',
    desc: 'Statement collars, chain links, and multi-component gemstone strands authored with seamless flexibility and custom catches.',
    meta: 'Flexible Links · Custom Catches →',
    link: '/custom-cad',
  },
  {
    num: '12',
    title: 'Product Design',
    desc: 'Luxury accessories, cufflinks, money clips, perfume hardware, and bespoke objets d’art authored from initial concept to tooling.',
    meta: 'Concept to Production →',
    link: '/custom-cad',
  },
]

const Services = () => {
  const ref = useScrollReveal()

  return (
    <section className="services" ref={ref}>
      <div className="services__head">
        <div className="services__headline">
          <div className="eyebrow" data-reveal="up"><em></em><span>03 &#8212; Services</span></div>
          <h2 data-reveal="up" data-reveal-delay="1">From concept<br />to castable geometry</h2>
        </div>
        <p className="services__intro" data-reveal="up" data-reveal-delay="2">
          Twelve specialized CAD and design capabilities for jewellery houses, studios, and independent makers.
        </p>
      </div>

      <div className="services__grid">
        {servicesList.map((item, index) => (
          <Link
            key={item.title}
            to={item.link}
            className={`service${item.dark ? ' service--dark' : ''}`}
            data-reveal="scale"
            data-reveal-delay={String((index % 4) + 1)}
          >
            <div className="service__top">
              <span>{item.num}</span>
              <em></em>
            </div>
            <div className="service__body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="service__meta">{item.meta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Services
