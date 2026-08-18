import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { servicesData } from '../data/servicesData'

const SingleServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const ref = useScrollReveal()

  const service = slug ? servicesData[slug] : undefined

  if (!service) {
    return <Navigate to="/portfolio" replace />
  }

  const allSlugs = Object.keys(servicesData)
  const otherServices = allSlugs
    .filter((s) => s !== service.slug)
    .slice(0, 4)
    .map((s) => servicesData[s])

  return (
    <div ref={ref} className="sv-page">
      {/* ============ HERO ============ */}
      <section className="sv-hero">
        <div className="sv-hero__orbit"></div>

        <div className="sv-crumbs" data-reveal="up">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/#services">Services</Link>
          <span>/</span>
          <b>{service.title}</b>
        </div>

        <div className="sv-hero__grid">
          <div className="sv-hero__copy" data-reveal="up">
            <div className="eyebrow">
              <em></em>
              <span>Service {service.num}</span>
            </div>
            <h1>{service.title}</h1>
            <p className="sv-hero__lead">{service.lead}</p>
            <div className="sv-hero__ctas">
              <Link to="/contact" className="sv-btn-dark">
                Start a brief <span>&#8594;</span>
              </Link>
              <span className="sv-hero__price">{service.price}</span>
            </div>
          </div>

          <div
            className="sv-hero__panel"
            data-reveal="up"
            data-reveal-delay="2"
          >
            <div className="sv-hero__panel-orbit"></div>
            <img src={service.img} alt={service.title} />
          </div>
        </div>

        <div className="sv-stats" data-reveal="up" data-reveal-delay="3">
          {service.stats.map((st, i) => (
            <div key={i}>
              <b>{st.value}</b>
              <span>{st.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED + PROCESS ============ */}
      <section className="sv-detail">
        <div className="sv-detail__grid">
          <div className="sv-incl" data-reveal="up">
            <div className="eyebrow">
              <em></em>
              <span>What&#8217;s included</span>
            </div>
            <h2>
              Everything the
              <br />
              bench needs
            </h2>
            <div className="sv-incl__list">
              {service.included.map((inc) => (
                <div className="sv-incl__row" key={inc.num}>
                  <span>{inc.num}</span>
                  <div className="sv-incl__text">
                    <b>{inc.title}</b>
                    <i>{inc.desc}</i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sv-process" data-reveal="up" data-reveal-delay="2">
            <div className="eyebrow">
              <em></em>
              <span>How it works</span>
            </div>
            <div className="sv-steps">
              {service.steps.map((st, i) => (
                <div
                  key={i}
                  className={`sv-step${st.dark ? ' sv-step--light' : ''}`}
                >
                  <span className="sv-step__label">{st.label}</span>
                  <span className="sv-step__title">{st.title}</span>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TERMS & FAQ + CTA ============ */}
      <section className="sv-terms">
        <div className="sv-terms__grid">
          <div className="sv-terms__copy" data-reveal="up">
            <div className="eyebrow">
              <em></em>
              <span>Good to know</span>
            </div>
            <h2>
              Terms in
              <br />
              four lines
            </h2>
            <div className="sv-pills">
              <span>NDA on request</span>
              <span>50 / 50 payment</span>
              <span>Rhino &amp; Matrix</span>
              <span>White-label</span>
            </div>
          </div>

          <div className="sv-qas" data-reveal="up" data-reveal-delay="2">
            {service.faqs.map((faq, i) => (
              <div className="sv-qa" key={i}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sv-cta" data-reveal="up" data-reveal-delay="3">
          <p>Have a piece in mind? A brief takes about five minutes.</p>
          <div className="sv-cta__actions">
            <Link to="/contact" className="sv-btn-cream">
              Start a brief <span>&#8594;</span>
            </Link>
            <a href="mailto:hello@aura.cad" className="sv-cta__mail">
              hello@aura.cad
            </a>
          </div>
        </div>

        <div className="sv-others" data-reveal="up" data-reveal-delay="4">
          <span>Other services</span>
          <div>
            {otherServices.map((os) => (
              <Link key={os.slug} to={`/service/${os.slug}`}>
                {os.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleServicePage
