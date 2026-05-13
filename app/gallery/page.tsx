import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BEFORE_AFTER_PAIRS } from "@/lib/before-after-pairs";
import { Button } from "@/components/ui/button";

const SITE_NAME = "All Island Epoxy & Polishing";

export const metadata: Metadata = {
  title: `Epoxy Floor Gallery | ${SITE_NAME}`,
  description:
    "Before and after epoxy flooring transformations across Long Island homes and businesses.",
};

const tiles = BEFORE_AFTER_PAIRS.map((p) => ({
  before: p.beforeSrc,
  after: p.afterSrc,
  beforeAlt: p.beforeAlt,
  afterAlt: p.afterAlt,
}));

export default function GalleryPage() {
  return (
    <div className="bg-ink">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Gallery
          </p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Transformations Across Nassau &amp; Suffolk
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Before &amp; after pairs from real Long Island jobs — more uploads
            coming soon.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild size="lg" className="font-black uppercase">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
          {tiles.map((t, idx) => (
            <div
              key={idx}
              className="break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-black/40"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={t.before}
                  alt={t.beforeAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                  loading={idx === 0 ? "eager" : "lazy"}
                  priority={idx === 0}
                />
                <span className="absolute left-3 top-3 rounded-md bg-forest px-2 py-1 text-[11px] font-black uppercase tracking-wide text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/3] border-t border-white/10">
                <Image
                  src={t.after}
                  alt={t.afterAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                <span className="absolute left-3 top-3 rounded-md bg-forest px-2 py-1 text-[11px] font-black uppercase tracking-wide text-white">
                  After
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
