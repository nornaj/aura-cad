import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pieceTypes = ['Ring', 'Earrings', 'Pendant', 'Bracelet', 'Other']

const CustomRequest = () => {
  const [activePiece, setActivePiece] = useState('Ring')
  const ref = useScrollReveal()

  return (
    <section className="request" ref={ref}>
<div className="request__grid">
        <div className="request__copy">
          <div className="eyebrow" data-reveal="up"><em></em><span>08 &#8212; Custom request</span></div>
          <h2 data-reveal="up" data-reveal-delay="1">Tell us what<br />to model</h2>
          <p className="request__lead" data-reveal="up" data-reveal-delay="2">
            Send a sketch, a photo, or three words and a stone size. You get a quote
            and a timeline the same working day &#8212; and the file within a week.
          </p>
          <div className="steps" data-reveal="up" data-reveal-delay="3">
            <div><b>01</b><span>Brief &#8212; sketch, reference or CAD</span></div>
            <div><b>02</b><span>Quote &amp; timeline within 24 h</span></div>
            <div><b>03</b><span>Revisions until geometry is right</span></div>
          </div>
        </div>

        <form className="brief" onSubmit={e => e.preventDefault()} data-reveal="right" data-reveal-delay="2">
          <div className="brief__row">
            <label>Name<input type="text" placeholder="Marta Keller" /></label>
            <label>Email<input type="email" placeholder="studio@atelier.com" /></label>
          </div>

          <div className="brief__group">
            <span>Piece type</span>
            <div className="chips">
              {pieceTypes.map(p => (
                <span
                  key={p}
                  className={p === activePiece ? 'is-active' : ''}
                  onClick={() => setActivePiece(p)}
                  style={{ cursor: 'pointer' }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <label>Brief<textarea rows={4} placeholder="Oval halo, 1.5 ct centre, US 6, yellow gold, cathedral shank."></textarea></label>

          <div className="brief__foot">
            <span className="attach">Attach sketch &#183; JPG, PDF, 3DM</span>
            <button type="submit" className="send">Send the brief <span>&#8594;</span></button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CustomRequest
