"use client";

import { FormEvent, useState } from "react";
import { experiences } from "../site-data";
import { PageShell } from "../site-shell";

export default function ContactPage() {
  const [message,setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Event enquiry from ${form.get("name")} — ${form.get("organisation")}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Organisation: ${form.get("organisation")}`,
      `Phone: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      `Requirement Type: ${form.get("requirement")}`,
      `Location: ${form.get("location") || "Not specified"}`,
      `Expected Date: ${form.get("date") || "Not specified"}`,
      "",
      `Short Description: ${form.get("description")}`,
    ].join("\n");
    setMessage("Your email application will open with the enquiry details. Please review and send the email.");
    window.location.href = `mailto:parispassionevents@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return <PageShell>
    <section className="contact-page">
      <div className="contact-page-intro"><p className="eyebrow">Contact us</p><h1>Tell Us About Your <em>Requirement</em></h1><p>Share your event details with us and our team will get in touch to understand your requirement.</p><div className="direct-contact"><div><span>Phone</span><a href="tel:+919393322449">+91 93933 22449</a></div><div><span>WhatsApp</span><a href="https://wa.me/919393322449" target="_blank" rel="noreferrer">+91 93933 22449</a></div><div><span>Email</span><a href="mailto:parispassionevents@gmail.com">parispassionevents@gmail.com</a></div><div><span>Location</span><p>Visakhapatnam, Andhra Pradesh</p></div></div></div>
      <form className="full-contact-form" onSubmit={submit}><div className="field-pair"><label>Name<input name="name" autoComplete="name" required /></label><label>Organisation<input name="organisation" autoComplete="organization" required /></label></div><div className="field-pair"><label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div><div className="field-pair"><label>Requirement Type<select name="requirement" defaultValue="" required><option value="" disabled>Select a category</option>{experiences.map(item=><option key={item.slug} value={item.title}>{item.title}</option>)}<option value="Integrated / Other Requirement">Integrated / Other Requirement</option></select></label><label>Location<input name="location" /></label></div><label>Expected Date<input name="date" type="date" /></label><label>Short Description<textarea name="description" rows={6} placeholder="Tell us about the event and the support you require." required /></label><button className="button" type="submit">Send Enquiry <span>→</span></button><p className="form-status" aria-live="polite">{message || "Your details will be used only to respond to this enquiry."}</p></form>
    </section>
    <section className="contact-assurance paper-section"><p className="eyebrow">What happens next</p><div><h2>Our team will understand your requirement.</h2><p>We will discuss the event type, location, expected date, audience and services required. Based on the details, we can identify the next steps for planning and coordination.</p></div></section>
  </PageShell>;
}
