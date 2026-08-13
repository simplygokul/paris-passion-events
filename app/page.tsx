"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

const experiences = [
  {
    number: "01",
    title: "Corporate & Government",
    statement: "Serious rooms. Clear responsibility.",
    description:
      "Formal programmes, corporate engagements and institutional environments requiring careful coordination, protocol and dependable execution.",
    capabilities: ["Strategy", "Stakeholder management", "Protocol", "Production"],
    image: "/images/corporate.webp",
  },
  {
    number: "02",
    title: "Conferences & MICE",
    statement: "Every delegate journey, considered.",
    description:
      "Meetings, conferences, conventions, seminars, exhibitions and delegate experiences involving venue, production, hospitality, travel and on-site management.",
    capabilities: ["Venue", "Travel", "Hospitality", "On-site management"],
    image: "/images/mice.webp",
  },
  {
    number: "03",
    title: "Brand Activations & Roadshows",
    statement: "Ideas, made tangible in the field.",
    description:
      "Brand activations, launches, roadshows, field marketing, sampling, consumer engagement and public outreach.",
    capabilities: ["Concept", "Branding", "Media", "Audience engagement"],
    image: "/images/activation.webp",
  },
  {
    number: "04",
    title: "Public & Large-Scale Experiences",
    statement: "Scale without losing control.",
    description:
      "Public programmes, cultural events, large gatherings, entertainment programmes and special experiences.",
    capabilities: ["Production", "Logistics", "Manpower", "Execution"],
    image: "/images/public.webp",
  },
  {
    number: "05",
    title: "Institutional & Educational",
    statement: "Purposeful programmes, professionally delivered.",
    description:
      "Educational events, campus activations, workshops, competitions, student engagement and institutional programmes.",
    capabilities: ["Coordination", "Workshops", "Engagement", "Administration"],
    image: "/images/institutional.webp",
  },
];

const capabilityRows = [
  ["Create", "Concept / Experience / Branding", "Original thinking shaped into a clear, executable experience."],
  ["Connect", "Activation / PR / Media / Audience", "People, purpose and platforms aligned around one outcome."],
  ["Coordinate", "Vendors / Administration / Stakeholders / Manpower", "Every dependency held together with disciplined ownership."],
  ["Host", "Guests / Travel / Accommodation / Hospitality", "A considered experience before, during and after the event."],
  ["Deliver", "Production / Logistics / Execution / Closure", "On time, on brief and responsible through the final detail."],
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Paris Passion Events home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span><b>Paris Passion</b><small>Events · Ideas · Innovation</small></span>
    </a>
  );
}

