import type { Metadata } from "next";
import Image from "next/image";

import { SITE } from "@/lib/site";
import { ShowroomNotify } from "@/components/ShowroomNotify";

export const metadata: Metadata = {
  title: `Showroom Coming Soon | ${SITE.legalName}`,
  description:
    "Our Long Island showroom is opening soon — get notified to see coating samples and displays.",
};

export default function ShowroomPage() {
  return (
    <div className="relative isolate overflow-hidden bg-ink">
      <Image
        src="/images/metallic-black-white-marble.png"
        alt=""
        fill
        className="object-cover opacity-40"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

      <section className="relative mx-auto max-w-4xl px-4 py-20 text-center md:px-6 md:py-28">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
          Coming soon
        </p>
        <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
          Our Long Island Showroom is Coming Soon
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Visit us in person to compare flake blends, metallic movement, and
          clear-coat finishes — opening soon on Long Island.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-black/50 p-8 shadow-2xl shadow-black/60 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-widest text-white">
            Get notified when we open
          </p>
          <div className="mt-6">
            <ShowroomNotify />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Prefer not to wait? Call{" "}
            <a className="font-bold text-forest-light" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
