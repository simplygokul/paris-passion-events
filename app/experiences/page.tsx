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
      <div><p className="eyebrow">Experiences</p><h1>What can Paris Passion <em>handle?</em></h1><p>Serious events are ecosystems, not isolated deliverables. Select a requirement to see the formats, responsibilities and capabilities we can coordinate around it.</p></div>
      <Image src="/images/production.webp" alt="Representative event production environment" width={1024} height={1024} sizes="46vw" priority />
    </section>

    <section className="experience-workspace ink-section">
      <div className="experience-tabs" role="tablist" aria-label="Experience categories">{experiences.map((item,index)=><button role="tab" aria-selected={index===activeIndex} onClick={()=>setActiveIndex(index)} key={item.slug}><span>{item.number}</span><b>{item.title}</b><i>{index===activeIndex ? "—" : "+"}</i></button>)}</div>
      <article className="experience-detail" role="tabpanel" aria-live="polite" key={active.slug}>
        <div className="experience-detail-image"><Image src={active.image} alt={`Representative ${active.title.toLowerCase()} environment`} width={1024} height={1024} sizes="64vw" /><span>Representative imagery</span></div>
        <div className="experience-detail-heading"><p className="eyebrow">{active.number} / 05</p><h2>{active.statement}</h2><p>{active.intro}</p><p>{active.detail}</p></div>
        <div className="experience-columns">
          <div><h3>Relevant formats</h3><ul>{active.formats.map(item=><li key={item}>{item}</li>)}</ul></div>
          <div><h3>End-to-end capabilities</h3><ul>{active.capabilities.map(item=><li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className="experience-responsibility"><p className="eyebrow">Our role</p><p>We align the people, partners, schedules and operational details surrounding your requirement—so planning, production, branding, logistics and guest experience work toward one objective.</p><Link className="button" href="/contact">Discuss Your Requirement</Link></div>
      </article>
    </section>
    <section className="page-close paper-section"><p className="eyebrow">Not sure where your requirement fits?</p><h2>Start with the objective.<br /><em>We’ll map the moving parts.</em></h2><p>Many engagements combine categories and capabilities. Tell us the outcome, audience and context; we’ll begin with a practical conversation.</p><Link className="button" href="/contact">Talk to Paris Passion</Link></section>
  </PageShell>;
}
