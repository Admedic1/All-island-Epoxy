import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Metallic Epoxy Floors Long Island | Custom Swirl & Marble Finishes | All Island Epoxy",
  description:
    "Metallic epoxy floors in any color or pattern — blue ocean, black marble, copper, charcoal, and more. Custom hand-crafted finishes for garages, basements, and interior spaces on Long Island, NY.",
  keywords: [
    "metallic epoxy floors Long Island",
    "metallic epoxy garage floor NY",
    "custom epoxy floor Long Island",
    "marble epoxy floor Long Island",
    "metallic epoxy basement Long Island",
    "blue metallic epoxy floor",
    "black white marble epoxy",
    "copper metallic epoxy Long Island",
    "show garage floor Long Island",
    "luxury epoxy floor Nassau Suffolk",
  ].join(", "),
};

const STYLES = [
  {
    name: "Ocean Blue",
    description: "Electric blue with pearl white movement — dramatic in bedrooms, basements, and show garages.",
    img: "/images/metallic-blue-swirl.png",
  },
  {
    name: "Dark Copper",
    description: "Deep copper and charcoal swirls with a mirror-gloss topcoat — a garage showstopper.",
    img: "/images/metallic-dark-copper.png",
  },
  {
    name: "Brown Bronze",
    description: "Warm chocolate and bronze for finished basements and living spaces with a rich, earthy feel.",
    img: "/images/metallic-brown-fireplace.png",
  },
  {
    name: "Pure White",
    description: "Bright, clean white with a glass-like surface — transforms dark basements into showrooms.",
    img: "/images/metallic-white-basement.png",
  },
  {
    name: "Black & White Marble",
    description: "High-contrast black and white hand-swirled to look like natural stone — indoors or covered outdoor.",
    img: "/images/metallic-black-white-marble.png",
  },
  {
    name: "Blue Gray Swirl",
    description: "Cool teal and slate flow across the slab — one of the most requested garage looks on Long Island.",
    img: "/images/metallic-blue-gray-garage.png",
  },
  {
    name: "Gray Marble",
    description: "Soft white and gray marble texture — understated elegance for any finished lower level.",
    img: "/images/metallic-gray-marble.png",
  },
  {
    name: "Charcoal Silver",
    description: "Dark graphite with bright silver smoke — the choice for large garages and commercial show floors.",
    img: "/images/metallic-charcoal-silver.png",
  },
  {
    name: "Dark Bronze",
    description: "Rich molten bronze texture — unique, warm, and unlike any standard floor finish.",
    img: "/images/metallic-dark-bronze.png",
  },
  {
    name: "Copper Rust",
    description: "Bold copper and rust tones swirled by hand — a statement floor that holds its own.",
    img: "/images/metallic-copper-rust.png",
  },
];

// Hero: Lamborghini garage — most impactful photo
const HERO_IMG = "/images/metallic-lamborghini-garage.png";

const FAQS = [
  {
    q: "How is a metallic floor different from standard epoxy?",
    a: "Metallic systems use mica-based pigment powders suspended in a clear epoxy carrier. The metallic particles move and settle as the material self-levels, creating unique swirl patterns that can never be exactly duplicated. Standard flake or solid-color epoxy goes on uniform — metallic is hand-crafted.",
  },
  {
    q: "Can I choose my own color combination?",
    a: "Yes. We mix custom color combinations from our metallic pigment library. If you have a reference photo or color in mind, bring it — we can match the mood even if not the exact shade.",
  },
  {
    q: "Is metallic epoxy durable enough for a garage?",
    a: "Absolutely. Every metallic system we install gets a polyaspartic topcoat rated for hot tire contact, chemical resistance, and UV stability. The metallic layer gives you the look — the topcoat gives you the protection.",
  },
  {
    q: "How long does it take?",
    a: "Most residential metallic installs are a 2-day process: day one is surface prep and priming, day two is the metallic pour and topcoat. We're typically off the floor by end of day two.",
  },
  {
    q: "Will it look exactly like the photos?",
    a: "Each metallic floor is hand-poured and hand-moved, so the finished pattern is always one of a kind. We'll show you reference jobs in a similar colorway so you know what to expect — and we talk through the look before we start.",
  },
  {
    q: "What surfaces can metallic epoxy go on?",
    a: "Concrete slabs — garages, basements, home gyms, interior rooms, covered patios. The slab needs to be properly ground and prepped. We assess every surface before quoting.",
  },
];

