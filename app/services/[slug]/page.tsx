import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SERVICES, getServiceBySlug } from "@/lib/services-data";
import { getServiceCover } from "@/lib/service-images";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | All Island Epoxy Long Island`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const cover = getServiceCover(service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} — ${SITE.legalName}`,
    areaServed: SITE.region,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.legalName,
      telephone: SITE.phoneTel,
    },
  };

  return (
    <article className="bg-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
            Service
          </p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {service.shortDescription}
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

      {cover.isPhoto && cover.gallery && cover.gallery.length > 1 ? (
        <section className="border-b border-white/10 bg-black/40">
          <div className="mx-auto grid max-w-7xl gap-1 md:grid-cols-2">
            {cover.gallery.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white/90">
                  {photo.alt}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : cover.isPhoto ? (
        <section className="border-b border-white/10 bg-black/40">
          <div className="relative mx-auto aspect-[21/9] max-w-6xl md:aspect-[2/1]">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-4xl space-y-10 px-4 py-14 md:px-6 md:py-20">
        {service.description.map((p) => (
          <p key={p} className="text-lg leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}

        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-8">
          <h2 className="text-2xl font-black text-white">What you can expect</h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            {service.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 font-black text-forest-light">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="secondary">
            <Link href="/services">All services</Link>
          </Button>
          <Button asChild>
            <Link href="/gallery">See gallery</Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
