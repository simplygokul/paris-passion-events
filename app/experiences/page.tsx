"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { experiences } from "../site-data";
import { PageShell } from "../site-shell";

export default function ExperiencesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return <PageShell>
    <section className="page-hero experience-page-hero">
      <div><p className="eyebrow">Experiences</p><h1>Event support for <em>every requirement.</em></h1><p>Choose a category to see the services Paris Passion can plan and coordinate for corporate, government and institutional clients.</p></div>
      <Image src="/images/production-india.png" alt="Indian event production team preparing a conference stage" width={1536} height={1024} sizes="46vw" priority />
    </section>

    <section className="experience-workspace ink-section">
      <div className="experience-tabs" role="tablist" aria-label="Experience categories">{experiences.map((item,index)=><button role="tab" aria-selected={index===activeIndex} onClick={()=>setActiveIndex(index)} key={item.slug}><span>{item.number}</span><b>{item.title}</b><i>{index===activeIndex ? "—" : "+"}</i></button>)}</div>
      <article className="experience-detail" role="tabpanel" aria-live="polite" key={active.slug}>
        <div className="experience-detail-image"><Image src={active.image} alt={active.imageAlt} width={1536} height={1024} sizes="64vw" /><span>Representative imagery</span></div>
        <div className="experience-detail-heading"><p className="eyebrow">{active.number} / 05</p><h2>{active.title}</h2><p>{active.description}</p></div>
        <div className="experience-columns single-list">
          <div><h3>Relevant services</h3><ul>{active.services.map(item=><li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className="experience-responsibility"><p className="eyebrow">Our support</p><p>We coordinate the people, partners, schedules and operational requirements needed for smooth planning and execution.</p><Link className="button" href="/contact">Discuss Your Requirement</Link></div>
      </article>
    </section>
    <section className="page-close paper-section"><p className="eyebrow">Need support across more than one category?</p><h2>Tell us about your <em>requirement.</em></h2><p>Share the event type, location, expected date and support required. Our team will get in touch to understand the details.</p><Link className="button" href="/contact">Send an Enquiry</Link></section>
  </PageShell>;
}
