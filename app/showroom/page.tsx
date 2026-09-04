import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "US Resin Supply of Long Island",
  description:
    "Visit US Resin Supply of Long Island at 1401 Church St Suite 2, Bohemia. Epoxy flakes, prep tools, grinders, squeegees, and live floor samples for contractors and homeowners.",
};

const STORE_PHOTOS = [
  {
    src: "/images/hero-showroom-metallic-floor.png",
    alt: "US Resin Supply showroom with metallic epoxy floor sample and flake display board in Bohemia NY",
    caption: "Walk the floor. See real metallic and flake finishes in person.",
  },
  {
    src: "/images/showroom/showroom-flake-samples-shelves.png",
    alt: "Wall of epoxy flake color jars and chip samples at All Island Epoxy supply store",
    caption: "Full flake libraries — pick your blend before the job starts.",
  },
  {
    src: "/images/showroom/showroom-grinders-equipment.png",
    alt: "Concrete grinders, polishers, and prep equipment on display in Bohemia epoxy supply store",
    caption: "Grinders, vacuums, and prep gear for serious concrete work.",
  },
  {
    src: "/images/showroom/showroom-tools-supplies.png",
    alt: "Epoxy application tools including squeegees, rollers, and spiked shoes on store wall",
    caption: "Squeegees, rollers, spiked shoes, and everything you need to lay epoxy.",
  },
  {
    src: "/images/showroom/showroom-warehouse-inventory.png",
    alt: "Warehouse shelving stocked with epoxy coating supplies and bulk inventory in Bohemia NY",
    caption: "Bulk resin, hardeners, and job supplies ready when you need them.",
  },
];

const FOR_CONTRACTORS = [
  "Decorative flake blends and chip samples",
  "Primers, base coats, and polyaspartic topcoats",
  "Diamond grinding and prep equipment",
  "Squeegees, rollers, spiked shoes, and mix tools",
  "Moisture barriers and specialty add-ons",
];

const FOR_HOMEOWNERS = [
  "See flake and metallic samples on real floor panels",
  "Compare colors under store lighting — not on a phone screen",
  "Talk to someone who installs floors every week",
  "Get a quote for professional installation while you're here",
];

export default function ShowroomPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${SITE.store.mapsQuery}`;

  return (
    <div className="bg-ink">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-forest/40">
        <Image
          src="/images/hero-showroom-metallic-floor.png"
          alt=""
          fill
          className="object-cover object-[50%_78%] brightness-110 contrast-105 md:object-[50%_82%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />

        <div className="relative mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Showroom &amp; Supply Store
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
            US Resin Supply
            <span className="block text-forest-light">of Long Island</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Epoxy supplies, flakes, and live floor samples — in Bohemia. Built
            for contractors who need reliable stock, and homeowners who want to
            see real floors before they commit. From concrete prep to the final
            topcoat, we stock what the job actually takes.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-widest text-forest-light">
              Visit Us
            </p>
            <p className="mt-2 text-xl font-black text-white">
              {SITE.store.name}
            </p>
            <p className="mt-1 text-base font-semibold text-white/90">
              {SITE.store.fullAddress}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Hours: {SITE.hours}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="font-black uppercase">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-black">
                <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-3xl font-black text-white md:text-4xl">
          A Real Store for Real Jobs
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            Most coating decisions get made off a tiny swatch photo online. That
            is a bad way to pick a floor you will live with for years. At our
            Bohemia location, you walk on finished epoxy, flip through flake
            libraries, and grab the tools and materials you need for the next
            pour.
          </p>
          <p>
            This is the Long Island store for US Resin Supply. We keep the
            products contractors trust — not discount knockoffs that fail after
            one hot summer.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="border-y border-white/10 bg-zinc-950 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-black text-white md:text-4xl">
            Inside the Store
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {STORE_PHOTOS.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl shadow-black/40"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm font-semibold text-muted-foreground">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/70 p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-forest-light">
              For Contractors
            </p>
            <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
              Stock Up. Prep Right. Lay Clean.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether you need a full flake order for tomorrow&apos;s garage or
              a grinder part before a commercial prep day, this is a
              contractor-first supply stop — not a big-box paint aisle.
            </p>
            <ul className="mt-6 space-y-3">
              {FOR_CONTRACTORS.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm font-semibold text-white/90"
                >
                  <span className="text-forest-light" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/70 p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-forest-light">
              For Homeowners
            </p>
            <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
              See Samples Before You Buy
            </h2>
            <p className="mt-4 text-muted-foreground">
              Not sure which flake blend fits your garage? Want to see how
              metallic epoxy looks in real light? Stop in, walk the floor, and
              leave with a clear picture of what you want installed.
            </p>
            <ul className="mt-6 space-y-3">
              {FOR_HOMEOWNERS.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm font-semibold text-white/90"
                >
                  <span className="text-forest-light" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Prep + lay sections */}
      <section className="border-t border-white/10 bg-black py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            From Concrete Prep to Final Topcoat
          </h2>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-xl font-black text-forest-light">
                Preparing the Concrete
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                A floor is only as good as the prep. We carry diamond grinders,
                vacuums, crack repair materials, and moisture-related products
                so you start with a surface that actually holds a coating. If
                you are new to the trade, ask us what your slab needs before you
                buy — we will point you in the right direction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-forest-light">
                Laying Epoxy &amp; Finishing
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Once the slab is ready, you need the right resin system, mix
                tools, squeegees, rollers, and spiked shoes to move across wet
                coating without ruining the finish. We stock the full chain —
                base coats, flake broadcast, metallic pours, and UV-stable
                topcoats — so you are not piecing a job together from three
                different websites.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-forest-light">
                Flakes &amp; Color Libraries
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Our flake wall and sample boards let you compare full blends side
                by side. Contractors can order for upcoming jobs. Homeowners can
                pick a direction before scheduling an install. Either way, you
                leave knowing exactly what you are getting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map + CTA */}
      <section className="border-t border-white/10 bg-zinc-950 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-white md:text-4xl">
                Come See It In Person
              </h2>
              <p className="mt-4 text-lg font-bold text-white">
                {SITE.store.name}
              </p>
              <p className="mt-1 text-lg text-muted-foreground">
                {SITE.store.fullAddress}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {SITE.hours} · Serving Long Island contractors and homeowners
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="font-black uppercase">
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-black">
                  <Link href="/quote">Get an Install Quote</Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
              <iframe
                src={`https://maps.google.com/maps?q=${SITE.store.mapsQuery}&hl=en&z=16&output=embed`}
                width="100%"
                height="320"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${SITE.store.name} — ${SITE.store.fullAddress}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
