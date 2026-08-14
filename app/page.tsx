import Image from "next/image";
import Link from "next/link";
import { coreCapabilities, experiences, supportTerms } from "./site-data";
import { ArrowLink, PageShell } from "./site-shell";

export default function Home() {
  return <PageShell>
    <section className="home-hero">
      <Image src="/images/hero-indian-conference.png" alt="Representative professional conference with Indian delegates" width={1536} height={1024} sizes="100vw" priority />
      <div className="hero-shade" />
      <div className="home-hero-copy">
        <p className="eyebrow">Paris Passion Events</p>
        <h1>25+ Years of Experience in <em>Professional Event Management</em></h1>
        <p className="hero-summary">We plan and manage corporate, government and institutional events with complete support from concept and coordination to execution.</p>
        <p className="hero-position">Events • Branding • PR • Media • MICE • Travel • Hospitality</p>
        <div className="hero-actions"><Link className="button" href="/contact">Discuss Your Requirement</Link><Link className="text-link" href="/experiences">Explore Our Services <span>→</span></Link></div>
      </div>
      <div className="hero-credibility"><strong>25+</strong><span>years of experience<br />Established 2000</span></div>
    </section>

    <section className="business-intro paper-section">
      <div className="section-kicker"><p className="eyebrow">Who we are</p><span>Visakhapatnam · Andhra Pradesh</span></div>
      <div className="business-intro-copy">
        <h2>Experienced. Professional. <em>Dependable.</em></h2>
        <div><p>Since 2000, Paris Passion Events has been planning and managing events across Andhra Pradesh and other parts of South India.</p><p>Today, we work mainly with corporate, government and institutional clients who require reliable planning, coordination and execution.</p></div>
      </div>
    </section>

    <section className="ecosystem ink-section">
      <div className="ecosystem-heading"><p className="eyebrow">End-to-end support</p><h2>Complete Event Support from <em>Planning to Execution</em></h2></div>
      <div className="ecosystem-copy"><p>A successful event requires many teams and activities to work together. Paris Passion coordinates the important requirements under one experienced team.</p><div className="ecosystem-terms">{supportTerms.map((item,index)=><span key={item}><b>{String(index+1).padStart(2,"0")}</b>{item}</span>)}</div></div>
    </section>

    <section className="home-capabilities paper-section">
      <div className="section-title-row"><div><p className="eyebrow">Our capabilities</p><h2>How we support your event.</h2></div><p>Practical support across planning, communication, coordination, hospitality and delivery.</p></div>
      <ol className="business-capability-list">{coreCapabilities.map((item,index)=><li key={item[0]}><span>{String(index+1).padStart(2,"0")}</span><h3>{item[0]}</h3><p>{item[1]}</p></li>)}</ol>
    </section>

    <section className="home-experiences ink-section">
      <div className="section-title-row light"><div><p className="eyebrow">Experiences</p><h2>Professional support for <em>different event requirements.</em></h2></div><ArrowLink href="/experiences">View all experiences</ArrowLink></div>
      <div className="experience-preview-feature"><Image src={experiences[1].image} alt={experiences[1].imageAlt} width={1536} height={1024} sizes="55vw" /><div><span>02 / Featured</span><h3>{experiences[1].title}</h3><p>{experiences[1].description}</p><ArrowLink href="/experiences">Explore Conferences & MICE</ArrowLink></div></div>
      <div className="experience-preview-list">{experiences.filter((_,i)=>i!==1).map(item=><Link href="/experiences" key={item.slug}><span>{item.number}</span><b>{item.title}</b><i>→</i></Link>)}</div>
    </section>

    <section className="credibility paper-section">
      <div><p className="eyebrow">Our experience</p><h2>Professional support backed by <em>25+ years of experience.</em></h2><p>Our team stays closely involved from the initial discussion through planning, coordination, execution and closure.</p></div>
      <dl><div><dt>2000</dt><dd>Established</dd></div><div><dt>25+</dt><dd>Years of experience</dd></div><div><dt>Visakhapatnam</dt><dd>Origin</dd></div><div><dt>South India</dt><dd>Experience across Andhra Pradesh and other parts of the region</dd></div></dl>
    </section>

    <section className="journey-preview ink-section">
      <Image src="/images/journey-beginning.png" alt="Representative Indian outdoor promotional activity from Paris Passion’s early journey" width={1536} height={1024} sizes="42vw" />
      <div><p className="eyebrow">Our journey</p><h2>More than two decades of <em>event experience.</em></h2><p>Paris Passion began in Visakhapatnam in 2000 and has grown from promotions and brand activities into wider event, MICE and project coordination support.</p><ArrowLink href="/journey">Read our journey</ArrowLink></div>
    </section>

    <section className="contact-cta paper-section"><p className="eyebrow">Start a conversation</p><h2>Tell Us About Your <em>Requirement</em></h2><p>Share your event details with us and our team will get in touch to understand your requirement.</p><Link className="button" href="/contact">Discuss Your Requirement</Link></section>
  </PageShell>;
}
