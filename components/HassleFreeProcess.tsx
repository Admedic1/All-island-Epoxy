import { CalendarDays, Hammer, PartyPopper } from "lucide-react";

const steps = [
  {
    title: "Get a Free Quote",
    body: "Fill out a quick form or give us a call. We'll give you a real price — no runaround.",
    Icon: CalendarDays,
  },
  {
    title: "Pick a Day",
    body: "We show up when we say we will. We bring everything. You don't lift a finger.",
    Icon: Hammer,
  },
  {
    title: "Love Your Floor",
    body: "Wipe it clean with a mop. No more stains, no more cracks. Just a floor you're proud of.",
    Icon: PartyPopper,
  },
];

export function HassleFreeProcess() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
          Simple
        </p>
        <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
          Getting Started Is Easy
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, idx) => (
          <div
            key={s.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center shadow-xl shadow-black/40"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/20 text-amber-glow ring-2 ring-forest/35">
              <s.Icon className="h-7 w-7" />
            </div>
            <p className="mt-4 text-xs font-black uppercase tracking-widest text-red-500">
              Step {idx + 1}
            </p>
            <p className="mt-2 text-xl font-black text-white">{s.title}</p>
            <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
