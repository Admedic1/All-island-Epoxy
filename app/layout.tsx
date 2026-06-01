import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageEntrance } from "@/components/PageEntrance";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "All Island Epoxy & Polishing | Epoxy Floor Coating Long Island NY",
    template: "%s | All Island Epoxy & Polishing",
  },
  description:
    "All Island Epoxy & Polishing — Long Island's #1 epoxy floor coating company. Garage floors, basement floors, commercial coatings. Licensed & insured. Owner on every job. Serving Nassau & Suffolk County. Call (631) 636-5667.",
  keywords: [
    "epoxy floor coating Long Island",
    "garage floor epoxy Long Island",
    "All Island Epoxy",
    "All Island Epoxy and Polishing",
    "epoxy floors Nassau County",
    "epoxy floors Suffolk County",
    "basement epoxy floor Long Island",
    "commercial epoxy floor Long Island",
    "concrete floor coating Long Island NY",
    "flake epoxy garage floor",
    "metallic epoxy floor Long Island",
  ],
  metadataBase: new URL("https://allislandepoxy.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "All Island Epoxy & Polishing | Epoxy Floor Coating Long Island NY",
    description:
      "Long Island's epoxy floor coating specialists. Garages, basements, commercial spaces. Owner on every job. Licensed & insured. Nassau & Suffolk County.",
    url: "https://allislandepoxy.vercel.app",
    siteName: "All Island Epoxy & Polishing",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "All Island Epoxy & Polishing — Long Island's Concrete Coating Specialists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Island Epoxy & Polishing | Epoxy Floor Coating Long Island NY",
    description:
      "Long Island's epoxy floor coating specialists. Garages, basements, commercial spaces. Owner on every job.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen bg-ink font-sans antialiased">
        <ScrollProgressBar />
        <PageEntrance />
        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
