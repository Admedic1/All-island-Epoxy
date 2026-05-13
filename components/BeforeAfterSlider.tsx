"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before concrete floor",
  afterAlt = "After epoxy floor",
}: Props) {
  const [pct, setPct] = useState(52);

  const clipPath = useMemo(
    () => `inset(0 ${100 - pct}% 0 0)`,
    [pct],
  );

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/60">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath }}
          aria-hidden
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>
        <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-forest px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-lg">
          Drag
        </div>
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
          Before
        </div>
        <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-forest px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
          After
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/60 px-4 py-4">
        <label className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
          <span className="w-14 shrink-0 text-white">Reveal</span>
          <input
            type="range"
            min={5}
            max={95}
            value={pct}
            onChange={(e) => setPct(Number(e.target.value))}
            className="h-2 w-full cursor-pointer accent-forest-light"
            aria-label="Before and after slider position"
          />
          <span className="w-10 shrink-0 text-right text-white">{pct}%</span>
        </label>
      </div>
    </div>
  );
}
