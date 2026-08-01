import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import App from './App'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import CataloguePage from './pages/CataloguePage'
import CustomCad from './pages/CustomCad'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/custom-cad" element={<CustomCad />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

