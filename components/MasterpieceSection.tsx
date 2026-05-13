"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { FEATURE_BEFORE_AFTER } from "@/lib/before-after-pairs";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function MasterpieceSection() {
  const reduced = useReducedMotion();

  return (
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 lg:py-24">
      {/* Text — slides in from the left */}
      <motion.div
        initial={reduced ? false : { opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease: EASE }}
      >
        <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
          Before &amp; After
        </p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
          Your Floor, Completely Redone — In One Day
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Cracked concrete. Oil stains. Peeling paint. We&apos;ve seen it all — and
          we fix it all. Drag the slider to see a real job we did right here on
          Long Island. The owner is on every project, start to finish.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="font-black uppercase">
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-black">
            <Link href="/gallery">See More Photos</Link>
          </Button>
        </div>
      </motion.div>

      {/* Slider — slides in from the right */}
      <motion.div
        initial={reduced ? false : { opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
      >
        <BeforeAfterSlider
          beforeSrc={FEATURE_BEFORE_AFTER.beforeSrc}
          afterSrc={FEATURE_BEFORE_AFTER.afterSrc}
          beforeAlt={FEATURE_BEFORE_AFTER.beforeAlt}
          afterAlt={FEATURE_BEFORE_AFTER.afterAlt}
        />
      </motion.div>
    </div>
  );
}
