import { useScrollReveal } from '../hooks/useScrollReveal'

const reasonsData = [
  {
    num: '01',
    title: 'Files that pass QC first pass',
    description:
      'Watertight solids, correct wall thickness, no stray naked edges — nothing bounces back from your caster.',
    pill: '98% first-cast rate',
  },
  {
    num: '02',
    title: 'One file, every size',
    description:
      'Parametric shanks and stone seats mean a full size range without re-modelling or re-quoting.',
    pill: 'US 4–12 in one file',
  },
  {
    num: '03',
    title: 'Specs your suppliers can quote',
    description:
      'Stone charts with cut, size and count per piece, exported as CSV and PDF alongside the geometry.',
    pill: 'CSV + PDF included',
  },
  {
    num: '04',
    title: 'Dates you can put on a schedule',
    description:
      'Bespoke work quoted within 24 hours and delivered in 3–5 days, with a queue we cap on purpose.',
    pill: '3–5 day turnaround',
  },
  {
    num: '05',
    title: 'Formats for every bench',
    description:
      '.STL, .3DM and .OBJ in one delivery, print-oriented and sprued on request.',
    pill: '3 formats, one delivery',
  },
  {
    num: '06',
    title: 'Rights settled up front',
    description:
      'Full IP transfer on every project, exclusive rights on white-label work — no ambiguity in your paperwork.',
    pill: 'Full IP transfer',
  },
]

const Reasons = () => {
  const ref = useScrollReveal()

  return (
    <section className="reasons" ref={ref}>
      <div className="reasons__head">
        <div className="reasons__headline" data-reveal="up">
          <div className="eyebrow">
            <em></em>
            <span>Why production managers choose us</span>
          </div>
          <h2>
            Fewer surprises
            <br />
            on the bench
          </h2>
        </div>
        <p className="reasons__intro" data-reveal="up" data-reveal-delay="2">
          The people who sign off on castings care about six things. This is how
          we handle each of them.
        </p>
      </div>

      <div className="reasons__grid">
        <div className="reasons__list">
          {reasonsData.map((item, index) => (
            <div
              key={item.num}
              className="reason"
              data-reveal="up"
              data-reveal-delay={`${Math.min(index + 1, 4)}`}
            >
              <span className="reason__num">{item.num}</span>
              <h3>{item.title}</h3>
              <div className="reason__body">
                <p>{item.description}</p>
                <span className="reason__pill">{item.pill}</span>
              </div>
            </div>
          ))}
          <div></div>
        </div>

        <div className="rail" data-reveal="up" data-reveal-delay="2">
          <div className="rail__media"></div>
          <div className="rail__card">
            <span className="rail__label">Trusted by</span>
            <div className="rail__num">300+ studios</div>
            <p>
              in 41 countries, from single-bench ateliers to houses casting a
              thousand pieces a month.
            </p>
            <a href="#" className="rail__cta">
              Talk to the studio <span>&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reasons
