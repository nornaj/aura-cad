import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import PageLoader from './PageLoader'

const Layout = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Scroll position reset to top on navigation
    window.scrollTo(0, 0)

    // Trigger loader on page entry and route change
    setVisible(true)
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
      const fadeTimer = setTimeout(() => {
        setVisible(false)
      }, 200)
      return () => clearTimeout(fadeTimer)
    }, 600) // 0.6s display duration (strictly within 0.5s - 1s requirement)

    return () => clearTimeout(timer)
  }, [location.pathname, location.search])

  return (
    <>
      {visible && <PageLoader active={loading} />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
