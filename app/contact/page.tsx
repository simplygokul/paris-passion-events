"use client";

import { FormEvent, useState } from "react";
import { experiences } from "../site-data";
import { PageShell } from "../site-shell";

export default function ContactPage() {
  const [message,setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setMessage("Thank you. This demo form is ready to be connected to enquiry delivery before launch."); }
  return <PageShell>
    <section className="contact-page">
      <div className="contact-page-intro"><p className="eyebrow">Start a conversation</p><h1>Tell us what you’re <em>planning.</em></h1><p>Every successful engagement starts with understanding the objective. Share the context, audience and expected outcome, and we can begin a practical conversation about the moving parts.</p><div className="direct-contact"><div><span>Phone / WhatsApp</span><a href="tel:+919393322449">+91 93933 22449</a></div><div><span>Email</span><a href="mailto:parispassionevents@gmail.com">parispassionevents@gmail.com</a></div><div><span>Origin</span><p>Visakhapatnam, Andhra Pradesh</p></div></div></div>
      <form className="full-contact-form" onSubmit={submit}><div className="field-pair"><label>Name<input name="name" autoComplete="name" required /></label><label>Organisation<input name="organisation" autoComplete="organization" required /></label></div><div className="field-pair"><label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div><div className="field-pair"><label>Requirement type<select name="requirement" defaultValue="" required><option value="" disabled>Select a category</option>{experiences.map(item=><option key={item.slug} value={item.slug}>{item.title}</option>)}<option value="integrated">Integrated / Other requirement</option></select></label><label>Location<input name="location" /></label></div><label>Expected date<input name="date" type="date" /></label><label>Short description<textarea name="description" rows={6} placeholder="Tell us about the objective, audience, scale and the support you may need." required /></label><button className="button" type="submit">Send Enquiry <span>→</span></button><p className="form-status" aria-live="polite">{message || "Your details will be used only to respond to this enquiry."}</p></form>
    </section>
    <section className="contact-assurance paper-section"><p className="eyebrow">What happens next</p><div><h2>We begin by understanding—not by assuming.</h2><p>An initial conversation helps clarify the objective, format, location, audience, timeline and responsibility expected from Paris Passion. From there, the relevant event, production, branding, travel, hospitality and coordination workstreams can be mapped.</p></div></section>
  </PageShell>;
}
