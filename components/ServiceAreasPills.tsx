import Link from "next/link";

import { TOWNS } from "@/lib/towns";

export function ServiceAreasPills() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
          Coverage
        </p>
        <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
          Proudly Serving Long Island, NY
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tap a town to view local epoxy floor coating details — built for local
          SEO and real homeowners searching nearby.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {TOWNS.map((t) => (
          <Link
            key={t.slug}
            href={`/service-areas/${t.slug}`}
            className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm font-semibold text-white hover:border-forest-light hover:text-amber-glow"
          >
            {t.name}
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/service-areas"
          className="text-sm font-black uppercase tracking-wide text-forest-light hover:text-amber-glow"
        >
          View all ZIP codes & towns →
        </Link>
      </div>
    </div>
  );
}
