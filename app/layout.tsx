import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paris Passion Events | Experience. Responsibility. Delivery.",
  description: "Paris Passion Events is an experienced, selective event partner for corporate, government and institutional requirements across South India.",
  keywords: ["event management", "corporate events", "conferences", "MICE", "Visakhapatnam", "South India"],
  openGraph: {
    title: "Paris Passion Events",
    description: "One objective. Many moving parts. One experienced partner.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Paris Passion Events - one experienced partner" }],
  },
  twitter: { card: "summary_large_image", title: "Paris Passion Events", description: "Experience, responsibly delivered.", images: ["/og.png"] },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
