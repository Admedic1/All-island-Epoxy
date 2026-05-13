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
  title: "All Island Epoxy & Polishing | Epoxy Floor Coating Long Island NY",
  description:
    "Residential & commercial epoxy floors across Long Island, NY. Owner on every job. Licensed & insured. Call (631) 636-5667.",
  openGraph: {
    title: "All Island Epoxy & Polishing | Epoxy Floor Coating Long Island NY",
    description:
      "Residential & commercial epoxy floors across Long Island, NY. Owner on every job. Licensed & insured.",
    url: "https://allislandepoxy.com",
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
      "Residential & commercial epoxy floors across Long Island, NY. Owner on every job. Licensed & insured.",
    images: ["/images/og-image.png"],
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
