import { useEffect, useRef, useCallback } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const timelineData = [
  {
    year: '2020',
    title: 'Two benches, one printer',
    description:
      'Founded in Vienna by three bench jewellers who were tired of buying meshes that would not cast. First 40 models authored by hand.',
    tags: ['40 models', '1 printer'],
    flip: false,
    isNow: false,
  },
  {
    year: '2021',
    title: 'The library goes public',
    description:
      'Opened the catalogue to independent makers. Parametric sizing shipped, so one file covered a full size range.',
    tags: ['200 models', 'Parametric sizing'],
    flip: true,
    isNow: false,
  },
  {
    year: '2022',
    title: 'Tbilisi studio opens',
    description:
      'A second studio and eleven new designers. Bespoke modelling became a standing service with a 24-hour quote promise.',
    tags: ['11 designers', 'Bespoke service'],
    flip: false,
    isNow: false,
  },
  {
    year: '2023',
    title: 'Print-tested as standard',
    description:
      'Every release now resin-printed at 0.02 mm before publication. First-cast success rate crossed 95%.',
    tags: ['0.02 mm', '95% first cast'],
    flip: true,
    isNow: false,
  },
  {
    year: '2024',
    title: 'Stone charts & white label',
    description:
      'Full stone specs shipped with each file. First exclusive capsules authored for three brands under their own name.',
    tags: ['Stone charts', '3 capsules'],
    flip: false,
    isNow: false,
  },
  {
    year: '2025',
    title: '1 000 files, 300 studios',
    description:
      'The library passed a thousand models and three hundred studios worldwide worked from Aura geometry.',
    tags: ['1 000 models', '300 studios'],
    flip: true,
    isNow: false,
  },
  {
    year: '2026',
    title: 'Where we are now',
    description:
      '1 240+ files, thirty designers across nine countries, 98% first-cast rate — and a bespoke queue we still cap on purpose.',
    tags: ['1 240+ files', '98% first cast'],
    flip: false,
    isNow: true,
  },
]

const Timeline = () => {
  const revealRef = useScrollReveal()
  const trackRef = useRef<HTMLDivElement | null>(null)
  const fillRef = useRef<HTMLDivElement | null>(null)
  const nodesRef = useRef<(HTMLSpanElement | null)[]>([])

  const handleScroll = useCallback(() => {
    const track = trackRef.current
    const fill = fillRef.current
    if (!track || !fill) return

    const trackRect = track.getBoundingClientRect()
    const viewportMiddle = window.innerHeight * 0.45

    // How far the viewport middle has progressed through the track
    const progress = (viewportMiddle - trackRect.top) / trackRect.height
    const clamped = Math.max(0, Math.min(1, progress))

    // Set the fill height
    fill.style.height = `${clamped * 100}%`

    // Fill diamonds as the line reaches them
    nodesRef.current.forEach((node) => {
      if (!node) return
      const nodeRect = node.getBoundingClientRect()
      const nodeCenter = nodeRect.top + nodeRect.height / 2
      if (nodeCenter <= viewportMiddle) {
        node.classList.add('is-filled')
      } else {
        node.classList.remove('is-filled')
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <section
      className="timeline"
      ref={(el) => {
        // Combine both refs
        revealRef.current = el
      }}
    >
      <div className="timeline__head">
        <div className="timeline__headline" data-reveal="up">
          <div className="eyebrow">
            <em></em>
            <span>Timeline</span>
          </div>
          <h2>
            Seven years
            <br />
            of geometry
          </h2>
        </div>
        <p className="timeline__intro" data-reveal="up" data-reveal-delay="2">
          Since 2020: from two benches and a single resin printer to a library
          three hundred studios cast from.
        </p>
      </div>

      <div className="track" ref={trackRef}>
        <div className="track__spine"></div>
        <div className="track__fill" ref={fillRef}></div>

        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className={`tl-row${item.flip ? ' tl-row--flip' : ''}`}
            data-reveal="up"
            data-reveal-delay={`${Math.min(index + 1, 3)}`}
          >
            <div className="tl-copy">
              <div className="tl-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tl-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="tl-node">
              <span
                ref={(el) => { nodesRef.current[index] = el }}
                className={item.isNow ? 'is-now' : ''}
              ></span>
            </div>
            <div className="tl-media">
              <div className="tl-media__frame"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
