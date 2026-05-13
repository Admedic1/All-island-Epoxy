"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

import { BEFORE_AFTER_PAIRS } from "@/lib/before-after-pairs";
import { Button } from "@/components/ui/button";
import { MotionGroup, MotionItem } from "@/components/MotionSection";

const pairs = BEFORE_AFTER_PAIRS.slice(0, 3).map((p) => ({
  before: p.beforeSrc,
  after: p.afterSrc,
  beforeAlt: p.beforeAlt,
  afterAlt: p.afterAlt,
  label: p.label,
}));

/** Spotlight border — cursor-position glow that traces the card border */
function SpotlightCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);

  const springX = useSpring(mouseX, { stiffness: 220, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 28 });

  const background = useTransform(
    [springX, springY],
    ([x, y]: number[]) =>
      `radial-gradient(280px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 70%)`
  );

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleLeave() {
    mouseX.set(-999);
    mouseY.set(-999);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 24 } }}
      className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl shadow-black/50"
    >
      {/* Spotlight overlay */}
      <motion.div
        style={{ background }}
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
      />
      {children}
    </motion.div>
  );
}

export function GalleryPreview() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <MotionGroup className="mx-auto max-w-3xl text-center">
        <MotionItem>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Proof
          </p>
        </MotionItem>
        <MotionItem>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Real Jobs. Real Results.
          </h2>
        </MotionItem>
        <MotionItem>
          <p className="mt-4 text-muted-foreground">
            Every photo is a real job we did right here on Long Island.
            No stock images. No tricks.
          </p>
        </MotionItem>
      </MotionGroup>

      <MotionGroup className="mt-12 columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
        {pairs.map((p, idx) => (
          <MotionItem key={idx}>
            <SpotlightCard>
              {/* Before */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.before}
                  alt={p.beforeAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 z-20 rounded-md bg-forest px-2 py-1 text-[11px] font-black uppercase tracking-wide text-white shadow-lg">
                  Before
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* After */}
              <div className="relative aspect-[4/3] overflow-hidden border-t border-white/10">
                <Image
                  src={p.after}
                  alt={p.afterAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 z-20 rounded-md bg-forest px-2 py-1 text-[11px] font-black uppercase tracking-wide text-white shadow-lg">
                  After
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </SpotlightCard>
          </MotionItem>
        ))}
      </MotionGroup>

      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      >
        <Button asChild size="lg" variant="secondary" className="font-black">
          <Link href="/gallery">View Full Gallery</Link>
        </Button>
      </motion.div>
    </div>
  );
}
