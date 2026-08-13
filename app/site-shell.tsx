"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return <Link className="official-logo" href="/" aria-label="Paris Passion Events home"><Image src="/paris-passion-logo.png" width={177} height={139} alt="Paris Passion Events — adding colour to your events" /></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header inner-header">
    <Logo />
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav"><span>{open ? "Close" : "Menu"}</span><i /></button>
    <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
      <Link href="/">Home</Link><Link href="/experiences">Experiences</Link><Link href="/journey">Journey</Link><Link href="/contact">Contact</Link>
      <Link className="button button-small" href="/contact">Discuss Your Requirement</Link>
    </nav>
  </header>;
}

export function Footer() {
  return <footer className="business-footer">
    <div className="footer-brand"><Logo /><p>Experienced event, activation and project support since 2000.</p></div>
    <div><p className="footer-label">Explore</p><Link href="/experiences">Experiences</Link><Link href="/journey">Our Journey</Link><Link href="/contact">Contact</Link></div>
    <div><p className="footer-label">Contact</p><a href="tel:+919393322449">+91 93933 22449</a><a href="mailto:parispassionevents@gmail.com">parispassionevents@gmail.com</a><p>Visakhapatnam, Andhra Pradesh</p></div>
    <p className="footer-end">Paris Passion Events · Established 2000</p>
  </footer>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="arrow-link" href={href}>{children}<span aria-hidden="true">→</span></Link>;
}
