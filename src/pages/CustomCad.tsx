import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CustomCad = () => {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      {/* ============ HERO ============ */}
      <section className="cc-hero">
        <div className="cc-hero__orbit"></div>

        <div className="cc-hero__grid">
          <div className="cc-hero__copy" data-reveal="up">
            {/* Eyebrow removed from hero per requirement */}
            <h1>
              We model
              <br />
              what doesn&#8217;t
              <br />
              exist yet
            </h1>
            <p className="cc-hero__lead">
              Send a sketch, a photo, or three words and a stone size. Our
              designers author the piece from zero &#8212; measured to the cut,
              print-tested before delivery, revised until the geometry is right.
            </p>
            <div className="cc-hero__ctas">
              <Link to="/contact" className="cc-btn-solid">
                Start a brief <span>&#8594;</span>
              </Link>
              <a href="#process" className="cc-btn-outline">
                See the process
              </a>
            </div>
            <div className="cc-hero__stats">
              <div>
                <b>24 h</b>
                <span>quote &amp; timeline</span>
              </div>
              <div>
                <b>3&#8211;5 days</b>
                <span>to first file</span>
              </div>
              <div>
                <b>Unlimited</b>
                <span>revisions to fit</span>
              </div>
            </div>
          </div>

          <div
            className="cc-hero__visual"
            data-reveal="up"
            data-reveal-delay="2"
          >
            <div className="cc-hero__panel">
              <div className="cc-hero__panel-orbit"></div>
              <img src="" alt="Bespoke 3D model render" />
              <span className="cc-hero__tag">
                Client commission &#183; 2026
              </span>
            </div>
            <div className="cc-thumbs">
              <div className="cc-thumb">
                <div className="cc-thumb__frame">
                  <img src="" alt="Sketch" />
                </div>
                <span>01 &#183; Sketch</span>
              </div>
              <div className="cc-thumb">
                <div className="cc-thumb__frame">
                  <img src="" alt="CAD" />
                </div>
                <span>02 &#183; CAD</span>
              </div>
              <div className="cc-thumb">
                <div className="cc-thumb__frame">
                  <img src="" alt="Cast" />
                </div>
                <span>03 &#183; Cast</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cc-hero__foot">
          <span>
            Rings &#183; Bridal sets &#183; Signets &#183; Earrings &#183;
            Pendants &#183; Hardware
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <em></em> NDA on request
          </span>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="process" className="cc-process">
        <div className="cc-process__ring"></div>

        <div className="cc-sec-head" data-reveal="up">
          <div className="cc-sec-head__copy" style={{ maxWidth: '680px' }}>
            <div className="eyebrow">
              <em></em>
              <span>How it works</span>
            </div>
            <h2 className="cc-h-dark">
              Four steps,
              <br />
              no guesswork
            </h2>
          </div>
          <p className="cc-process__intro">
            You are never waiting on a black box &#8212; every stage ends with
            something you can look at and sign off.
          </p>
        </div>

        <div className="cc-steps">
          <div className="cc-step" data-reveal="scale" data-reveal-delay="1">
            <div className="cc-step__top">
              <span>Step 01</span>
              <em></em>
            </div>
            <div className="cc-step__media">
              <img src="" alt="brief / sketch photo" />
            </div>
            <div className="cc-step__body">
              <h3>Send the brief</h3>
              <p>
                A sketch, a photo or a sentence. Add stone size, metal and
                finger size if you know them &#8212; we ask if you don&#8217;t.
              </p>
              <span className="cc-step__gets">You get: written scope</span>
            </div>
          </div>

          <div className="cc-step" data-reveal="scale" data-reveal-delay="2">
            <div className="cc-step__top">
              <span>Step 02</span>
              <em></em>
            </div>
            <div className="cc-step__media">
              <img src="" alt="quote / spec sheet" />
            </div>
            <div className="cc-step__body">
              <h3>Quote in 24 hours</h3>
              <p>
                A fixed price, a delivery date and the list of files you will
                receive. Nothing starts before you approve it.
              </p>
              <span className="cc-step__gets">
                You get: fixed price &amp; date
              </span>
            </div>
          </div>

          <div className="cc-step" data-reveal="scale" data-reveal-delay="3">
            <div className="cc-step__top">
              <span>Step 03</span>
              <em></em>
            </div>
            <div className="cc-step__media">
              <img src="" alt="CAD viewport / review render" />
            </div>
            <div className="cc-step__body">
              <h3>Model &amp; review</h3>
              <p>
                We author the geometry and send turntable renders. Revisions
                continue until proportions and fit are right.
              </p>
              <span className="cc-step__gets">
                You get: 360&#176; review renders
              </span>
            </div>
          </div>

          <div
            className="cc-step cc-step--light"
            data-reveal="scale"
            data-reveal-delay="4"
          >
            <div className="cc-step__top">
              <span>Step 04</span>
              <em></em>
            </div>
            <div className="cc-step__media">
              <img src="" alt="printed / cast piece" />
            </div>
            <div className="cc-step__body">
              <h3>Print-tested delivery</h3>
              <p>
                Resin-printed at 0.02 mm, then delivered as watertight solids
                with a stone chart and full commercial licence.
              </p>
              <span className="cc-step__gets">
                You get: .STL &#183; .3DM &#183; .OBJ
              </span>
            </div>
          </div>
        </div>

        <div className="cc-process__cta" data-reveal="up">
          <p>Have a piece in mind? Step one takes about five minutes.</p>
          <Link to="/contact" className="cc-btn-cream">
            Start a brief <span>&#8594;</span>
          </Link>
        </div>
      </section>

      {/* ============ WHAT WE CAN MODEL ============ */}
      <section className="cc-disciplines">
        <div className="cc-sec-head" data-reveal="up">
          <div className="cc-sec-head__copy" style={{ maxWidth: '700px' }}>
            <div className="eyebrow">
              <em></em>
              <span>What we can model</span>
            </div>
            <h2 className="cc-h-light">
              If it can be
              <br />
              cast, we build it
            </h2>
          </div>
          <p className="cc-disciplines__intro">
            Six disciplines we work in daily. Anything outside them &#8212; ask;
            the answer is usually yes.
          </p>
        </div>

        <div className="cc-discs">
          <div className="cc-disc" data-reveal="scale" data-reveal-delay="1">
            <div className="cc-disc__media">
              <img src="" alt="engagement ring render" />
            </div>
            <div className="cc-disc__body">
              <h3>Engagement &amp; bridal</h3>
              <p>
                Solitaires, halos, trilogies and their matching bands &#8212;
                one shank profile shared across a set.
              </p>
              <div className="cc-pills">
                <span>Any cut</span>
                <span>US 4&#8211;12</span>
              </div>
            </div>
          </div>

          <div className="cc-disc" data-reveal="scale" data-reveal-delay="2">
            <div className="cc-disc__media">
              <img src="" alt="pavé detail" />
            </div>
            <div className="cc-disc__body">
              <h3>Pav&#233; &amp; stone setting</h3>
              <p>
                Micro-pav&#233;, channel and bezel work with seats cut to the
                girdle &#8212; not a generic cone.
              </p>
              <div className="cc-pills">
                <span>Stone chart</span>
                <span>0.9 mm+</span>
              </div>
            </div>
          </div>

          <div className="cc-disc" data-reveal="scale" data-reveal-delay="3">
            <div className="cc-disc__media">
              <img src="" alt="signet render" />
            </div>
            <div className="cc-disc__body">
              <h3>Signets &amp; engraving</h3>
              <p>
                Monograms, crests and hallmarks cut into the geometry deep
                enough to survive polishing.
              </p>
              <div className="cc-pills">
                <span>Relief or intaglio</span>
              </div>
            </div>
          </div>

          <div className="cc-disc" data-reveal="scale" data-reveal-delay="4">
            <div className="cc-disc__media">
              <img src="" alt="earrings render" />
            </div>
            <div className="cc-disc__body">
              <h3>Earrings &amp; pendants</h3>
              <p>
                Hoops, studs and drops built hollow where weight matters, with
                bails and posts included.
              </p>
              <div className="cc-pills">
                <span>Pair files</span>
                <span>Hollow build</span>
              </div>
            </div>
          </div>

          <div className="cc-disc" data-reveal="scale" data-reveal-delay="5">
            <div className="cc-disc__media">
              <img src="" alt="clasp detail" />
            </div>
            <div className="cc-disc__body">
              <h3>Hardware &amp; mechanisms</h3>
              <p>
                Clasps, hinges and links modelled with real clearances so they
                move after casting, not just on screen.
              </p>
              <div className="cc-pills">
                <span>Tolerance tested</span>
              </div>
            </div>
          </div>

          <div
            className="cc-disc--dark"
            data-reveal="scale"
            data-reveal-delay="6"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <span className="cc-disc--dark__label">Also possible</span>
              <div className="cc-disc--dark__title">
                Something not on this list
              </div>
              <p>
                Cufflinks, brooches, watch parts, objets &#8212; if it is small
                metal and has to cast, send it over.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div className="cc-pills">
                <span>Cufflinks</span>
                <span>Brooches</span>
                <span>Objets</span>
              </div>
              <Link to="/contact" className="cc-btn-cream cc-btn-cream--sm">
                Ask us <span>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT YOU RECEIVE ============ */}
      <section className="cc-receive">
        <div className="cc-sec-head" data-reveal="up">
          <div className="cc-sec-head__copy">
            <div className="eyebrow">
              <em></em>
              <span>What you receive</span>
            </div>
            <h2 className="cc-h-dark">
              A folder, not
              <br />
              a promise
            </h2>
          </div>
          <p className="cc-intro-dark">
            Every commission ships with the same set of files, whatever the
            piece. Nothing is an upsell.
          </p>
        </div>

        <div className="cc-receive__grid">
          <div className="cc-receive__list">
            <div className="cc-deliv" data-reveal="up" data-reveal-delay="1">
              <div className="cc-deliv__title">
                <span>01</span>
                <h3>Watertight solids</h3>
              </div>
              <div className="cc-deliv__body">
                <p>
                  Closed geometry with no naked edges, correct wall thickness
                  and metal volume reported per size.
                </p>
                <span className="cc-deliv__pill">QC report included</span>
              </div>
            </div>

            <div className="cc-deliv" data-reveal="up" data-reveal-delay="2">
              <div className="cc-deliv__title">
                <span>01</span>
                <h3>Three formats</h3>
              </div>
              <div className="cc-deliv__body">
                <p>
                  .3DM for editing, .STL for printing, .OBJ for rendering
                  &#8212; in one download, oriented and sprued on request.
                </p>
                <span className="cc-deliv__pill">
                  .3DM &#183; .STL &#183; .OBJ
                </span>
              </div>
            </div>

            <div className="cc-deliv" data-reveal="up" data-reveal-delay="3">
              <div className="cc-deliv__title">
                <span>03</span>
                <h3>Stone chart</h3>
              </div>
              <div className="cc-deliv__body">
                <p>
                  Cut, size and count for every stone in the piece, so your
                  supplier quotes without a phone call.
                </p>
                <span className="cc-deliv__pill">CSV + PDF</span>
              </div>
            </div>

            <div className="cc-deliv" data-reveal="up" data-reveal-delay="4">
              <div className="cc-deliv__title">
                <span>04</span>
                <h3>Size range</h3>
              </div>
              <div className="cc-deliv__body">
                <p>
                  Parametric build means US 4&#8211;12 comes out of the same
                  file &#8212; no re-modelling when a client changes their mind.
                </p>
                <span className="cc-deliv__pill">US 4&#8211;12</span>
              </div>
            </div>

            <div
              className="cc-deliv cc-deliv--last"
              data-reveal="up"
              data-reveal-delay="5"
            >
              <div className="cc-deliv__title">
                <span>05</span>
                <h3>Commercial licence</h3>
              </div>
              <div className="cc-deliv__body">
                <p>
                  Cast and sell without limits. Exclusive rights transfer on
                  white-label commissions, in writing.
                </p>
                <span className="cc-deliv__pill">Exclusivity available</span>
              </div>
            </div>
          </div>

          <div className="cc-receive__rail" data-reveal="up" data-reveal-delay="2">
            <div className="cc-receive__media">
              <img src="" alt="Delivered file set" />
            </div>
            <div className="cc-extras">
              <span className="cc-extras__label">Also on request</span>
              <ul>
                <li>
                  <em></em>
                  <span>Photoreal stills &amp; 360&#176; turntables</span>
                </li>
                <li>
                  <em></em>
                  <span>Sprued plate, print-ready</span>
                </li>
                <li>
                  <em></em>
                  <span>Resin print shipped to your bench</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BEFORE / AFTER ============ */}
      <section className="cc-cases-sec">
        <div className="cc-sec-head" data-reveal="up">
          <div className="cc-sec-head__copy">
            <div className="eyebrow">
              <em></em>
              <span>Before &amp; after</span>
            </div>
            <h2 className="cc-h-light">
              Napkin sketch
              <br />
              to finished cast
            </h2>
          </div>
          <p className="cc-intro-light">
            Three recent commissions, shown exactly as they arrived and exactly
            as they left.
          </p>
        </div>

        <div className="cc-cases">
          <div className="cc-case" data-reveal="up" data-reveal-delay="1">
            <div className="cc-case__shot">
              <img src="" alt="sketch" />
              <span className="cc-chip">Before &#183; sketch</span>
            </div>
            <div className="cc-case__shot cc-case__shot--dark">
              <img src="" alt="Finished cast piece" />
              <span className="cc-chip cc-chip--gold">
                After &#183; cast
              </span>
            </div>
            <div className="cc-case__note">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <span className="cc-case__label">
                  Commission 01 &#183; Bridal
                </span>
                <h3>Oval halo, cathedral shank</h3>
                <p>
                  Arrived as a biro sketch with one measurement. Rebuilt around
                  a 1.5 ct oval with 34 pav&#233; seats cut to the girdle.
                </p>
              </div>
              <div className="cc-pills">
                <span>4 days</span>
                <span>2 revisions</span>
                <span>First cast</span>
              </div>
            </div>
          </div>

          <div className="cc-case" data-reveal="up" data-reveal-delay="2">
            <div className="cc-case__shot">
              <img src="" alt="reference photo" />
              <span className="cc-chip">Before &#183; reference</span>
            </div>
            <div className="cc-case__shot cc-case__shot--dark">
              <img src="" alt="Finished cast piece" />
              <span className="cc-chip cc-chip--gold">
                After &#183; cast
              </span>
            </div>
            <div className="cc-case__note">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <span className="cc-case__label">
                  Commission 02 &#183; Signet
                </span>
                <h3>Family crest, intaglio cut</h3>
                <p>
                  A photograph of a worn heirloom. Redrawn as clean relief,
                  deep enough to read after two polishes.
                </p>
              </div>
              <div className="cc-pills">
                <span>6 days</span>
                <span>3 revisions</span>
                <span>13 &#215; 11 mm</span>
              </div>
            </div>
          </div>

          <div className="cc-case" data-reveal="up" data-reveal-delay="3">
            <div className="cc-case__shot">
              <img src="" alt="client brief" />
              <span className="cc-chip">Before &#183; brief</span>
            </div>
            <div className="cc-case__shot cc-case__shot--dark">
              <img src="" alt="Finished cast piece" />
              <span className="cc-chip cc-chip--gold">
                After &#183; cast
              </span>
            </div>
            <div className="cc-case__note">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <span className="cc-case__label">
                  Commission 03 &#183; Hardware
                </span>
                <h3>Hinged cuff, hidden clasp</h3>
                <p>
                  Two sentences and a wrist measurement. Modelled with real
                  clearances so the hinge moved straight out of casting.
                </p>
              </div>
              <div className="cc-pills">
                <span>5 days</span>
                <span>62 mm inner</span>
                <span>Moves as cast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="cc-faq-sec">
        <div className="cc-sec-head" data-reveal="up">
          <div className="cc-sec-head__copy">
            <div className="eyebrow">
              <em></em>
              <span>FAQ</span>
            </div>
            <h2 className="cc-h-light">
              Asked before
              <br />
              you ask
            </h2>
          </div>
          <p className="cc-intro-light">
            The questions that come up in almost every first email. Anything
            else &#8212; just write.
          </p>
        </div>

        <div className="cc-faq__grid">
          <div className="cc-faq__col">
            <div className="cc-qa" data-reveal="up" data-reveal-delay="1">
              <div className="cc-qa__q">
                <span>01</span>
                <h3>Who owns the finished file?</h3>
              </div>
              <p>
                You do, commercially &#8212; cast and sell without limits or
                per-unit fees. We keep the right to show the render in our
                portfolio unless you ask us not to.
              </p>
            </div>

            <div className="cc-qa" data-reveal="up" data-reveal-delay="2">
              <div className="cc-qa__q">
                <span>02</span>
                <h3>Can I get full exclusivity?</h3>
              </div>
              <p>
                Yes. White-label commissions transfer all rights on delivery,
                in writing, and the design never enters the public library.
              </p>
            </div>

            <div className="cc-qa" data-reveal="up" data-reveal-delay="3">
              <div className="cc-qa__q">
                <span>03</span>
                <h3>How many revisions do I get?</h3>
              </div>
              <p>
                As many as the piece needs to fit. Revisions within the agreed
                scope are included; a change of direction becomes a new quote
                &#8212; we say so before starting.
              </p>
            </div>

            <div
              className="cc-qa cc-qa--last"
              data-reveal="up"
              data-reveal-delay="4"
            >
              <div className="cc-qa__q">
                <span>04</span>
                <h3>Will you sign an NDA?</h3>
              </div>
              <p>
                Always, on request &#8212; before you send anything. Send
                yours or use ours.
              </p>
            </div>
          </div>

          <div className="cc-faq__col">
            <div className="cc-qa" data-reveal="up" data-reveal-delay="1">
              <div className="cc-qa__q">
                <span>05</span>
                <h3>What if it fails a cast?</h3>
              </div>
              <p>
                If the failure traces to our geometry, we fix and re-test the
                file at no cost. Every piece is resin-printed at 0.02 mm
                before delivery precisely so this stays rare.
              </p>
            </div>

            <div className="cc-qa" data-reveal="up" data-reveal-delay="2">
              <div className="cc-qa__q">
                <span>06</span>
                <h3>Do you work with my software?</h3>
              </div>
              <p>
                We author in Rhino and Matrix and deliver .3DM, .STL and .OBJ,
                so the file opens on any bench &#8212; and stays editable if
                you model in-house.
              </p>
            </div>

            <div className="cc-qa" data-reveal="up" data-reveal-delay="3">
              <div className="cc-qa__q">
                <span>07</span>
                <h3>Can you print or cast it too?</h3>
              </div>
              <p>
                We print resin models and ship them to your bench. Casting we
                leave to your caster &#8212; but we prepare sprues and
                orientation for them.
              </p>
            </div>

            <div
              className="cc-qa cc-qa--last"
              data-reveal="up"
              data-reveal-delay="4"
            >
              <div className="cc-qa__q">
                <span>08</span>
                <h3>How do payments work?</h3>
              </div>
              <p>
                Half on approval of the quote, half on delivery of the files.
                Bank transfer or card, invoiced from Vienna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BRIEF CTA ============ */}
      <section className="cc-cta">
        <div className="cc-cta__orbit"></div>

        <div className="cc-cta__grid">
          <div className="cc-cta__copy" data-reveal="up">
            <div className="eyebrow">
              <em></em>
              <span>Start a brief</span>
            </div>
            <h2>
              Tell us what
              <br />
              to model
            </h2>
            <p className="cc-cta__lead">
              Five minutes now, a fixed quote and a date back within one
              working day. A designer reads every brief &#8212; not a form
              robot.
            </p>

            <div className="cc-promises">
              <div>
                <b>&#8594;</b>
                <span>Quote &amp; timeline in 24 h</span>
              </div>
              <div>
                <b>&#8594;</b>
                <span>First file in 3&#8211;5 days</span>
              </div>
              <div>
                <b>&#8594;</b>
                <span>NDA before you send anything</span>
              </div>
            </div>

            <a href="mailto:hello@aura.cad" className="cc-cta__mail">
              hello@aura.cad <span>&#8594;</span>
            </a>
          </div>

          <form
            className="cc-brief"
            onSubmit={(e) => e.preventDefault()}
            data-reveal="up"
            data-reveal-delay="2"
          >
            <div className="cc-brief__pair">
              <label>
                Name
                <input type="text" placeholder="Marta Keller" />
              </label>
              <label>
                Email
                <input type="email" placeholder="studio@atelier.com" />
              </label>
            </div>
            <div className="cc-brief__pair">
              <label>
                Stone / size
                <input type="text" placeholder="1.5 ct oval, US 6" />
              </label>
              <label>
                Deadline
                <input type="text" placeholder="Mid-August" />
              </label>
            </div>

            <div className="cc-brief__group">
              <span>Piece type</span>
              <div className="cc-chips">
                <span className="is-active">Ring</span>
                <span>Bridal set</span>
                <span>Signet</span>
                <span>Earrings</span>
                <span>Other</span>
              </div>
            </div>

            <label>
              Brief
              <textarea
                rows={5}
                placeholder="Oval halo, 1.5 ct centre, US 6, yellow gold, cathedral shank."
              ></textarea>
            </label>

            <div className="cc-brief__foot">
              <span className="cc-attach">
                Attach sketch &#183; JPG, PDF, 3DM
              </span>
              <button type="submit" className="cc-send">
                Send the brief <span>&#8594;</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CustomCad
