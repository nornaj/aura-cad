import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const membersData = [
  {
    name: 'Elias Brandt',
    role: 'Founder & lead modeller',
    bio: 'Bench jeweller for nine years before CAD. Signs off every bridal file.',
    pills: ['Bridal', 'Pavé'],
    img: '/gold-ring.webp',
  },
  {
    name: 'Nino Kvaratskhelia',
    role: 'Head of Studio Operations',
    bio: 'Runs the bespoke queue and keeps the 24-hour quote promise honest.',
    pills: ['Bespoke', 'Scheduling'],
    img: '/gold-ring.webp',
  },
  {
    name: 'Marek Lis',
    role: 'Senior modeller',
    bio: 'Hardware specialist — hinges and clasps that still move after casting.',
    pills: ['Mechanisms', 'Tolerance'],
    img: '/gold-ring.webp',
  },
  {
    name: 'Aïda Rahimi',
    role: 'Stone & setting lead',
    bio: 'Cuts every seat to the girdle and writes the stone charts your supplier quotes from.',
    pills: ['Stone charts', 'Micro-pavé'],
    img: '/gold-ring.webp',
  },
]

const Team = ({ showEyebrow = true }: { showEyebrow?: boolean }) => {
  const ref = useScrollReveal()

  return (
    <section className="team" ref={ref}>
      <div className="team__head">
        <div className="team__headline">
          {showEyebrow && (
            <div className="eyebrow" data-reveal="up">
              <em></em>
              <span>04 &#8212; The team</span>
            </div>
          )}
          <h2 data-reveal="up" data-reveal-delay="1">
            Thirty pairs<br />of hands
          </h2>
        </div>
        <p className="team__intro" data-reveal="up" data-reveal-delay="2">
          Designers, setters and print technicians across our design studios. Four of them lead the work you commission.
        </p>
      </div>

      <div className="members">
        {membersData.map((m, i) => (
          <div
            className="member"
            key={m.name}
            data-reveal="scale"
            data-reveal-delay={String((i % 4) + 1)}
          >
            <div className="member__media">
              <img src={m.img} alt={m.name} />
            </div>
            <div className="member__body">
              <div className="member__id">
                <h3>{m.name}</h3>
                <span className="member__role">{m.role}</span>
              </div>
              <p>{m.bio}</p>
              <div className="pills">
                {m.pills.map((pill) => (
                  <span key={pill}>{pill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="team__band" data-reveal="up" data-reveal-delay="3">
        <p>Twenty-six more designers, setters and print technicians across our studios worldwide.</p>
        <Link to="/contact" className="btn-cream">
          Work with us <span>&#8594;</span>
        </Link>
      </div>
    </section>
  )
}

export default Team
