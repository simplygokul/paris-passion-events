import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.parispassionevents.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Paris Passion Events | Professional Event Management",
  description:
    "25+ years of professional event management for corporate, government and institutional clients across Andhra Pradesh and South India.",
  keywords: [
    "event management",
    "corporate events",
    "conferences",
    "MICE",
    "Visakhapatnam",
    "Andhra Pradesh",
    "South India",
    "Paris Passion Events",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Paris Passion Events",
    description: "25+ years of experience in professional event management.",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Paris Passion Events",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Paris Passion Events — professional event management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paris Passion Events",
    description: "25+ years of experience in professional event management.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
