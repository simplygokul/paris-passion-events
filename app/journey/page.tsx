import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../site-shell";

const chapters = [
  { number:"01", title:"2000 — The Beginning", text:"Paris Passion Events began its journey in Visakhapatnam in 2000 with event management, promotions and brand activities.", image:"/images/institutional-india.png", alt:"Representative Indian institutional event" },
  { number:"02", title:"Experience Expands", text:"Over the years, the team handled roadshows, promotional campaigns, product launches, public events, entertainment programmes and brand activations.", image:"/images/activation-india.png", alt:"Representative Indian brand activation and roadshow" },
  { number:"03", title:"Responsibility Grows", text:"As experience increased, Paris Passion expanded into corporate events, conferences, exhibitions and institutional programmes.", image:"/images/corporate-government-india.png", alt:"Representative Indian corporate event" },
  { number:"04", title:"Capability Expands", text:"The organisation later added wider support across MICE, branding, PR, media, project coordination, travel, hospitality and administration.", image:"/images/mice-india.png", alt:"Representative Indian MICE event and delegate support" },
  { number:"05", title:"Today", text:"Today, Paris Passion Events focuses mainly on corporate, government and institutional clients who value experience, reliability and professional execution.", image:"/images/production-india.png", alt:"Indian production team preparing a professional event" },
];

export default function JourneyPage() {
  return <PageShell>
    <section className="page-hero journey-page-hero"><div><p className="eyebrow">Our journey</p><h1>25+ years of <em>professional event management.</em></h1><p>Since 2000, Paris Passion Events has expanded its services while staying focused on reliable planning, coordination and execution.</p></div><div className="journey-year"><strong>2000</strong><span>Visakhapatnam</span></div></section>
    <section className="journey-story paper-section">{chapters.map((chapter,index)=><article className={`journey-chapter ${index%2 ? "reverse" : ""}`} key={chapter.title}><div className="chapter-image"><Image src={chapter.image} alt={chapter.alt} width={1536} height={1024} sizes="48vw" /></div><div className="chapter-copy"><span>{chapter.number} / 05</span><h2>{chapter.title}</h2><p>{chapter.text}</p></div></article>)}</section>
    <section className="philosophy ink-section"><div><p className="eyebrow">Our philosophy</p><h2>Your Goal is <em>Our</em> Goal.</h2></div><div><p>We begin by understanding the client’s objective and the support required for the event.</p><p>Our team then coordinates the agreed services with care, clear communication and professional responsibility.</p></div></section>
    <section className="values paper-section"><div><p className="eyebrow">How we work</p><h2>Values that guide our work.</h2></div><ul>{["Integrity","Creativity","Commitment","Client Focus","Excellence","Relationships"].map((value,index)=><li key={value}><span>{String(index+1).padStart(2,"0")}</span><b>{value}</b></li>)}</ul></section>
    <section className="page-close ink-section"><p className="eyebrow">Work with us</p><h2>Experienced. Professional. <em>Dependable.</em></h2><p>For corporate, government and institutional events that require reliable planning, coordination and execution.</p><Link className="button" href="/contact">Discuss Your Requirement</Link></section>
  </PageShell>;
}