export default function Home() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const active = experiences[activeExperience];

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage("This is a demo form. Enquiry delivery will be connected before launch.");
  }

  return (
    <main>
      <header className="site-header">
        <Brand />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-nav">
          <span>{menuOpen ? "Close" : "Menu"}</span><i aria-hidden="true" />
        </button>
        <nav id="site-nav" className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#experiences" onClick={() => setMenuOpen(false)}>Experiences</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="button button-small" href="#contact" onClick={() => setMenuOpen(false)}>Discuss Your Requirement</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <Image src="/images/hero-conference.webp" alt="Representative view of a formal corporate conference with a speaker and audience" width={1536} height={1024} sizes="100vw" priority />
        <div className="hero-shade" />
        <div className="hero-copy reveal">
          <p className="eyebrow">End-to-end event stewardship</p>
          <h1>When hundreds of details have to work as one, <em>experience matters.</em></h1>
          <p className="hero-position">Experienced. Selective. Premium.</p>
          <p className="hero-description">One experienced partner bringing concept, people, production, hospitality and execution together around your objective.</p>
          <div className="hero-actions">
            <a className="button" href="#contact">Discuss Your Requirement</a>
            <a className="text-link" href="#experiences">See Experiences <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <p className="hero-proof"><b>25+ years</b> of passion · ideas · innovation</p>
        <div className="hero-index" aria-hidden="true"><span>01</span><i /><span>Responsibility</span></div>
      </section>

      <section className="responsibility section-light" aria-labelledby="responsibility-title">
        <div className="responsibility-intro">
          <p className="eyebrow">Our responsibility</p>
          <h2 id="responsibility-title">One<br />objective.</h2>
          <p>Behind every effortless experience is a hundred moving parts. We take responsibility for all of it.</p>
        </div>
        <div className="moving-parts" aria-label="Capabilities brought together around one objective">
          <div><span>Concept</span><i /><span>Venue</span><i /><span>Production</span></div>
          <div><span>Branding</span><i /><span>PR</span><i /><span>Media</span><i /><span>Guests</span></div>
          <div><span>Travel</span><i /><span>Accommodation</span><i /><span>Hospitality</span></div>
          <div><span>Logistics</span><i /><span>Vendors</span><i /><span>Administration</span></div>
          <div><span>Manpower</span><i /><span>Execution</span></div>
          <p><em>One</em> experienced partner.</p>
        </div>
      </section>

      <section className="capabilities section-dark" aria-labelledby="capabilities-title">
        <div className="capability-visual">
          <p className="eyebrow">What we do</p>
          <h2 id="capabilities-title">From idea to impact.<br /><em>Seamlessly.</em></h2>
          <p>Creativity with control, strategy with sensitivity and execution with excellence.</p>
          <Image className="cap-image-one" src="/images/production.webp" alt="Representative backstage event production scene" width={1024} height={1024} sizes="(max-width: 760px) 82vw, 27vw" />
          <Image className="cap-image-two" src="/images/public.webp" alt="Representative public-scale cultural programme" width={1024} height={1024} sizes="(max-width: 760px) 73vw, 27vw" />
        </div>
        <ol className="capability-list">
          {capabilityRows.map((row, index) => (
            <li key={row[0]}>
              <span className="cap-number">0{index + 1}</span>
              <div><h3>{row[0]}</h3><p>{row[1]}</p></div>
              <p>{row[2]}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="experiences" className="experiences section-dark" aria-labelledby="experiences-title">
        <div className="section-heading">
          <p className="eyebrow">Experiences</p>
          <h2 id="experiences-title">Different environments.<br /><em>One standard of ownership.</em></h2>
        </div>
        <div className="experience-desktop">
          <div className="experience-index" role="tablist" aria-label="Experience categories">
            {experiences.map((item, index) => (
              <button key={item.title} role="tab" aria-selected={activeExperience === index} aria-controls="experience-panel" onClick={() => setActiveExperience(index)} onMouseEnter={() => setActiveExperience(index)}>
                <span>{item.number}</span><b>{item.title}</b><i aria-hidden="true">{activeExperience === index ? "—" : "+"}</i>
              </button>
            ))}
          </div>
          <div id="experience-panel" className="experience-panel" role="tabpanel" aria-live="polite">
            <Image key={active.image} src={active.image} alt={`Representative ${active.title.toLowerCase()} environment`} width={1024} height={1024} sizes="61vw" />
            <div className="experience-overlay" />
            <div className="experience-copy" key={active.title}>
              <p>{active.number} / 05</p>
              <h3>{active.statement}</h3>
              <p>{active.description}</p>
              <ul>{active.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
            </div>
          </div>
        </div>
        <div className="experience-mobile">
          {experiences.map((item, index) => {
            const isOpen = activeExperience === index;
            return (
              <article className={isOpen ? "mobile-experience open" : "mobile-experience"} key={item.title}>
                <button aria-expanded={isOpen} onClick={() => setActiveExperience(index)}><span>{item.number}</span><b>{item.title}</b><i>{isOpen ? "−" : "+"}</i></button>
                {isOpen && <div className="mobile-experience-body"><Image src={item.image} alt={`Representative ${item.title.toLowerCase()} environment`} width={1024} height={1024} sizes="calc(100vw - 48px)" /><h3>{item.statement}</h3><p>{item.description}</p><ul>{item.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul></div>}
              </article>
            );
          })}
        </div>
      </section>

      <section id="journey" className="journey section-light" aria-labelledby="journey-title">
        <div className="journey-heading">
          <p className="eyebrow">Our journey</p>
          <h2 id="journey-title">Experience is built<br />by taking <em>responsibility.</em></h2>
        </div>
        <div className="journey-chapters">
          <article className="chapter chapter-beginning">
            <div><span>2000</span><h3>The beginning</h3><p>Founded in Visakhapatnam.</p><p>Built on passion. Guided by purpose. Driven by ownership.</p></div>
            <Image src="/images/institutional.webp" alt="Representative professional gathering" width={1024} height={1024} sizes="(max-width: 760px) calc(100vw - 48px), 51vw" />
          </article>
          <article className="chapter chapter-expand">
            <p className="chapter-number">02</p><div><h3>Experience expands</h3><p>Promotions, roadshows, launches, public programmes and broader event experience.</p></div>
            <Image src="/images/activation.webp" alt="Representative brand activation environment" width={1024} height={1024} sizes="(max-width: 760px) calc(100vw - 48px), 44vw" />
          </article>
          <article className="chapter chapter-grow">
            <Image src="/images/corporate.webp" alt="Representative formal corporate programme" width={1024} height={1024} sizes="(max-width: 760px) calc(100vw - 48px), 51vw" />
            <div><p className="chapter-number">03</p><h3>Responsibility grows</h3><p>Corporate events, conferences, exhibitions and institutional programmes.</p></div>
          </article>
          <article className="chapter chapter-capability">
            <p className="chapter-number">04</p><h3>Capability expands</h3><p>MICE, branding, PR, media, project coordination, travel, hospitality and administration.</p>
          </article>
          <article className="chapter chapter-today">
            <div><p className="chapter-number">05</p><h3>Today</h3><p>Experienced. Selective. Premium.</p></div>
            <blockquote>Your Goal is <em>Our</em> Goal.</blockquote>
          </article>
        </div>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="contact-intro">
          <Brand />
          <div><p className="eyebrow">Start a conversation</p><h2 id="contact-title">Tell us what you’re <em>planning.</em></h2><p>Every successful engagement starts with understanding the objective. Share a few details and we’ll begin there.</p></div>
          <p className="contact-note">Visakhapatnam origin<br />Serving Andhra Pradesh, Telangana and South India</p>
        </div>
        <form className="contact-form" onSubmit={submitDemo}>
          <div className="field-row"><label>Name<input name="name" autoComplete="name" required /></label><label>Organisation<input name="organisation" autoComplete="organization" /></label></div>
          <label>Phone / Email<input name="contact" required /></label>
          <label>Requirement Type<select name="requirement" defaultValue=""><option value="" disabled>Select an experience</option>{experiences.map((item) => <option key={item.title}>{item.title}</option>)}</select></label>
          <label>Short Description<textarea name="description" rows={5} placeholder="Tell us about your objective, context and key expectations." required /></label>
          <button className="button" type="submit">Discuss Your Requirement <span aria-hidden="true">→</span></button>
          <p className="form-status" aria-live="polite">{formMessage || "Demo enquiry form — delivery details to be connected before launch."}</p>
        </form>
      </section>

      <footer><Brand /><p>Established 2000 · Visakhapatnam</p><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
