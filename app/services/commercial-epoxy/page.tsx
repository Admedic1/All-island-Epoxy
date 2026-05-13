import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { NASSAU_TOWNS, SUFFOLK_TOWNS } from "@/lib/towns";
import { MotionSection } from "@/components/MotionSection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Commercial Epoxy Flooring Long Island NY | All Island Epoxy",
  description:
    "Commercial epoxy floor coating for warehouses, auto shops, firehouses, restaurants, police departments, dealerships, gyms, and more across Nassau & Suffolk County. Owner on every job. (631) 636-5667.",
  keywords: [
    "commercial epoxy flooring Long Island",
    "epoxy flooring firehouse Long Island",
    "epoxy flooring police department NY",
    "restaurant epoxy flooring Long Island",
    "auto dealership epoxy floor coating",
    "warehouse epoxy flooring Long Island",
    "commercial floor coating Nassau County",
    "commercial floor coating Suffolk County",
    "commercial concrete coating Long Island NY",
  ].join(", "),
};

type FacilityCategory = {
  heading: string;
  accent: string;
  description: string;
  types: string[];
};

const FACILITY_CATEGORIES: FacilityCategory[] = [
  {
    heading: "Emergency Services & Government",
    accent: "text-red-400",
    description:
      "Firehouses, police departments, and government facilities take serious punishment. Apparatus bays need seamless coatings that resist oil, fuel, standing water, and heavy equipment loads — and drain quickly for hosing down. We schedule installs around shift rotations and apparatus deployment.",
    types: [
      "Fire stations & apparatus bays",
      "Police departments & evidence rooms",
      "EMS & ambulance stations",
      "Municipal public works garages",
      "Coast Guard & marine facilities",
      "Military & federal facilities",
      "Correctional facilities",
      "Town & county maintenance yards",
    ],
  },
  {
    heading: "Automotive & Transportation",
    accent: "text-amber-glow",
    description:
      "Auto facilities need coatings that shrug off hot tires, oil, transmission fluid, brake cleaner, and power-washing. We spec chemical-resistant systems designed for real shop abuse — not showroom aesthetics. Long Island dealerships and independent shops trust us for consistent results and minimal downtime.",
    types: [
      "New & used car dealerships",
      "Auto service & repair bays",
      "Auto body & collision shops",
      "Motorcycle & powersports dealers",
      "Boat & marine dealers",
      "RV & trailer dealerships",
      "Car washes & detail centers",
      "Tire shops & quick lube centers",
      "Fleet vehicle maintenance garages",
      "Bus & truck depots",
      "Taxi & rideshare dispatch centers",
      "Towing & recovery yards",
    ],
  },
  {
    heading: "Food, Beverage & Processing",
    accent: "text-forest-light",
    description:
      "Seamless, slip-resistant coatings are a health department requirement, not an upgrade, in commercial food environments. No grout lines to trap bacteria. Chemical-resistant systems that handle caustic cleaners, hot water washdowns, and grease daily. We install with minimal disruption during off-hours.",
    types: [
      "Full-service restaurants",
      "Fast food & quick service restaurants",
      "Commercial kitchens & prep areas",
      "Pizzerias & bakeries",
      "Food processing & packaging plants",
      "Grocery stores & supermarkets",
      "Butcher shops & fish markets",
      "Breweries & craft beer facilities",
      "Wineries & distilleries",
      "Catering facilities & commissaries",
      "Cold storage & refrigerated rooms",
      "Cafeterias & institutional kitchens",
    ],
  },
  {
    heading: "Healthcare & Life Sciences",
    accent: "text-sky-400",
    description:
      "Healthcare environments demand seamless, antimicrobial-friendly floors that withstand rolling equipment, chemical disinfectants, and strict hygiene protocols. Low-VOC systems are available for occupied or sensitive spaces. We schedule quiet installs after hours to protect patient care.",
    types: [
      "Medical offices & clinics",
      "Dental offices & oral surgery centers",
      "Urgent care & walk-in facilities",
      "Hospitals & surgical centers",
      "Physical therapy & rehab facilities",
      "Veterinary clinics & animal hospitals",
      "Pharmacies & compounding labs",
      "Medical device & pharmaceutical manufacturing",
      "Blood banks & lab facilities",
      "Mental health & counseling offices",
    ],
  },
  {
    heading: "Industrial, Warehouse & Manufacturing",
    accent: "text-amber-glow",
    description:
      "High-traffic industrial environments require systems engineered for forklift traffic, pallet drops, chemical spills, and 24/7 operation. We bring proper diamond grinding equipment to open the concrete and ensure commercial-grade adhesion — no shortcuts that lead to delamination.",
    types: [
      "Warehouses & distribution centers",
      "Light & heavy manufacturing plants",
      "Printing & publishing facilities",
      "Metal fabrication shops",
      "Woodworking & millwork shops",
      "Electronics & tech assembly",
      "Chemical storage & handling areas",
      "Loading docks & staging areas",
      "Cold chain & refrigerated warehouses",
      "Fulfillment & e-commerce centers",
      "Self-storage facilities",
      "Airport ground support hangars",
    ],
  },
  {
    heading: "Retail, Hospitality & Entertainment",
    accent: "text-forest-light",
    description:
      "Retail and hospitality floors need to look polished and perform reliably under constant foot traffic, spills, and daily cleaning. We match finish to brand — from high-gloss showroom floors to matte industrial-chic looks for boutique retail.",
    types: [
      "Retail stores & boutiques",
      "Shopping center common areas",
      "Luxury showrooms",
      "Hotels & motels",
      "Banquet halls & event venues",
      "Nightclubs & bars",
      "Movie theaters & entertainment venues",
      "Bowling alleys",
      "Escape rooms & family entertainment",
      "Nail salons & spas",
      "Barbershops & hair salons",
      "Laundromats",
    ],
  },
  {
    heading: "Fitness, Recreation & Sports",
    accent: "text-red-400",
    description:
      "Gym floors need to handle dropped weights, rubber-soled traffic, heavy equipment footprints, and daily sweating without bubbling, peeling, or becoming slippery. Seamless systems also simplify cleaning and eliminate the bacteria-trapping seams of rubber tile.",
    types: [
      "Gyms & fitness centers",
      "CrossFit & functional training facilities",
      "MMA & martial arts studios",
      "Yoga & Pilates studios",
      "Dance studios",
      "School & collegiate athletics facilities",
      "Indoor sports courts",
      "Swimming pool decks & locker rooms",
      "Climbing gyms",
      "Sports training centers",
    ],
  },
  {
    heading: "Education & Childcare",
    accent: "text-sky-400",
    description:
      "Schools, daycares, and universities need safe, non-toxic, easy-to-clean floors that hold up for years without requiring constant refinishing. Low-VOC systems available. We work during school breaks and summer closures to minimize disruption.",
    types: [
      "Elementary & middle schools",
      "High schools",
      "Colleges & universities",
      "Daycare & childcare centers",
      "Pre-K & nursery schools",
      "Vocational & trade schools",
      "School cafeterias & kitchens",
      "Gymnasium floors & weight rooms",
      "Science labs & workshops",
      "Libraries & community learning centers",
    ],
  },
  {
    heading: "Professional Services & Office",
    accent: "text-forest-light",
    description:
      "Commercial office environments want a clean, professional look with low maintenance and quiet installs. We coordinate around your business hours — nights and weekends if needed — to deliver finished floors without interrupting your operation.",
    types: [
      "Corporate office buildings",
      "Law firms & professional offices",
      "Real estate & insurance offices",
      "Banks & credit unions",
      "Accounting & financial services",
      "Architecture & design studios",
      "Co-working & shared office spaces",
      "Data centers & server rooms",
      "Call centers",
      "Government office buildings",
    ],
  },
];

