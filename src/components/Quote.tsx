import { useScrollReveal } from '../hooks/useScrollReveal'

const Quote = () => {
  const ref = useScrollReveal()

  return (
    <section className="quote" ref={ref}>
      <div className="quote__inner" data-reveal="up">
        <svg
          className="quote__mark"
          width="44"
          height="34"
          viewBox="0 0 44 34"
          fill="none"
        >
          <path
            d="M0 34V20.4C0 8.5 7.6 1.2 18 0v6.8C11 8.4 7.6 12.6 7.6 18.6H18V34H0ZM26 34V20.4C26 8.5 33.6 1.2 44 0v6.8C37 8.4 33.6 12.6 33.6 18.6H44V34H26Z"
            fill="#2a2620"
          />
        </svg>

        <p className="quote__text">
          We switched to Aura files eighteen months ago and haven't had a single
          casting failure. The parametric sizing alone saved our production
          manager two days every collection cycle.
        </p>

        <div className="quote__author">
          <div className="quote__avatar">MK</div>
          <div className="quote__info">
            <div className="quote__name">Marina Keller</div>
            <div className="quote__role">
              Production Director · Keller Atelier
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote
