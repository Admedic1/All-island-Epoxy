import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { TOWNS } from "@/lib/towns";

export const metadata: Metadata = {
  title: "Epoxy Flooring Long Island NY | We Serve Nassau & Suffolk County",
  description:
    "All Island Epoxy serves towns across Nassau and Suffolk — browse ZIP codes and local landing pages.",
};

export default function ServiceAreasPage() {
  return (
    <div className="bg-ink">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Coverage
          </p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Serving All of Long Island, NY
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Local pages help neighbors find you — each town includes community
            context and service intent for{" "}
            <span className="font-semibold text-white">{SITE.legalName}</span>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387283.9982250702!2d-73.70267894179688!3d40.78535009999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27f9b37eb7041%3A0x9e0e6c2e839e3b61!2sAll%20Island%20Epoxy%20%26%20Polishing!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
            width="100%"
            height="480"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="All Island Epoxy & Polishing service area — Nassau & Suffolk County, Long Island NY"
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOWNS.map((t) => (
            <Link
              key={t.slug}
              href={`/service-areas/${t.slug}`}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/80 p-6 shadow-lg shadow-black/40 transition hover:border-forest-light"
            >
              <p className="text-xs font-black uppercase tracking-widest text-forest-light">
                ZIP {t.zip}
              </p>
              <p className="mt-2 text-xl font-black text-white">{t.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Epoxy floor coating in {t.name}, NY — local crew, owner-led
                installation.
              </p>
              <p className="mt-4 text-sm font-black text-forest-light">
                View local page →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