const COMMERCIAL_FAQS = [
  {
    q: "Do you work around business hours?",
    a: "Yes. We schedule around your operation — nights, weekends, and phased zones. We lock in access and curing windows before we start, not after.",
  },
  {
    q: "Can you handle large commercial square footage?",
    a: "Yes. We bring the right crew and equipment for the job size. Large footprints are broken into staging zones to maintain consistent quality across every section.",
  },
  {
    q: "What coatings are best for heavy industrial or firehouse floors?",
    a: "High-build broadcast flake or solid-color epoxy systems with an industrial polyaspartic topcoat are the standard for heavy-use commercial environments. We spec based on your load, chemical exposure, and return-to-service requirements.",
  },
  {
    q: "Do you handle concrete repairs before coating?",
    a: "Yes. Crack filling, joint stabilization, and slab repairs are part of our prep process. Coating over damaged concrete is how floors fail — we address it first.",
  },
  {
    q: "Is your coating safe for kitchens and food-prep areas?",
    a: "Yes. We use food-service-grade seamless systems that meet health department standards. No grout lines to trap bacteria. Full documentation available on request.",
  },
  {
    q: "Can you match an existing floor system?",
    a: "We can evaluate your current system and either match it or recommend a better upgrade. We'll be honest if a change would serve your space better.",
  },
  {
    q: "Do you provide a warranty?",
    a: "Yes. Warranty terms depend on the system and prep condition. We document this before work starts — no surprises.",
  },
];

