import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const filters = ['All', 'CAD craft', 'Casting', 'Stones', 'Studio']

const posts = [
  {
    title: 'Parametric shanks: one file, twelve sizes',
    desc: 'How we drive a full size range from a handful of parameters instead of twelve separate models.',
    category: 'CAD craft',
    readTime: '7 min',
    date: '02 July 2026',
  },
  {
    title: 'Cutting a seat that fits the girdle, not the render',
    desc: 'Table, girdle and culet measurements per cut — and why a generic cone costs you a setter\u2019s afternoon.',
    category: 'Stones',
    readTime: '5 min',
    date: '21 June 2026',
  },
  {
    title: 'What a good brief looks like',
    desc: 'Three words and a stone size beat a mood board. The four details we always ask for first.',
    category: 'Studio',
    readTime: '4 min',
    date: '09 June 2026',
  },
  {
    title: 'Hollowing without losing the weight',
    desc: 'Where to remove metal in a signet so it still feels solid in the hand — and where never to.',
    category: 'Casting',
    readTime: '9 min',
    date: '28 May 2026',
  },
  {
    title: 'Naked edges: the five-minute audit',
    desc: 'A short routine that catches every open surface before a file ever reaches a slicer.',
    category: 'CAD craft',
    readTime: '6 min',
    date: '17 May 2026',
  },
]

const Blog = () => {
  const ref = useScrollReveal()
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? posts
      : posts.filter((p) => p.category === active)

  return (
    <section className="blog" ref={ref}>
      <div className="blog__head" data-reveal="up">
        <div className="blog__headline">
          <h1>
            Notes from
            <br />
            the modelling
            <br />
            room
          </h1>
        </div>
        <p className="blog__intro">
          Working notes on CAD, casting tolerances and the small decisions that
          decide whether a file survives the bench.
        </p>
      </div>

      <div className="blog__filters" data-reveal="up" data-reveal-delay="1">
        {filters.map((f) => (
          <span
            key={f}
            className={active === f ? 'is-active' : ''}
            onClick={() => setActive(f)}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Featured article */}
      <a href="#" className="blog-feature" data-reveal="up" data-reveal-delay="2">
        <div className="blog-feature__media">
          <div className="blog-feature__orbit"></div>
        </div>
        <div className="blog-feature__body">
          <div className="blog-feature__meta">
            <span className="blog-badge">Featured</span>
            <span>Casting</span>
            <span>&#183;</span>
            <span>12 min read</span>
          </div>
          <div className="blog-feature__copy">
            <h2>Why 0.02 mm is the only tolerance that matters</h2>
            <p>
              Wall thickness, sprue placement and shrinkage all conspire against
              a file that looked perfect on screen. Here is the checklist we run
              before anything is published.
            </p>
          </div>
          <div className="blog-feature__foot">
            <span>Elias Brandt &#183; 14 July 2026</span>
            <b>Read the piece &#8594;</b>
          </div>
        </div>
      </a>

      {/* Post grid */}
      <div className="blog-grid">
        {filtered.map((post) => (
          <a href="#" className="blog-post" key={post.title}>
            <div className="blog-post__media"></div>
            <div className="blog-post__body">
              <div className="blog-post__meta">
                <span>{post.category}</span>
                <span>&#183;</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <span className="blog-post__date">{post.date}</span>
            </div>
          </a>
        ))}

        {/* Newsletter card */}
        <div className="blog-letter">
          <div className="blog-letter__top">
            <span className="blog-letter__label">The studio letter</span>
            <div className="blog-letter__title">
              One note a month, from the bench
            </div>
            <p>
              New models, tolerance notes and the occasional failed cast. No
              campaigns.
            </p>
          </div>
          <div className="blog-letter__form">
            <input type="email" placeholder="studio@atelier.com" />
            <button type="button">
              Subscribe <span>&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
