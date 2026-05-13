import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { ALL_REVIEWS } from "@/lib/reviews-all";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title:
    "Stop Pressure Washing Your Garage Floor | Low-Maintenance Epoxy Floors Long Island",
  description:
    "If you're pressure washing, repainting, or scrubbing your garage floor every year, there's a better option. Epoxy floors on Long Island clean in seconds — no pressure washer needed.",
  keywords: [
    "pressure washing garage floor Long Island",
    "pressure washer garage floor NY",
    "how to clean garage floor Long Island",
    "painting garage floor Long Island",
    "garage floor paint peeling",
    "low maintenance garage floor Long Island",
    "epoxy vs painted garage floor",
    "garage floor cleaning Long Island NY",
    "stop scrubbing garage floor",
    "garage floor concrete dust",
  ].join(", "),
};

const NIGHTMARES = [
  {
    title: "Pressure washing every spring",
    body: "You lug out the pressure washer, soak the driveway, fight the hose around the car, blast oil stains that never fully come out, and spend two hours doing what should take ten minutes. And the concrete still looks dull when it dries.",
    label: "Annual ritual",
    accent: "border-forest/40 bg-forest/20",
    accentText: "text-forest-light",
  },
  {
    title: "Painted floors that peel within a year",
    body: "You rolled on two coats of Rust-Oleum on a Saturday, it looked great for three months, then hot tires pulled the whole thing up in sheets. Now you're scraping peeled paint and the floor looks worse than before you started.",
    label: "DIY regret",
    accent: "border-orange-600/40 bg-orange-950/20",
    accentText: "text-orange-400",
  },
  {
    title: "Oil stains that never come out",
    body: "You've tried dish soap, degreasers, kitty litter, and that orange spray. The stain lightens, then comes back when the sun hits it. The concrete absorbed it years ago — it's not coming out.",
    label: "Permanent stain",
    accent: "border-forest/40 bg-forest/20",
    accentText: "text-forest-light",
  },
  {
    title: "Concrete dust on everything",
    body: "Bare concrete sheds dust constantly — on your car, your tools, your storage bins. It coats every horizontal surface in the garage. You clean it, it comes back. It comes from the floor.",
    label: "The real culprit",
    accent: "border-zinc-600/40 bg-zinc-900/40",
    accentText: "text-zinc-400",
  },
  {
    title: "Salt and winter damage",
    body: "Every Long Island winter, road salt gets dragged in, sits on the concrete, and spalls it. The surface pits, flakes, and gets rougher every year — trapping more dirt, making cleaning harder.",
    label: "Winter damage",
    accent: "border-blue-600/40 bg-blue-950/20",
    accentText: "text-blue-400",
  },
  {
    title: "The garage nobody wants to be in",
    body: "A dirty, crumbling floor makes the whole space feel like a utility closet. Tools end up wherever they land, storage piles up, and nobody wants to spend time in there — not even you.",
    label: "Wasted space",
    accent: "border-zinc-600/40 bg-zinc-900/40",
    accentText: "text-zinc-400",
  },
];

const CLEAN_STEPS = [
  {
    step: "01",
    action: "Sweep loose debris",
    time: "30 seconds",
    tool: "Push broom",
  },
  {
    step: "02",
    action: "Spray with a garden hose or wet mop",
    time: "1 minute",
    tool: "Hose or mop",
  },
  {
    step: "03",
    action: "Squeegee water toward drain or out the door",
    time: "2 minutes",
    tool: "Floor squeegee",
  },
  {
    step: "04",
    action: "Done — no residue, no scrubbing, no chemicals",
    time: "Total: ~3–5 min",
    tool: "",
  },
];

const COMPARISON_ROWS = [
  {
    category: "Daily cleanup",
    bare: "Sweep up concrete dust (it just comes back)",
    epoxy: "Wipe or blow — nothing embeds in a sealed surface",
  },
  {
    category: "Oil spill",
    bare: "Absorbed permanently. Degrease repeatedly, still stains.",
    epoxy: "Wipe up with a rag. No absorption, no trace.",
  },
  {
    category: "Salt and road grime",
    bare: "Spalls and pits the surface every winter",
    epoxy: "Rinse off. UV-stable topcoat resists chloride damage.",
  },
  {
    category: "Deep cleaning",
    bare: "Pressure washer, degreaser, wait, repeat. Annual project.",
    epoxy: "Garden hose and a squeegee. 5 minutes, done.",
  },
  {
    category: "Hot tire marks",
    bare: "Rubber bonds to concrete, near-impossible to remove",
    epoxy: "Polyaspartic topcoat resists tire pickup. Wipes clean.",
  },
  {
    category: "Painting / recoating",
    bare: "Re-paint every 1–2 years as paint peels from the slab",
    epoxy: "No re-painting. Ever. System lasts 10–20 years.",
  },
  {
    category: "Dust generation",
    bare: "Constant. Coats your car, tools, storage, everything.",
    epoxy: "Zero. Sealed surface generates no dust.",
  },
  {
    category: "Appearance over time",
    bare: "Gets worse every year — pitting, staining, spalling",
    epoxy: "Looks the same as day one with basic upkeep",
  },
];

