import type { Metadata } from "next";

import { SITE } from "@/lib/site";
import { ReviewsDirectory } from "@/components/ReviewsDirectory";

export const metadata: Metadata = {
  title: `Customer Reviews | ${SITE.legalName}`,
  description:
    "Read verified-style reviews from Long Island homeowners and businesses.",
};

export default function ReviewsPage() {
  return (
    <div className="bg-ink">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-red-950/40 to-black py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Reviews
          </p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            5.0 ★ — Rated #1 Epoxy Contractor on Long Island
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Heavy proof beats clever slogans — browse real homeowner language,
            filter by job type, and see why neighbors hire All Island Epoxy.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <ReviewsDirectory />
      </section>
    </div>
  );
}
