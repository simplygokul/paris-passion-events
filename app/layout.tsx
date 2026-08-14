import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paris Passion Events | Professional Event Management",
  description: "25+ years of professional event management for corporate, government and institutional clients across Andhra Pradesh and South India.",
  keywords: ["event management", "corporate events", "conferences", "MICE", "Visakhapatnam", "South India"],
  openGraph: {
    title: "Paris Passion Events",
    description: "25+ years of experience in professional event management.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Paris Passion Events — professional event management" }],
  },
  twitter: { card: "summary_large_image", title: "Paris Passion Events", description: "25+ years of experience in professional event management.", images: ["/og.png"] },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