export default function CommercialEpoxyPage() {
  const allTowns = [...NASSAU_TOWNS, ...SUFFOLK_TOWNS];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Epoxy Floor Coating — Long Island, NY",
    description:
      "Professional commercial epoxy flooring for warehouses, auto shops, firehouses, restaurants, police departments, dealerships, gyms, and offices across Nassau and Suffolk County, Long Island.",
    provider: {
      "@type": "LocalBusiness",
      name: SITE.legalName,
      telephone: SITE.phoneTel,
      email: SITE.email,
      areaServed: allTowns.map((t) => ({
        "@type": "City",
        name: t.name,
        addressRegion: "NY",
        postalCode: t.zip,
      })),
    },
    areaServed: "Nassau County and Suffolk County, Long Island, NY",
    serviceType: "Commercial Epoxy Floor Coating",
  };

  return (
    <div className="bg-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
            Commercial Services
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Commercial Epoxy Flooring Long Island, NY
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            From firehouses and police departments to restaurants, dealerships,
            warehouses, and gyms — we install industrial-grade floor coatings
            across Nassau and Suffolk County with the owner on every job.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="font-black uppercase">
              <Link href="/quote">Get a Commercial Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-black">
              <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            After-hours and weekend scheduling available. We work around your operation.
          </p>
        </div>
      </section>

      {/* ── Real job photos ── */}
      <section className="border-b border-white/10 bg-black/60">
        <div className="mx-auto grid max-w-7xl gap-1 md:grid-cols-2">
          {[
            {
              src: "/images/commercial-dealership.png",
              alt: "Auto dealership service bay — full-broadcast flake epoxy, Long Island NY",
              label: "Auto Dealership · Nassau County",
            },
            {
              src: "/images/commercial-warehouse.png",
              alt: "Commercial warehouse floor with gray solid epoxy and high-gloss topcoat, Long Island NY",
              label: "Commercial Facility · Suffolk County",
            },
          ].map((photo) => (
            <div key={photo.src} className="group relative aspect-[16/9] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-semibold text-white/90">
                {photo.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick-scan business type index ── */}
      <MotionSection className="border-b border-white/10 bg-zinc-950 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-center text-xs font-black uppercase tracking-[0.35em] text-muted-foreground">
            We work with every type of commercial facility
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {FACILITY_CATEGORIES.map((cat) => (
              <a
                key={cat.heading}
                href={`#${cat.heading.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-sm font-semibold text-white/80 transition-colors hover:border-forest/40 hover:text-amber-glow"
              >
                {cat.heading}
              </a>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Facility categories (main SEO content) ── */}
      {FACILITY_CATEGORIES.map((cat, i) => (
        <MotionSection
          key={cat.heading}
          className={`border-b border-white/10 py-14 md:py-20 ${
            i % 2 === 0 ? "bg-black" : "bg-zinc-950"
          }`}
        >
          <span
            id={cat.heading.toLowerCase().replace(/[^a-z]+/g, "-")}
            className="sr-only"
            aria-hidden
          />
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              {/* Text */}
              <div>
                <p className={`text-xs font-black uppercase tracking-[0.35em] ${cat.accent}`}>
                  Commercial
                </p>
                <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
                  {cat.heading}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <div className="mt-6">
                  <Button asChild size="sm" className="font-black uppercase">
                    <Link href="/quote">Get a Quote</Link>
                  </Button>
                </div>
              </div>

              {/* Facility type list */}
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {cat.types.map((type) => (
                  <li
                    key={type}
                    className="flex items-start gap-2 rounded-lg border border-white/8 bg-zinc-900/50 px-4 py-3 text-sm font-semibold text-white/90"
                  >
                    <span className="mt-0.5 flex-shrink-0 font-black text-forest-light">
                      ✓
                    </span>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionSection>
      ))}

      {/* ── Nassau County service areas ── */}
      <MotionSection className="border-b border-white/10 bg-black py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
              Nassau County
            </p>
            <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
              Commercial Epoxy Flooring in Nassau County, NY
            </h2>
            <p className="mt-4 text-muted-foreground">
              From retail corridors in Garden City and Hicksville to industrial
              facilities in Farmingdale and Westbury. Click any town for local
              service details.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {NASSAU_TOWNS.map((t) => (
              <Link
                key={t.slug}
                href={`/service-areas/${t.slug}`}
                className="group rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 transition-colors hover:border-forest/40 hover:bg-zinc-900"
              >
                <p className="font-bold text-white group-hover:text-amber-glow">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  ZIP {t.zip}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Suffolk County service areas ── */}
      <MotionSection className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
              Suffolk County
            </p>
            <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
              Commercial Epoxy Flooring in Suffolk County, NY
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hauppauge Industrial Park, Melville business corridor, Bohemia,
              Islandia, Ronkonkoma, and throughout eastern Suffolk. One crew, one
              owner, covering all of it.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {SUFFOLK_TOWNS.map((t) => (
              <Link
                key={t.slug}
                href={`/service-areas/${t.slug}`}
                className="group rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 transition-colors hover:border-forest/40 hover:bg-zinc-900"
              >
                <p className="font-bold text-white group-hover:text-amber-glow">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  ZIP {t.zip}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Why us ── */}
      <MotionSection className="border-b border-white/10 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
                Why Us
              </p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                Commercial Epoxy Done Right — Not Just Done Fast
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Large commercial jobs fail because contractors skip prep, rush curing,
                or hand off to crews that don&apos;t care. At All Island Epoxy, the
                owner manages your job directly — from prep through final topcoat —
                across Nassau and Suffolk County.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                ["Owner on every job", "Not a franchise sub-crew. The owner is present and accountable on your site."],
                ["Industrial-grade systems", "Specified for your traffic load and chemical exposure — not whatever's cheapest."],
                ["Scheduling discipline", "Access windows, curing timelines, and return-to-service confirmed in writing before work starts."],
                ["Concrete repair included", "Cracks, spalls, and joints addressed before coating — not painted over."],
                ["Dust control + cleanup", "Professional grinding equipment with dust containment. We leave the site clean."],
                ["Licensed & fully insured", "Covered for commercial work across all of Long Island."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 flex-shrink-0 font-black text-forest-light">✓</span>
                  <div>
                    <p className="font-black text-white">{title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MotionSection>

      {/* ── FAQ ── */}
      <MotionSection className="border-b border-white/10 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-glow">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Commercial Epoxy Questions Answered
            </h2>
          </div>

          <div className="mt-12 divide-y divide-white/10">
            {COMMERCIAL_FAQS.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-lg font-black text-white">{faq.q}</h3>
                <p className="mt-2 text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-red-700 via-forest-dark to-forest py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-white/80">
            Get Started
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Request a Commercial Epoxy Quote
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Share your facility type, square footage, and location. We&apos;ll
            respond with clear recommendations and a real number — no bait-and-switch.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white font-black uppercase text-black hover:bg-white/90"
            >
              <Link href="/quote">Start Your Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-black">
              <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Back nav ── */}
      <div className="bg-black px-4 py-6 md:px-6">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="text-sm font-semibold text-muted-foreground hover:text-white"
          >
            ← All services
          </Link>
        </div>
      </div>
    </div>
  );
}