const TIDY_BENEFITS = [
  {
    heading: "You can actually see the floor",
    body: "A bright, clean floor changes the whole feel of the garage. You stop treating it like a dumping ground because it looks too good to trash.",
  },
  {
    heading: "Dust disappears",
    body: "No more wiping your car down after it sat in the garage overnight. No more gray film on every surface. The source of the dust is sealed.",
  },
  {
    heading: "The space gets organized",
    body: "Long Island homeowners consistently report that a clean floor changes how they use the garage. They hang tools. They add shelving. They park the car in it again.",
  },
  {
    heading: "Spills stop being emergencies",
    body: "Oil change drips, paint spills, soccer cleats dragged in — none of it is a problem on a sealed surface. Everything wipes up.",
  },
  {
    heading: "The whole house tracks in less",
    body: "Concrete dust from the garage ends up in the house. Seal the floor, and the first thing you notice is how much cleaner the mudroom and entryway stay.",
  },
  {
    heading: "It holds its value",
    body: "Real estate agents on Long Island consistently call out a finished garage floor as a selling point. Buyers notice the difference immediately.",
  },
];

const MAINTENANCE_FAQS = [
  {
    q: "Can I use a pressure washer on an epoxy floor?",
    a: "You can, but you don't need to. A garden hose and squeegee handles everything. If you want to power wash, low pressure is fine — high-pressure direct jets over time can stress the topcoat seams at the walls.",
  },
  {
    q: "What cleaning products are safe on epoxy?",
    a: "Almost anything mild — dish soap, Simple Green, or just water. Avoid highly acidic or alkaline cleaners like bleach concentrates, but household cleaners are fine. We give you a care sheet at completion.",
  },
  {
    q: "How often does it actually need to be cleaned?",
    a: "Most homeowners sweep or blow it out weekly and do a wet mop monthly. That's it. No annual pressure washing, no repainting, no degreasing marathons.",
  },
  {
    q: "Will tire marks show up over time?",
    a: "Not on a properly topped system. Bargain coatings use inferior topcoats that fail this test. The polyaspartic topcoat we use is specifically rated for hot tire contact.",
  },
  {
    q: "What happens if something heavy scratches it?",
    a: "The topcoat handles most daily abuse without issue. Deep scratches from dragging metal across the floor can mark the surface but don't compromise the coating's function. We can touch up if needed.",
  },
  {
    q: "Does it get slippery when wet?",
    a: "Less than bare concrete, actually — the chip texture adds grip. We can also add anti-slip aggregate to the topcoat for high-wet-traffic areas like near a side door.",
  },
];

// Pick reviews that mention cleaning, maintenance, or ease of use
const MAINTENANCE_REVIEW_IDS = ["2", "10", "5", "7", "19"];
const maintenanceReviews = ALL_REVIEWS.filter((r) =>
  MAINTENANCE_REVIEW_IDS.includes(r.id),
);

function avatarColor(name: string) {
  const palette = [
    { bg: "bg-forest/30", text: "text-forest-light" },
    { bg: "bg-forest/20", text: "text-forest-light" },
    { bg: "bg-forest/30", text: "text-forest-light" },
    { bg: "bg-sky-900/30", text: "text-sky-400" },
  ];
  return palette[name.charCodeAt(0) % palette.length];
}

