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
    title: "Done In One Day",
    body: "Most homes are finished the same day we start. You&apos;re not waiting around for a week.",
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
      <div className="mt-12 flex flex-col items-center gap-3">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">
          Authorized Supplier
        </p>
        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white p-3 shadow-lg shadow-black/40">
          <Image
            src="/images/us-resin-supply-logo.png"
            alt="U.S. Resin Supply & Manufacturing authorized supplier"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
