import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SITE } from "@/lib/site";
import { TOWNS, getTownBySlug } from "@/lib/towns";
import { SERVICES } from "@/lib/services-data";
import { Button } from "@/components/ui/button";

type Props = { params: { town: string } };

export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const town = getTownBySlug(params.town);
  if (!town) return {};
  return {
    title: `Epoxy Floor Coating in ${town.name}, NY | ${SITE.shortName}`,
    description: `Garage, basement, and commercial epoxy floors in ${town.name}, NY (${town.zip}). Owner on every job. Call ${SITE.phoneDisplay}.`,
  };
}

export default function TownServicePage({ params }: Props) {
  const town = getTownBySlug(params.town);
  if (!town) notFound();

  return (
    <div className="bg-ink">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
            Local
          </p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Epoxy Floor Coating in {town.name}, NY
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            ZIP {town.zip} • Serving homeowners &amp; businesses across Long
            Island with owner-led installs and premium preparation.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="font-black uppercase">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-black">
              <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-14 text-lg leading-relaxed text-muted-foreground md:px-6 md:py-20">
        <p>
          Cracked, dusty concrete steals curb appeal — and it tracks mess into
          your home. In {town.name}, we install durable flake, metallic, and
          commercial-grade systems designed for real Long Island conditions.
        </p>
        <p>
          Whether you want a clean garage, a finished basement, or a commercial
          surface that handles traffic, you get direct communication with the
          owner from estimate through final topcoat.
        </p>

        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-8">
          <h2 className="text-2xl font-black text-white">Popular services</h2>
          <ul className="mt-6 space-y-3">
            {SERVICES.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link
                  className="font-semibold text-amber-glow hover:text-white"
                  href={`/services/${s.slug}`}
                >
                  {s.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
