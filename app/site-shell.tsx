"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Logo({ placement = "footer" }: { placement?: "header" | "footer" }) {
  return (
    <Link className={`official-logo ${placement}-logo`} href="/" aria-label="Paris Passion Events home">
      <Image
        src="/paris-passion-logo-white.png"
        width={520}
        height={421}
        alt="Paris Passion Events — adding colour to your events"
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = pathname.split("/").filter(Boolean).pop() ?? "home";
  const isActive = (href: string) =>
    href === "/"
      ? !["experiences", "journey", "contact"].includes(current)
      : current === href.slice(1);

  return (
    <header className="site-header inner-header">
      <Logo placement="header" />
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="site-nav"
      >
        <span>{open ? "Close" : "Menu"}</span>
        <i />
      </button>
      <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        <Link className={isActive("/") ? "active" : ""} aria-current={isActive("/") ? "page" : undefined} href="/">Home</Link>
        <Link className={isActive("/experiences") ? "active" : ""} aria-current={isActive("/experiences") ? "page" : undefined} href="/experiences">Experiences</Link>
        <Link className={isActive("/journey") ? "active" : ""} aria-current={isActive("/journey") ? "page" : undefined} href="/journey">Journey</Link>
        <Link className={isActive("/contact") ? "active" : ""} aria-current={isActive("/contact") ? "page" : undefined} href="/contact">Contact</Link>
        <Link className="button button-small" href="/contact">Discuss Your Requirement</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="business-footer">
      <div className="footer-brand">
        <Logo />
        <p>Professional event management and coordination since 2000.</p>
      </div>
      <div>
        <p className="footer-label">Explore</p>
        <Link href="/experiences">Experiences</Link>
        <Link href="/journey">Our Journey</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <p className="footer-label">Contact</p>
        <a href="tel:+919393322449">+91 93933 22449</a>
        <a href="https://wa.me/919393322449" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="mailto:parispassionevents@gmail.com">parispassionevents@gmail.com</a>
        <p>Visakhapatnam, Andhra Pradesh</p>
      </div>
      <p className="footer-end">Paris Passion Events · Established 2000</p>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="arrow-link" href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