export default function MetallicEpoxyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Metallic Epoxy Floors — All Island Epoxy",
    description:
      "Custom metallic epoxy floor coatings for garages, basements, and interior spaces on Long Island, NY.",
    areaServed: SITE.region,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.legalName,
      telephone: SITE.phoneTel,
      address: { "@type": "PostalAddress", addressRegion: "NY", addressCountry: "US" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Metallic Color Styles",
      itemListElement: STYLES.map((s) => ({
        "@type": "Offer",
        name: s.name,
        description: s.description,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="bg-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] overflow-hidden border-b border-white/10">
        <Image
          src={HERO_IMG}
          alt="Metallic epoxy garage floor — black and white marble swirl with Lamborghini, Long Island NY"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-4 pb-14 md:justify-center md:pb-0 md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Service
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Metallic Epoxy Floors
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Every metallic floor we pour is one of a kind. Hand-moved metallic
            pigments, mirror-gloss topcoat, and a finish your neighbors will ask
            about. Serving Nassau &amp; Suffolk County.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="font-black uppercase">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-black border-white/40 text-white hover:bg-white/10">
              <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Color style grid ── */}
      <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
              Color Styles
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Every Floor Is One of a Kind
            </h2>
            <p className="mt-4 text-muted-foreground">
              These are real jobs from Long Island. No renders, no stock photos.
              Each color and pattern is custom — bring us a reference and
              we&apos;ll build your look from scratch.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STYLES.map((style) => (
              <div
                key={style.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={style.img}
                    alt={`${style.name} metallic epoxy floor — Long Island NY`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-black uppercase tracking-wider text-forest-light">
                    {style.name}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-white/85">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don&apos;t see your color?{" "}
            <Link href="/quote" className="font-semibold text-forest-light underline hover:no-underline">
              Tell us what you have in mind →
            </Link>
          </p>
        </div>
      </section>

      {/* ── What makes it different ── */}
      <section className="border-b border-white/10 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
                The Process
              </p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                No Two Floors Are Identical
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Metallic epoxy uses mica-based pigment powders suspended in a
                clear epoxy carrier. As the material self-levels, the metallic
                particles move and settle in a pattern that can never be exactly
                duplicated — even by the same installer on the same floor twice.
              </p>
              <p className="mt-4 text-muted-foreground">
                We pour, then hand-move with tools to steer the pattern. The
                result is a floor with depth, movement, and light-catching
                texture that looks different at every angle.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Custom color combinations from our metallic pigment library",
                  "Hand-poured and hand-moved — artisan craftsmanship",
                  "Polyaspartic clear topcoat rated for hot tires and UV stability",
                  "Diamond-ground prep ensures zero delamination risk",
                  "Available for garages, basements, home gyms, and interior rooms",
                ].map((b) => (
                  <li key={b} className="flex gap-3 text-white/85">
                    <span className="mt-1 flex-shrink-0 font-black text-forest-light">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stacked mini-gallery */}
            <div className="grid grid-cols-2 gap-2">
              {[
                "/images/metallic-charcoal-silver.png",
                "/images/metallic-copper-rust.png",
                "/images/metallic-dark-bronze.png",
                "/images/metallic-gray-marble.png",
              ].map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 aspect-[16/7]" : "aspect-square"}`}
                >
                  <Image
                    src={src}
                    alt="Metallic epoxy floor detail — Long Island"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Common Questions About Metallic Floors
            </h2>
          </div>
          <div className="mt-12 divide-y divide-white/10">
            {FAQS.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-lg font-black text-white">{faq.q}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Ready to Design Your Floor?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Tell us your color direction and we&apos;ll show you reference jobs
            in that range. Free estimates — owner on every job, Nassau &amp;
            Suffolk County.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="font-black uppercase">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-black">
              <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Back nav ── */}
      <div className="border-t border-white/10 bg-zinc-950 px-4 py-6 md:px-6">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="text-sm font-semibold text-muted-foreground hover:text-white"
          >
            ← All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
