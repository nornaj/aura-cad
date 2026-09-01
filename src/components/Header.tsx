import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '#' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Partnership', path: '/partnership' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const megaServices = [
  { num: '01', title: 'Partnership', desc: 'Dedicated CAD capacity & white-label collections for studios worldwide.', link: '/service/partnership' },
  { num: '02', title: 'Rings', desc: 'Solitaires, halos, eternity bands & signets — parametric sizing included.', link: '/service/rings' },
  { num: '03', title: 'Zbrush Sculpting', desc: 'Organic bas-reliefs, heraldry & complex freeform textures.', link: '/service/zbrush-sculpting' },
  { num: '04', title: 'Render', desc: '4K photoreal stills, 360° turntables & material showcases.', link: '/service/render' },
  { num: '05', title: 'Pendants', desc: 'Medallions, bezel-set drops & locket assemblies with balanced bails.', link: '/service/pendants' },
  { num: '06', title: 'Grillz', desc: 'Custom dental caps & iced pavé grillz from intraoral 3D scans.', link: '/service/grillz' },
  { num: '07', title: 'Watches', desc: 'Case architecture, bezel assemblies & link bracelets to Swiss spec.', link: '/service/watches' },
  { num: '08', title: 'Earrings', desc: 'Hoops, huggies & drops with hollowed weight reduction.', link: '/service/earrings' },
  { num: '09', title: 'Bracelets', desc: 'Tennis bracelets, hinged cuffs & articulated link assemblies.', link: '/service/bracelets' },
  { num: '10', title: 'Eyewear', desc: 'Precious metal frames, temple hinges & rimless mountings.', link: '/service/eyewear' },
  { num: '11', title: 'Necklaces', desc: 'Statement collars, chain links & gemstone strands.', link: '/service/necklaces' },
  { num: '12', title: 'Product Design', desc: 'Luxury accessories, cufflinks & bespoke objets d\u2019art.', link: '/service/product-design' },
]

// Pages where the header must render in light/inverted mode
const darkPages = ['/contact']

const Header = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const isLight = darkPages.includes(pathname)
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
    setMegaOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const openMega = useCallback(() => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current)
    setMegaOpen(true)
  }, [])

  const closeMega = useCallback(() => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 220)
  }, [])

  // Close megamenu on scroll
  useEffect(() => {
    const handleScroll = () => setMegaOpen(false)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const classes = [
    'site-header',
    open ? 'is-open' : '',
    isLight ? 'site-header--light' : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <header className={classes}>
        {/* Desktop pill nav */}
        <nav className="pill-nav pill-nav--desktop">
          {navItems.map((item) => {
            if (item.label === 'Services') {
              return (
                <span
                  key="services"
                  className={`pill-nav__services${megaOpen ? ' is-active' : ''}`}
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                >
                  Services
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ marginLeft: 5, transition: 'transform .25s', transform: megaOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )
            }
            return item.path === pathname ? (
              <span key={item.path} className="is-active">
                {item.label}
              </span>
            ) : (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </button>

        {/* Mobile overlay menu */}
        <div className="mobile-menu">
          <nav className="mobile-menu__nav">
            {navItems.map((item) =>
              item.path === pathname ? (
                <span key={item.path} className="is-active">
                  {item.label}
                </span>
              ) : item.label === 'Services' ? (
                <Link key="services-mobile" to="/" state={{ scrollTo: 'services' }}>
                  Services
                </Link>
              ) : (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="mobile-menu__footer">
            <span>hello@aura.cad</span>
          </div>
        </div>
      </header>

      {/* ── MEGAMENU (outside header to avoid pointer-events:none) ── */}
      <div
        className={`mega${megaOpen ? ' mega--open' : ''}`}
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
      >
        <div className="mega__inner">
          <div className="mega__head">
            <div className="mega__title">
              <em></em>
              <span>Our services</span>
            </div>
            <Link to="/contact" className="mega__cta" onClick={() => setMegaOpen(false)}>
              Start a project <span>&#8594;</span>
            </Link>
          </div>
          <div className="mega__grid">
            {megaServices.map((s) => (
              <Link key={s.num} to={s.link} className="mega__card" onClick={() => setMegaOpen(false)}>
                <span className="mega__num">{s.num}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`mega__backdrop${megaOpen ? ' mega__backdrop--visible' : ''}`}
        onClick={() => setMegaOpen(false)}
      />
    </>
  )
}

export default Header
