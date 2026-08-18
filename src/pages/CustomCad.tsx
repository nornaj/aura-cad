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
            <h1>
              Partnership
              <br />
              built on precision
              <br />
              geometry
            </h1>
            <p className="cc-hero__lead">
              We act as your extended bench — providing dedicated CAD capacity,
              white-label collections, and priority turnaround for jewellery houses,
              design studios, and master jewellers worldwide.
            </p>
            <div className="cc-hero__ctas">
              <Link to="/contact" className="cc-btn-solid">
                Start a partnership <span>&#8594;</span>
              </Link>
              <a href="#process" className="cc-btn-outline">
                See the process
              </a>
            </div>
            <div className="cc-hero__stats">
              <div>
                <b>24 h</b>
                <span>quote &amp; agreement</span>
              </div>
              <div>
                <b>3&#8211;5 days</b>
                <span>priority delivery</span>
              </div>
              <div>
                <b>Dedicated</b>
                <span>lead CAD author</span>
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
              <img src="" alt="Partner studio 3D render" />
              <span className="cc-hero__tag">
                Partner Studio Collection &#183; 2026
              </span>
            </div>
            <div className="cc-thumbs">
              <div className="cc-thumb">
                <div className="cc-thumb__frame">
                  <img src="" alt="Sketch" />
                </div>
                <span>01 &#183; Brief</span>
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
            Bridal collections &#183; Bespoke lines &#183; White-label CAD &#183; Hardware &#183; Rapid prototyping
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <em></em> Mutual NDA standard
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
              <span>01 &#8212; Partnership Model</span>
            </div>
            <h2 className="cc-h-dark">
              Four steps to
              <br />
              seamless collaboration
            </h2>
          </div>
          <p className="cc-process__intro">
            Collaboration built on complete transparency — every stage ends with clear deliverables you can review and sign off.
          </p>
        </div>

        <div className="cc-steps">
          <div className="cc-step" data-reveal="scale" data-reveal-delay="1">
            <div className="cc-step__top">
              <span>Step 01</span>
              <em></em>
            </div>
            <div className="cc-step__media">
              <img src="" alt="brief / scope" />
            </div>
            <div className="cc-step__body">
              <h3>Define the scope</h3>
              <p>
                Share your collection brief, reference sketches, or recurring volume requirements. We assign your dedicated lead modeller.
              </p>
              <span className="cc-step__gets">You get: written scope &amp; team allocation</span>
            </div>
          </div>

          <div className="cc-step" data-reveal="scale" data-reveal-delay="2">
            <div className="cc-step__top">
              <span>Step 02</span>
              <em></em>
            </div>
            <div className="cc-step__media">
              <img src="" alt="quote / terms" />
            </div>
            <div className="cc-step__body">
              <h3>Fixed terms in 24h</h3>
              <p>
                Transparent pricing, priority delivery dates, and white-label rights agreed upfront. Work starts immediately upon approval.
              </p>
              <span className="cc-step__gets">
                You get: fixed agreement &amp; schedule
              </span>
            </div>
          </div>

          <div className="cc-step" data-reveal="scale" data-reveal-delay="3">
            <div className="cc-step__top">
              <span>Step 03</span>
              <em></em>
            </div>
            <div className="cc-step__media">
              <img src="" alt="CAD viewport / review" />
            </div>
            <div className="cc-step__body">
              <h3>Model &amp; review</h3>
              <p>
                We author the geometry and send 360° turntable renders. Revisions continue until proportions and fit match your brand standards.
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
              <h3>Production delivery</h3>
              <p>
                Resin-tested at 0.02 mm, delivered as watertight solids with stone charts and full white-label commercial licence.
              </p>
              <span className="cc-step__gets">
                You get: .STL &#183; .3DM &#183; .OBJ
              </span>
            </div>
          </div>
        </div>

        <div className="cc-process__cta" data-reveal="up">
          <p>Ready to expand your CAD capacity? Setting up a partnership takes under five minutes.</p>
          <Link to="/contact" className="cc-btn-cream">
            Start a partnership <span>&#8594;</span>
          </Link>
        </div>
      </section>

      {/* ============ WHAT WE CAN MODEL ============ */}
      <section className="cc-disciplines">
        <div className="cc-sec-head" data-reveal="up">
          <div className="cc-sec-head__copy" style={{ maxWidth: '700px' }}>
            <div className="eyebrow">
              <em></em>
              <span>02 &#8212; Partnership Scope</span>
            </div>
            <h2 className="cc-h-light">
              Full-spectrum CAD
              <br />
              capabilities
            </h2>
          </div>
          <p className="cc-disciplines__intro">
            Six core disciplines we author daily for partner brands. Custom requests outside these — our studio handles seamlessly.
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
              <span className="cc-disc--dark__label">Bespoke Requests</span>
              <div className="cc-disc--dark__title">
                Custom Partner Projects
              </div>
              <p>
                Cufflinks, brooches, watch parts, objets &#8212; if it is small
                metal and has to cast, send it to our team.
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
                Inquire now <span>&#8594;</span>
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
              <span>03 &#8212; Partnership Deliverables</span>
            </div>
            <h2 className="cc-h-dark">
              Complete assets,
              <br />
              full exclusivity
            </h2>
          </div>
          <p className="cc-intro-dark">
            Every partner project ships with production-ready assets and full white-label licensing.
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
                <span>02</span>
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
                <h3>White-label exclusivity</h3>
              </div>
              <div className="cc-deliv__body">
                <p>
                  Cast and sell under your own brand without limits. Full commercial rights transfer on partner projects in writing.
                </p>
                <span className="cc-deliv__pill">100% White-label</span>
              </div>
            </div>
          </div>

          <div className="cc-receive__rail" data-reveal="up" data-reveal-delay="2">
            <div className="cc-receive__media">
              <img src="" alt="Delivered file set" />
            </div>
            <div className="cc-extras">
              <span className="cc-extras__label">Partner Extras</span>
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
              <span>04 &#8212; Partnership Outcomes</span>
            </div>
            <h2 className="cc-h-light">
              From partner vision
              <br />
              to production cast
            </h2>
          </div>
          <p className="cc-intro-light">
            Three partner collaborations, showing how we transform brand concepts into castable reality.
          </p>
        </div>

        <div className="cc-cases">
          <div className="cc-case" data-reveal="up" data-reveal-delay="1">
            <div className="cc-case__shot">
              <img src="" alt="sketch" />
              <span className="cc-chip">Before &#183; concept</span>
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
                  Project 01 &#183; Bridal
                </span>
                <h3>Oval halo, cathedral shank</h3>
                <p>
                  Arrived as a concept sketch with target gem dimensions. Rebuilt around
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
                  Project 02 &#183; Signet
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
                  Project 03 &#183; Hardware
                </span>
                <h3>Hinged cuff, hidden clasp</h3>
                <p>
                  Partner specification and wrist measurements. Modelled with real
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
              <span>05 &#8212; Partnership FAQ</span>
            </div>
            <h2 className="cc-h-light">
              Everything about
              <br />
              partnering with AURA
            </h2>
          </div>
          <p className="cc-intro-light">
            The questions that come up in almost every partnership setup. Anything
            else &#8212; reach out to our team.
          </p>
        </div>

        <div className="cc-faq__grid">
          <div className="cc-faq__col">
            <div className="cc-qa" data-reveal="up" data-reveal-delay="1">
              <div className="cc-qa__q">
                <span>01</span>
                <h3>Who owns the finished files?</h3>
              </div>
              <p>
                Your brand owns 100% commercial rights &#8212; cast, scale, and sell without limits or per-unit fees.
              </p>
            </div>

            <div className="cc-qa" data-reveal="up" data-reveal-delay="2">
              <div className="cc-qa__q">
                <span>02</span>
                <h3>Can we get full exclusivity?</h3>
              </div>
              <p>
                Yes. All partner projects transfer full white-label exclusivity on delivery, in writing, and designs never enter public libraries.
              </p>
            </div>

            <div className="cc-qa" data-reveal="up" data-reveal-delay="3">
              <div className="cc-qa__q">
                <span>03</span>
                <h3>How many revisions do we get?</h3>
              </div>
              <p>
                As many as the piece needs to fit perfectly. Revisions within the agreed scope are included to guarantee bench precision.
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
                Always, on request &#8212; before you share any confidential designs. Send yours or use ours.
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
                If any failure traces to our geometry, we re-author and re-test the file at zero cost. Every file is resin-printed at 0.02 mm before delivery.
              </p>
            </div>

            <div className="cc-qa" data-reveal="up" data-reveal-delay="2">
              <div className="cc-qa__q">
                <span>06</span>
                <h3>Do you integrate with our software?</h3>
              </div>
              <p>
                We author in Rhino and Matrix and deliver .3DM, .STL and .OBJ, so files open cleanly on any bench and stay editable for your team.
              </p>
            </div>

            <div className="cc-qa" data-reveal="up" data-reveal-delay="3">
              <div className="cc-qa__q">
                <span>07</span>
                <h3>Can you print or cast for us?</h3>
              </div>
              <p>
                We print high-detail resin models and ship them to your bench. Casting is handled by your preferred caster, with sprues pre-configured.
              </p>
            </div>

            <div
              className="cc-qa cc-qa--last"
              data-reveal="up"
              data-reveal-delay="4"
            >
              <div className="cc-qa__q">
                <span>08</span>
                <h3>How do partnership terms work?</h3>
              </div>
              <p>
                Per-project billing or monthly retainer agreements. Invoiced transparently via bank transfer or card from Vienna.
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
              <span>Start a partnership</span>
            </div>
            <h2>
              Partner with
              <br />
              our studio
            </h2>
            <p className="cc-cta__lead">
              Tell us about your brand, upcoming collection, or CAD volume. A senior designer will review and respond within 24 hours.
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
                <span>Mutual NDA standard</span>
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
                Name / Brand
                <input type="text" placeholder="Marta Keller Studio" />
              </label>
              <label>
                Email
                <input type="email" placeholder="studio@atelier.com" />
              </label>
            </div>
            <div className="cc-brief__pair">
              <label>
                Estimated Volume
                <input type="text" placeholder="5-10 models / month" />
              </label>
              <label>
                Timeline
                <input type="text" placeholder="Immediate" />
              </label>
            </div>

            <div className="cc-brief__group">
              <span>Partnership type</span>
              <div className="cc-chips">
                <span className="is-active">Bespoke Line</span>
                <span>Collection CAD</span>
                <span>White-Label</span>
                <span>Retainer</span>
              </div>
            </div>

            <label>
              Partnership Inquiry
              <textarea
                rows={5}
                placeholder="Share your studio requirements, collection concepts, or technical CAD needs..."
              ></textarea>
            </label>

            <div className="cc-brief__foot">
              <span className="cc-attach">
                Attach specs &#183; JPG, PDF, 3DM
              </span>
              <button type="submit" className="cc-send">
                Submit inquiry <span>&#8594;</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CustomCad
