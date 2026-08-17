import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Custom CAD', path: '/custom-cad' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

// Pages where the header must render in light/inverted mode
const darkPages = ['/contact']

const Header = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const isLight = darkPages.includes(pathname)

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const classes = [
    'site-header',
    open ? 'is-open' : '',
    isLight ? 'site-header--light' : '',
  ].filter(Boolean).join(' ')

  return (
    <header className={classes}>
      {/* Desktop pill nav */}
      <nav className="pill-nav pill-nav--desktop">
        {navItems.map((item) =>
          item.path === pathname ? (
            <span key={item.path} className="is-active">
              {item.label}
            </span>
          ) : (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          )
        )}
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
  )
}

export default Header
