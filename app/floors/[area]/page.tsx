import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SITE } from "@/lib/site";
import { FLOOR_AREAS, getFloorAreaBySlug } from "@/lib/floor-areas";
import { ALL_REVIEWS } from "@/lib/reviews-all";
import { Button } from "@/components/ui/button";

type Props = { params: { area: string } };

export function generateStaticParams() {
  return FLOOR_AREAS.map((a) => ({ area: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = getFloorAreaBySlug(params.area);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
  };
}

function galleryImageSrc(seed: string): string {
  if (seed.startsWith("/")) return seed;
  return `https://picsum.photos/seed/${seed}/700/500`;
}

function avatarColor(name: string) {
  const palette = [
    { bg: "bg-forest/30", text: "text-forest-light" },
    { bg: "bg-amber/20", text: "text-amber-glow" },
    { bg: "bg-red-900/30", text: "text-red-400" },
    { bg: "bg-sky-900/30", text: "text-sky-400" },
  ];
  return palette[name.charCodeAt(0) % palette.length];
}

// Coating system layers — same for all areas, described generically
const SYSTEM_LAYERS = [
  {
    label: "Diamond Grinding",
    description: "Opens the concrete surface to ensure mechanical adhesion. Removes old sealers, paint, and contamination.",
    color: "bg-zinc-700",
    textColor: "text-zinc-300",
  },
  {
    label: "Crack Repair & Prep",
    description: "Fills cracks, spalls, and low spots. Addresses moisture or surface issues before any coating is applied.",
    color: "bg-zinc-600",
    textColor: "text-zinc-200",
  },
  {
    label: "Epoxy Primer / Base",
    description: "High-build epoxy base coat penetrates the ground surface and bonds the system to the slab.",
    color: "bg-forest/60",
    textColor: "text-white",
  },
  {
    label: "Color Chip Broadcast",
    description: "US Resin Supply color chips broadcast into the wet base coat — full or partial coverage. Adds texture, color, and depth.",
    color: "bg-amber/70",
    textColor: "text-black",
  },
  {
    label: "Polyaspartic Topcoat",
    description: "Seals and locks in the flake layer. UV-stable, chemical-resistant, scratch-resistant. Fast-curing for quicker return-to-use.",
    color: "bg-sky-900/80",
    textColor: "text-white",
  },
];

export default function FloorAreaPage({ params }: Props) {
  const area = getFloorAreaBySlug(params.area);
  if (!area) notFound();

  const areaReviews = ALL_REVIEWS.filter((r) => r.job === area.reviewJobType);
  const popularChips = area.colorChips.filter((c) => c.popular);
  const otherChips = area.colorChips.filter((c) => !c.popular);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${area.title} — ${SITE.legalName}`,
    description: area.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.legalName,
      telephone: SITE.phoneTel,
      areaServed: "Long Island, NY",
    },
    aggregateRating:
      areaReviews.length > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: String(areaReviews.length),
          }
        : undefined,
  };

  return (
    <div className="bg-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="border-b border-white/10 bg-gradient-to-br from-black via-zinc-950 to-black">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
              {area.label}
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
              {area.headline}
            </h1>
            <p className="mt-4 text-xl font-medium text-amber-glow">
              {area.subheadline}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {area.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="font-black uppercase">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-black">
                <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
              </Button>
            </div>
          </div>
          {/* Hero photo */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
            <Image
              src={galleryImageSrc(area.gallerySeeds[0])}
              alt={`${area.title} — Long Island, NY`}
              fill
              priority
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white backdrop-blur-sm">
              Installed by All Island Epoxy
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo gallery strip ── */}
      <section className="border-b border-white/10 bg-black py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* First row: always shown */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {area.gallerySeeds.slice(0, 4).map((seed, i) => (
              <div
                key={seed}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={galleryImageSrc(seed)}
                  alt={`${area.title} example ${i + 1} — Long Island`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
              </div>
            ))}
          </div>
          {/* Second row: shown when there are 5+ photos */}
          {area.gallerySeeds.length > 4 && (
            <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-4">
              {area.gallerySeeds.slice(4).map((seed, i) => (
                <div
                  key={seed}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
                >
                  <Image
                    src={galleryImageSrc(seed)}
                    alt={`${area.title} example ${i + 5} — Long Island`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Color options (US Resin Supply) ── */}
      <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-glow">
              Color Options
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              US Resin Supply Color Chip Blends
            </h2>
            <p className="mt-4 text-muted-foreground">
              We stock and install US Resin Supply chip blends — not discount
              knockoffs. We bring physical samples to every estimate so you can
              see the real chips in your lighting before committing.
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                src="/images/us-resin-supply-logo.png"
                alt="U.S. Resin Supply & Manufacturing — authorized supplier"
                width={280}
                height={70}
                className="rounded-lg object-contain opacity-90"
              />
            </div>
          </div>

          {/* Real swatch sheet photo */}
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl shadow-black/40">
            <Image
              src="/images/flake-color-swatches.png"
              alt="US Resin Supply color chip blends — Shoreline, Orbit, Gravel, Domino, Coyote, Tidal Wave, Creek Bed, Nightfall, Wombat, Outback"
              width={1200}
              height={560}
              className="w-full object-contain"
              priority
            />
          </div>

          {/* Named chip list with descriptions */}
          <div className="mt-10">
            <p className="text-xs font-black uppercase tracking-widest text-forest-light">
              Available blends
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {area.colorChips.map((chip) => (
                <div
                  key={chip.name}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-4 w-4 flex-shrink-0 rounded-full ring-1 ring-white/20"
                      style={{
                        background: `conic-gradient(from 0deg, ${chip.swatchColors.join(", ")}, ${chip.swatchColors[0]})`,
                      }}
                    />
                    <p className="text-sm font-black text-white">{chip.name}</p>
                    {chip.popular && (
                      <span className="ml-auto rounded-full bg-red-600/80 px-1.5 py-0.5 text-[9px] font-black text-white">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-xs leading-snug text-muted-foreground">
                    {chip.character}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Custom blends available on request.{" "}
            <Link href="/quote" className="font-bold text-amber-glow hover:underline">
              Request a sample at your estimate →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Coating system breakdown ── */}
      <section className="border-b border-white/10 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
                The System
              </p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                What Goes Into a Proper {area.label} Coating
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Cheap floors fail at the prep stage. Every layer in our system
                serves a specific purpose — and none of them are skipped. We use
                US Resin Supply materials throughout for consistent, documented
                performance.
              </p>
              <div className="mt-8">
                <Button asChild className="font-black uppercase">
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>

            {/* Layer stack diagram */}
            <div className="space-y-2">
              {SYSTEM_LAYERS.map((layer, i) => (
                <div
                  key={layer.label}
                  className={`flex items-start gap-4 rounded-xl px-5 py-4 ${layer.color}`}
                >
                  <span className={`flex-shrink-0 text-xs font-black ${layer.textColor} mt-0.5 w-5 text-right`}>
                    {i + 1}
                  </span>
                  <div>
                    <p className={`font-black ${layer.textColor}`}>{layer.label}</p>
                    <p className={`mt-0.5 text-xs leading-relaxed opacity-80 ${layer.textColor}`}>
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
              <p className="pt-2 text-right text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                US Resin Supply materials throughout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenges section ── */}
      <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
              Why It Matters
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              What {area.label} Floors Are Up Against
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {area.challenges.map((c) => (
              <div
                key={c.heading}
                className="rounded-2xl border border-white/10 bg-black/40 p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 font-black text-forest-light">✓</span>
                  <div>
                    <h3 className="font-black text-white">{c.heading}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      {areaReviews.length > 0 && (
        <section className="border-b border-white/10 bg-black py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-glow">
                  Reviews
                </p>
                <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                  What {area.label} Customers Say
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {areaReviews.length} verified {area.label.toLowerCase()} installs reviewed.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950 px-5 py-4 text-center">
                <p className="text-3xl font-black text-white">
                  5.0{" "}
                  <span className="text-amber-glow" aria-label="5 stars">
                    ★★★★★
                  </span>
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Google Rating
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {areaReviews.map((r) => {
                const colors = avatarColor(r.name);
                return (
                  <div
                    key={r.id}
                    className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-black ring-2 ${colors.bg} ${colors.text} ring-white/10`}
                      >
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-black text-white">{r.name}</p>
                        <p className="text-[11px] text-muted-foreground">
                          {r.date} · {r.town}, NY
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 text-amber-glow" aria-label="5 stars">
                      ★★★★★
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/90">
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <span className="mt-4 inline-flex self-start rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                      {r.job}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              {area.label} Coating Questions Answered
            </h2>
          </div>
          <div className="mt-12 divide-y divide-white/10">
            {area.faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-lg font-black text-white">{faq.q}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-red-700 via-forest-dark to-forest py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Ready to Transform Your {area.label.split(" ")[0]}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Get clear recommendations and a real price — owner on every estimate,
            owner on every job.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white font-black uppercase text-black hover:bg-white/90"
            >
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-black">
              <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Back nav ── */}
      <div className="bg-black px-4 py-6 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/services" className="text-sm font-semibold text-muted-foreground hover:text-white">
            ← All services
          </Link>
          <div className="flex gap-4">
            {FLOOR_AREAS.filter((a) => a.slug !== area.slug).map((a) => (
              <Link
                key={a.slug}
                href={`/floors/${a.slug}`}
                className="text-sm font-semibold text-muted-foreground hover:text-amber-glow"
              >
                {a.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
