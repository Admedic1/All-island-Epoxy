"use client";

import {
  ClipboardCheck,
  Drill,
  Layers,
  Paintbrush,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { MotionGroup, MotionItem } from "@/components/MotionSection";

const steps = [
  {
    title: "We Look First",
    body: "We check your floor for cracks, moisture, and old coatings. No surprises later.",
    Icon: ClipboardCheck,
  },
  {
    title: "We Grind It Down",
    body: "We use diamond grinders — not acid. That&apos;s how coatings bond and stay bonded.",
    Icon: Drill,
  },
  {
    title: "We Lay the Base",
    body: "A thick primer coat goes down first. It fills the pores and sticks hard.",
    Icon: Paintbrush,
  },
  {
    title: "We Add Color & Chips",
    body: "We broadcast your chip blend and seal it all in with clear topcoats.",
    Icon: Layers,
  },
  {
    title: "You&apos;re Done",
    body: "We walk you through cure times before we leave. You&apos;ll know when you can walk, move things back, and park.",
    Icon: Sparkles,
  },
];

function AnimatedLine() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <svg
      ref={ref}
      className="absolute left-0 right-0 top-[2.375rem] hidden w-full md:block"
      height="2"
      aria-hidden
      preserveAspectRatio="none"
    >
      <motion.line
        x1="0"
        y1="1"
        x2="100%"
        y2="1"
        stroke="url(#lineGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="80%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ProcessSteps() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <MotionGroup className="mx-auto max-w-4xl text-center">
        <MotionItem>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Process
          </p>
        </MotionItem>
        <MotionItem>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Here&apos;s Exactly How We Do It
          </h2>
        </MotionItem>
        <MotionItem>
          <p className="mt-4 text-muted-foreground">
            No mystery. No cutting corners. This is how every single job runs —
            from the first crack we fill to the last coat we lay.
          </p>
        </MotionItem>
      </MotionGroup>

      <div className="relative mt-14">
        <AnimatedLine />

        <MotionGroup className="grid gap-4 md:grid-cols-5" stagger={0.1} delay={0.2}>
          {steps.map((step, idx) => (
            <MotionItem key={step.title}>
              <motion.div
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 300, damping: 22 },
                }}
                className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-zinc-950/70 p-5 text-center shadow-xl shadow-black/40 transition-colors duration-300 hover:border-forest/40 hover:bg-zinc-900/60"
              >
                {/* Step number badge */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 16,
                    delay: 0.3 + idx * 0.1,
                  }}
                  className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest/25 text-forest-light ring-2 ring-forest/40 transition-all duration-300 group-hover:bg-forest/40 group-hover:ring-forest/60"
                >
                  <step.Icon className="h-6 w-6" aria-hidden />
                </motion.div>

                <p className="mt-3 text-xs font-black uppercase tracking-widest text-forest-light">
                  Step {idx + 1}
                </p>
                <p className="mt-2 text-lg font-black text-white">{step.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </motion.div>
            </MotionItem>
          ))}
        </MotionGroup>
      </div>

      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.6 }}
      >
        <Button asChild size="lg" className="font-black uppercase">
          <Link href="/quote">Start Your Project →</Link>
        </Button>
      </motion.div>
    </div>
  );
}
