import Link from "next/link";

import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services-data";
import { TOWNS } from "@/lib/towns";

const pages = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Free Quote" },
  { href: "/showroom", label: "US Resin Supply" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex flex-col leading-none">
            <span className="font-black text-white">
              All Island <span className="text-forest-light">Epoxy</span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              &amp; Polishing
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {SITE.tagline}. Quality-focused concrete coatings across Nassau &amp;
            Suffolk — owner on every job.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-forest-light"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-white">
            Pages
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="hover:text-forest-light">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="font-bold text-white hover:text-forest-light"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-forest-light"
              >
                {SITE.email}
              </a>
            </li>
            <li>Hours: {SITE.hours}</li>
            <li>{SITE.region}</li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Licensed &amp; Insured | {SITE.region}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-8 text-xs text-muted-foreground md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-2">
            {TOWNS.slice(0, 12).map((t) => (
              <Link
                key={t.slug}
                href={`/service-areas/${t.slug}`}
                className="rounded-full border border-white/10 px-2 py-1 hover:border-forest-light hover:text-white"
              >
                {t.name}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="rounded-full border border-forest/40 px-2 py-1 text-forest-light hover:bg-forest/10"
            >
              All areas →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
