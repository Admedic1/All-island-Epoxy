import Image from "next/image";
import { BadgeCheck, Clock3, Hammer, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "Owner On Every Job",
    body: "You talk to the owner. He shows up. He does the work. No strangers on your property.",
    Icon: BadgeCheck,
  },
  {
    title: "10+ Years on Long Island",
    body: "We&apos;ve coated hundreds of floors in Nassau and Suffolk. We know what works here.",
    Icon: Hammer,
  },
  {
    title: "Clear Schedule Up Front",
    body: "We tell you how long your job will take before we start. Prep, coats, and cure time depend on your floor.",
    Icon: Clock3,
  },
  {
    title: "Licensed & Insured",
    body: "We carry full coverage. If anything goes wrong, you&apos;re protected. Simple as that.",
    Icon: ShieldCheck,
  },
];

export function TrustDifferentiators() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
          Trust
        </p>
        <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
          Why Homeowners Choose Us
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/70 p-6 shadow-xl shadow-black/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/15 text-forest-light ring-2 ring-forest/30">
              <item.Icon className="h-6 w-6" aria-hidden />
            </div>
            <p className="mt-4 text-lg font-black text-white">{item.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>

      {/* Supplier partner badge */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">
          Authorized Supplier
        </p>
        <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/20 bg-black shadow-2xl shadow-black/60 ring-2 ring-white/10 md:h-40 md:w-40">
          <Image
            src="/images/us-resin-supply-logo.png"
            alt="U.S. Resin Supply & Manufacturing authorized supplier"
            fill
            sizes="(max-width: 768px) 144px, 160px"
            className="object-contain p-[8%]"
          />
        </div>
      </div>
    </div>
  );
}
