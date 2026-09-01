import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Expectations from './components/Expectations'
import Services from './components/Services'
import Reviews from './components/Reviews'
import WhyUs from './components/WhyUs'
import BehindTheScenes from './components/BehindTheScenes'
import Team from './components/Team'
import Catalogue from './components/Catalogue'
import CustomRequest from './components/CustomRequest'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (
      location.hash === '#services' ||
      (location.state as { scrollTo?: string })?.scrollTo === 'services'
    ) {
      const el = document.getElementById('services')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 150)
      }
    }
  }, [location])

  return (
    <>
      <Hero />
      <Expectations />
      <Services />
      <Reviews />
      <WhyUs />
      <BehindTheScenes />
      <Team showEyebrow={false} />
      <Catalogue />
      <CustomRequest />
    </>
  )
}

export default App
