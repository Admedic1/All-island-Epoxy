import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const truck = "/images/branded-truck.png";

type Props = {
  variant?: "green" | "dark";
  title: string;
  subtitle?: string;
};

export function CTABanner({ variant = "green", title, subtitle }: Props) {
  const bg =
    variant === "green"
      ? "bg-gradient-to-r from-forest-dark via-forest to-forest-light"
      : "bg-gradient-to-r from-black via-zinc-950 to-black";

  return (
    <section className={`relative overflow-hidden border-y border-white/10 ${bg}`}>
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <Image
          src="/images/branded-truck.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-3xl font-black text-white md:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mt-4 text-lg text-white/85">{subtitle}</p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-white font-black uppercase text-black hover:bg-white/90"
            >
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-black">
              <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-[16/10] w-full max-w-lg">
          <Image
            src={truck}
            alt="All Island Epoxy & Polishing branded truck"
            fill
            className="rounded-2xl object-cover shadow-2xl shadow-black/60 ring-1 ring-white/10"
            sizes="(max-width:768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
