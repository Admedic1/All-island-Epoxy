import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `About ${SITE.legalName} | Epoxy Contractor Long Island`,
  description:
    "Quality-focused concrete coatings across Nassau & Suffolk — owner on every job for over a decade.",
};

export default function AboutPage() {
  return (
    <div className="bg-ink">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            About
          </p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Built on Prep. Proven on Long Island.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {SITE.legalName} installs durable, beautiful concrete coatings for
            homeowners and businesses who want the job done correctly — not the
            cheapest bid on a flyer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-14 text-lg leading-relaxed text-muted-foreground md:px-6 md:py-20">
        <p>
          We&apos;re quality-forward: the owner is on-site for every project,
          equipment is professional-grade, and recommendations are honest — even
          when it means fewer upsells.
        </p>
        <p>
          From garages and basements to commercial bays, our workflow stays the
          same: assess the slab, prep like your coating depends on it (it does),
          then build thickness and clarity with premium materials.
        </p>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-8 text-white">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-amber-glow">
            Promise
          </p>
          <p className="mt-4 text-2xl font-black">
            Owner on every job. Licensed &amp; insured. Local reputation only.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="font-black uppercase">
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-black">
            <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
