import Image from "next/image";
import Link from "next/link";
import { coreCapabilities, experiences } from "./site-data";
import { ArrowLink, PageShell } from "./site-shell";

export default function Home() {
  return <PageShell>
    <section className="home-hero">
      <Image src="/images/hero-conference.webp" alt="Representative formal corporate conference" width={1536} height={1024} sizes="100vw" priority />
      <div className="hero-shade" />
      <div className="home-hero-copy">
        <p className="eyebrow">Paris Passion Events</p>
        <h1>When hundreds of details have to work as one, <em>experience matters.</em></h1>
        <p className="hero-position">Experienced. Selective. Premium.</p>
        <div className="hero-actions"><Link className="button" href="/contact">Discuss Your Requirement</Link><Link className="text-link" href="/experiences">Explore Experiences <span>→</span></Link></div>
      </div>
      <div className="hero-credibility"><strong>25+</strong><span>years of experience<br />Established 2000</span></div>
    </section>

    <section className="business-intro paper-section">
      <div className="section-kicker"><p className="eyebrow">Who we are</p><span>Visakhapatnam · Andhra Pradesh</span></div>
      <div className="business-intro-copy">
        <h2>An experienced partner for serious <em>event requirements.</em></h2>
        <div><p>Paris Passion Events was established in 2000 in Visakhapatnam and today works as an experienced event, activation and project-support partner for corporate, government and institutional clients.</p><p>Our role goes beyond a venue, a stage or a production brief. We help connect the complete ecosystem surrounding an event so that the client has one experienced team taking ownership across the moving parts.</p></div>
      </div>
    </section>

    <section className="ecosystem ink-section">
      <div className="ecosystem-heading"><p className="eyebrow">The Paris Passion difference</p><h2>One objective.<br />Many moving parts.<br /><em>One experienced partner.</em></h2></div>
      <div className="ecosystem-copy"><p>A serious event may appear to be one requirement. Behind it are multiple interdependent workstreams that must be planned, coordinated and delivered as one coherent experience.</p><div className="ecosystem-terms">{["Concept","Venue","Production","Branding","PR","Media","Guests","Travel","Hospitality","Logistics","Vendors","Administration","On-ground execution"].map((item,index)=><span key={item}><b>{String(index+1).padStart(2,"0")}</b>{item}</span>)}</div></div>
    </section>

    <section className="home-capabilities paper-section">
      <div className="section-title-row"><div><p className="eyebrow">Current capabilities</p><h2>What we bring together.</h2></div><p>Integrated support across event, activation, communication, movement and administration—adapted to the requirement.</p></div>
      <ol className="business-capability-list">{coreCapabilities.map((item,index)=><li key={item[0]}><span>{String(index+1).padStart(2,"0")}</span><h3>{item[0]}</h3><p>{item[1]}</p></li>)}</ol>
    </section>

    <section className="home-experiences ink-section">
      <div className="section-title-row light"><div><p className="eyebrow">Experiences</p><h2>Requirements we can help <em>bring to life.</em></h2></div><ArrowLink href="/experiences">View all experiences</ArrowLink></div>
      <div className="experience-preview-feature"><Image src={experiences[1].image} alt="Representative conference and delegate environment" width={1024} height={1024} sizes="55vw" /><div><span>02 / Featured</span><h3>{experiences[1].title}</h3><p>{experiences[1].intro}</p><ArrowLink href="/experiences">See how we support MICE</ArrowLink></div></div>
      <div className="experience-preview-list">{experiences.filter((_,i)=>i!==1).map(item=><Link href="/experiences" key={item.slug}><span>{item.number}</span><b>{item.title}</b><i>→</i></Link>)}</div>
    </section>

    <section className="credibility paper-section">
      <div><p className="eyebrow">Credibility</p><h2>Experience that stays close to the work.</h2><p>Selective means fewer engagements and deeper ownership: a team that understands the objective and remains accountable to the final detail.</p></div>
      <dl><div><dt>2000</dt><dd>Established</dd></div><div><dt>25+</dt><dd>Years of experience</dd></div><div><dt>Visakhapatnam</dt><dd>Origin</dd></div><div><dt>South India</dt><dd>Experience across Andhra Pradesh, Telangana and the wider region</dd></div></dl>
    </section>

    <section className="journey-preview ink-section">
      <Image src="/images/activation.webp" alt="Representative brand activation environment" width={1024} height={1024} sizes="42vw" />
      <div><p className="eyebrow">Our journey</p><h2>Built on passion.<br />Guided by purpose.<br /><em>Driven by ownership.</em></h2><p>From early promotions, campaigns and events in Visakhapatnam to broader corporate, MICE, institutional and project-support capabilities across South India.</p><ArrowLink href="/journey">Read our journey</ArrowLink></div>
    </section>

    <section className="contact-cta paper-section"><p className="eyebrow">Start with the objective</p><h2>Tell us what you’re <em>planning.</em></h2><p>We’ll understand the requirement, identify the moving parts and explore how Paris Passion can take responsibility for bringing them together.</p><Link className="button" href="/contact">Discuss Your Requirement</Link></section>
  </PageShell>;
}