export default function GarageFloorMaintenancePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Clean an Epoxy Garage Floor",
    description:
      "Cleaning an epoxy garage floor takes about 3–5 minutes with no pressure washer required.",
    totalTime: "PT5M",
    step: CLEAN_STEPS.filter((s) => s.tool).map((s) => ({
      "@type": "HowToStep",
      name: s.action,
      text: `${s.action} — ${s.time}${s.tool ? ` (${s.tool})` : ""}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MAINTENANCE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="bg-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Maintenance
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Stop Pressure Washing Your Garage Floor
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            If you&apos;re hauling out a pressure washer every spring, scraping
            peeled paint off your slab, or watching oil stains spread across bare
            concrete — you&apos;re doing maintenance that doesn&apos;t need to
            exist.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-white/80">
            An epoxy floor on Long Island cleans in 3–5 minutes with a hose and
            a squeegee. That&apos;s it.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="font-black uppercase">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-black">
              <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Serving Nassau &amp; Suffolk County. Owner on every job.
          </p>
        </div>
      </section>

      {/* ── The nightmares ── */}
      <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
              Sound familiar?
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              The Bare Concrete Maintenance Nightmare
            </h2>
            <p className="mt-4 text-muted-foreground">
              Long Island homeowners spend more hours maintaining a bare concrete
              garage floor than they should spend in a lifetime. Here&apos;s what
              that actually looks like.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {NIGHTMARES.map((n) => (
              <div
                key={n.title}
                className={`rounded-2xl border p-6 ${n.accent}`}
              >
                <span
                  className={`text-[10px] font-black uppercase tracking-widest ${n.accentText}`}
                >
                  {n.label}
                </span>
                <h3 className="mt-2 text-lg font-black text-white">{n.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {n.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-lg font-black text-white">
            None of this is necessary.{" "}
            <Link href="/quote" className="text-forest-light underline hover:no-underline">
              One installation ends all of it.
            </Link>
          </p>
        </div>
      </section>

      {/* ── Head-to-head comparison ── */}
      <section className="border-b border-white/10 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
              The Difference
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Bare Concrete vs. Epoxy — Side by Side
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            {/* Header row */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-zinc-900">
              <div className="px-4 py-3 text-xs font-black uppercase tracking-widest text-muted-foreground" />
              <div className="border-l border-white/10 px-4 py-3 text-xs font-black uppercase tracking-widest text-forest-light">
                Bare / Painted Concrete
              </div>
              <div className="border-l border-white/10 px-4 py-3 text-xs font-black uppercase tracking-widest text-forest-light">
                Epoxy Floor
              </div>
            </div>

            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.category}
                className={`grid grid-cols-3 border-b border-white/10 last:border-b-0 ${i % 2 === 0 ? "bg-zinc-950" : "bg-black"}`}
              >
                <div className="px-4 py-4 text-sm font-black text-white/80">
                  {row.category}
                </div>
                <div className="flex items-start gap-2 border-l border-white/10 px-4 py-4 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex-shrink-0 text-forest-light">✗</span>
                  {row.bare}
                </div>
                <div className="flex items-start gap-2 border-l border-white/10 px-4 py-4 text-sm text-white/90">
                  <span className="mt-0.5 flex-shrink-0 text-forest-light">✓</span>
                  {row.epoxy}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to clean an epoxy floor (HowTo schema) ── */}
      <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
                The Routine
              </p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                How to Clean an Epoxy Garage Floor
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                No pressure washer. No degreaser. No drying time. No hauling
                equipment in and out. The entire cleaning routine for an epoxy
                floor fits in a lunch break you&apos;ll never actually need to take.
              </p>
              <p className="mt-4 text-muted-foreground">
                Most Long Island homeowners clean their epoxy floor in under five
                minutes. Weekly sweep, monthly rinse. That&apos;s the entire
                maintenance program.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {CLEAN_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="flex items-center gap-5 rounded-xl border border-white/10 bg-black/50 px-5 py-4"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-forest/20 text-sm font-black text-forest-light ring-2 ring-forest/30">
                    {s.step}
                  </span>
                  <div className="flex-1">
                    <p className="font-black text-white">{s.action}</p>
                    {s.tool && (
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Tool: {s.tool}
                      </p>
                    )}
                  </div>
                  <span className="flex-shrink-0 rounded-full bg-zinc-800 px-3 py-1 text-xs font-black text-forest-light">
                    {s.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The tidiness transformation ── */}
      <section className="border-b border-white/10 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
              The Side Effect Nobody Warns You About
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Your Garage Gets Cleaner. Then It Gets Organized.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Long Island homeowners don&apos;t just report easier cleaning — they
              report that the garage itself transforms into a space they actually
              use.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TIDY_BENEFITS.map((b) => (
              <div
                key={b.heading}
                className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest/20 text-forest-light ring-1 ring-forest/30">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-black text-white">{b.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          {/* Homeowner quote pull */}
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/10 bg-zinc-950 p-8 text-center">
            <p className="text-xl font-black italic leading-relaxed text-white">
              &ldquo;Kids bikes, salt in winter, hot tires — still cleans up fast.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-muted-foreground">
              Ashley D. — Deer Park, NY
            </p>
          </div>
        </div>
      </section>

      {/* ── Reviews focused on maintenance/ease ── */}
      <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
              Reviews
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              What Long Island Homeowners Say About Maintenance
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {maintenanceReviews.map((r) => {
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
                  <div className="mt-3 text-forest-light" aria-label="5 stars">
                    ★★★★★
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/90">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-b border-white/10 bg-black py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Epoxy Floor Maintenance Questions
            </h2>
          </div>
          <div className="mt-12 divide-y divide-white/10">
            {MAINTENANCE_FAQS.map((faq) => (
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

      {/* ── Internal link cluster (SEO) ── */}
      <section className="border-b border-white/10 bg-zinc-950 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
            Related services
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { href: "/floors/garage", label: "Garage Floor Coatings" },
              { href: "/floors/basement", label: "Basement Floor Coatings" },
              { href: "/services/flake-epoxy", label: "Flake / Chip Epoxy" },
              { href: "/services/polyaspartic-coatings", label: "Polyaspartic Topcoats" },
              { href: "/services/grind-and-seal", label: "Grind & Seal" },
              { href: "/gallery", label: "See Project Photos" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm font-semibold text-white/80 hover:border-forest/40 hover:text-forest-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-forest via-forest-dark to-forest py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Put the Pressure Washer Away — For Good
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            One installation. No more repainting, pressure washing, scrubbing, or
            dusting. Get a free estimate from the owner — not a salesperson.
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
          <p className="mt-4 text-sm text-white/70">
            Serving Nassau &amp; Suffolk County, Long Island, NY
          </p>
        </div>
      </section>
    </div>
  );
}
