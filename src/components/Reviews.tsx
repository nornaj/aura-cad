import { useState, useCallback, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const reviews = [
  {
    initials: 'MK',
    name: 'Marta Keller',
    company: 'Keller Atelier',
    quote: '\u201CThe files print first try. We stopped budgeting for failed casts entirely.\u201D',
  },
  {
    initials: 'DO',
    name: 'Daniel Okafor',
    company: 'Nova Fine Jewellery, Lagos',
    quote: '\u201CA bespoke bridal set in four days, stone chart included. Our supplier quoted the same afternoon.\u201D',
  },
  {
    initials: 'SR',
    name: 'Sofia Ruiz',
    company: 'Casa Ruiz, Madrid',
    quote: '\u201CParametric sizing alone saved my modeller two days every collection.\u201D',
  },
  {
    initials: 'JW',
    name: 'James Whitmore',
    company: 'Whitmore & Sons, London',
    quote: '\u201CWe switched from our in-house modeller to AURA\u2019s library. Turnaround dropped from two weeks to two hours.\u201D',
  },
  {
    initials: 'LC',
    name: 'Lena Chen',
    company: 'Atelier Lena, Singapore',
    quote: '\u201CThe stone charts alone are worth it \u2014 our suppliers quote without a single follow-up question.\u201D',
  },
  {
    initials: 'AB',
    name: 'Andr\u00E9 Beaumont',
    company: 'Maison Beaumont, Paris',
    quote: '\u201CEvery file is production-ready out of the box. Our caster hasn\u2019t sent a single reject back in six months.\u201D',
  },
]

const Reviews = () => {
  const revealRef = useScrollReveal()
  const [active, setActive] = useState(0)
  const [perPage, setPerPage] = useState(1)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const calcPerPage = useCallback(() => {
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setPerPage(calcPerPage())
      setActive(0)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [calcPerPage])

  const totalPages = Math.ceil(reviews.length / perPage)

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % totalPages)
    }, 5000)
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [totalPages])

  const goTo = (idx: number) => {
    setActive(idx)
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % totalPages)
    }, 5000)
  }

  const startX = useRef(0)
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && active < totalPages - 1) goTo(active + 1)
      else if (diff < 0 && active > 0) goTo(active - 1)
    }
  }

  const slideWidth = 100 / reviews.length
  const shiftPercent = active * perPage * slideWidth

  return (
    <section className="reviews" ref={revealRef}>
<div className="reviews__head">
        <h2 data-reveal="up">Trusted by<br />300+ jewellers</h2>
        <div className="reviews__rating" data-reveal="up" data-reveal-delay="1">4.9 / 5 &#183; 412 verified orders</div>
      </div>

      <div
        className="reviews__slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="reviews__track"
          style={{
            width: `${(reviews.length / perPage) * 100}%`,
            transform: `translateX(-${shiftPercent}%)`,
          }}
        >
          {reviews.map((r, i) => (
            <div
              className="review-slide"
              key={i}
              style={{ width: `${slideWidth}%` }}
            >
              <figure className="review">
                <div className="review__stars">&#9670; &#9670; &#9670; &#9670; &#9670;</div>
                <blockquote>{r.quote}</blockquote>
                <figcaption>
                  <span className="review__avatar">{r.initials}</span>
                  <span>{r.name}<br /><em>{r.company}</em></span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews__pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`reviews__dot${i === active ? ' reviews__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Reviews
