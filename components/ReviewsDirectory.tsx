"use client";

import { useMemo, useState } from "react";

import {
  ALL_REVIEWS,
  type ReviewJobType,
} from "@/lib/reviews-all";
import { cn } from "@/lib/utils";

const filters: Array<{ key: "All" | ReviewJobType; label: string }> = [
  { key: "All", label: "All" },
  { key: "Garage", label: "Garage" },
  { key: "Basement", label: "Basement" },
  { key: "Commercial", label: "Commercial" },
];

export function ReviewsDirectory() {
  const [filter, setFilter] = useState<(typeof filters)[number]["key"]>("All");

  const rows = useMemo(() => {
    if (filter === "All") return ALL_REVIEWS;
    return ALL_REVIEWS.filter((r) => r.job === filter);
  }, [filter]);

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-black uppercase tracking-wide",
              filter === f.key
                ? "border-forest-light bg-forest/20 text-white"
                : "border-white/15 bg-black/40 text-white/80 hover:border-white/30",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {rows.map((r) => (
          <article
            key={r.id}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/80 p-6 shadow-xl shadow-black/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-forest/25 text-sm font-black text-forest-light ring-2 ring-forest/35">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-white">{r.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {r.date} • {r.town}, NY
                    </p>
                  </div>
                </div>
                <div className="mt-3 text-amber-glow" aria-hidden>
                  ★★★★★
                </div>
              </div>
              <svg width="52" height="18" viewBox="0 0 52 18" aria-label="Google" fill="none">
                <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700">
                  <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
                </text>
              </svg>
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Job type:{" "}
              <span className="text-white">{r.job}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              “{r.text}”
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
