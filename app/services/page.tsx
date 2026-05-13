import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SERVICES } from "@/lib/services-data";
import { getServiceCover } from "@/lib/service-images";
import { MotionSection } from "@/components/MotionSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Epoxy Flooring Services | All Island Epoxy Long Island",
  description:
    "Garage flake epoxy, metallic epoxy, grind & seal, commercial systems, and polyaspartic coatings across Long Island.",
};

export default function ServicesPage() {
  return (
    <div className="bg-ink">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Concrete Coating Systems Built for Long Island
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Pick a service to see details, ideal use cases, and what great prep
            looks like before a single drop is installed.
          </p>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => {
            const cover = getServiceCover(service.slug);
            return (
            <Card
              key={service.slug}
              className="overflow-hidden border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/80"
            >
              <div className="relative aspect-[16/10] border-b border-white/10">
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  className={`object-cover ${cover.isPhoto ? "" : "opacity-90"}`}
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-between pb-8">
                <Button asChild variant="outline">
                  <Link href={`/services/${service.slug}`}>View details</Link>
                </Button>
                <Button asChild>
                  <Link href="/quote">Get a quote</Link>
                </Button>
              </CardFooter>
            </Card>
            );
          })}
        </div>
      </MotionSection>
    </div>
  );
}
