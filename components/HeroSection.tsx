"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import { SITE, GOOGLE_REVIEWS_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/MagneticButton";

const HERO_IMAGE = "/images/hero-showroom-metallic-floor.png";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// H1 splits into these display lines
const H1_LINES = [
  "Long Island's",
  "Concrete Coating",
  "Specialists",
];

// Outer stagger: orchestrates all hero blocks sequentially
const outerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Eyebrow + badge fade-up with blur
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 58, damping: 20, mass: 1 },
  },
};

// Subtitle, CTAs — deeper blur reveal
const blurVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(12px)", scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 18, mass: 1 },
  },
};

// H1 stagger — each line staggers with a slight delay
const h1Container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
};

// Each H1 line: slide up from clip + blur in
const lineReveal: Variants = {
  hidden: { y: "105%", opacity: 0, filter: "blur(4px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 52, damping: 18, mass: 1.1 },
  },
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-[600px] overflow-hidden border-b border-forest/40 md:min-h-[680px]"
    >
      {/* Background with scroll parallax */}
      <motion.div
        style={{ y: reduced ? "0%" : bgY }}
        className="absolute inset-0 scale-105"
      >
        <Image
          src={HERO_IMAGE}
          alt="Metallic epoxy floor sample at All Island Epoxy supply showroom — Bohemia, Long Island NY"
          fill
          priority
          className="object-cover object-[50%_78%] brightness-110 contrast-105 md:object-[50%_82%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlays — keep text readable, let the floor stay bright */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/15 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-24 md:flex-row md:items-center md:px-6 lg:py-32">
        <motion.div
          className="max-w-2xl space-y-6"
          variants={reduced ? undefined : outerContainer}
          initial={reduced ? false : "hidden"}
          animate="show"
        >
          {/* H1 — line-by-line mask reveal */}
          <motion.h1
            variants={reduced ? undefined : h1Container}
            className="text-4xl font-black leading-[1.1] text-white md:text-5xl lg:text-6xl"
          >
            {reduced ? (
              H1_LINES.join(" ")
            ) : (
              H1_LINES.map((line) => (
                <span key={line} className="block overflow-hidden leading-[1.15]">
                  <motion.span className="block" variants={lineReveal}>
                    {line}
                  </motion.span>
                </span>
              ))
            )}
          </motion.h1>

          {/* Subtitle — blur to clear */}
          <motion.p
            variants={reduced ? undefined : blurVariants}
            className="max-w-xl text-lg font-medium leading-relaxed text-white/85 md:text-xl"
          >
            At All Island Epoxy, we specialize in taking your concrete floors from dull and cracked — to shiny and showroom.{" "}
            <span className="font-black text-white">Warrantied. Durable. Beautiful.</span>
          </motion.p>

          {/* CTAs — blur to clear with magnetic pull */}
          <motion.div
            variants={reduced ? undefined : blurVariants}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton>
              <Button asChild size="lg" className="font-black uppercase">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <Button asChild variant="outline" size="lg" className="font-black">
                <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social proof quote */}
          <motion.div
            variants={reduced ? undefined : itemVariants}
            className="flex items-center gap-3"
          >
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest/30 text-xs font-black text-forest-light ring-2 ring-forest/30">
              M
            </div>
            <p className="text-sm text-white/80">
              <span className="text-forest-light">★★★★★</span>{" "}
              <span className="italic">&ldquo;I wish I&apos;d done it sooner!&rdquo;</span>{" "}
              <span className="text-white/50">— Mike D., Commack</span>
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={reduced ? undefined : itemVariants}
            className="flex flex-wrap items-center gap-2"
          >
            {[
              "10+ Years Experience",
              "Fully Licensed & Insured",
              "Owner On Every Job",
              "Long Island Local",
            ].map((t) => (
              <Badge key={t} variant="accent" className="text-[11px]">
                {t}
              </Badge>
            ))}

            {/* Google rating pill */}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1 backdrop-blur-sm transition hover:border-white/30"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[11px] font-black text-forest-light">★★★★★</span>
              <span className="text-[11px] font-bold text-white/80">5.0 · 50+ reviews</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-zinc-950/80 to-transparent" />
    </section>
  );
}
