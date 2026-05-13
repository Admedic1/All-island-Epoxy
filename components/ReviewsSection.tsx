"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { GOOGLE_REVIEWS_URL } from "@/lib/site";

import { Button } from "@/components/ui/button";
import { MotionGroup, MotionItem } from "@/components/MotionSection";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const reviews = [
  {
    name: "Michael R.",
    date: "Mar 12, 2025",
    location: "Commack, NY",
    text: "Cracks filled, edges clean, and the flake looks even under garage LEDs. You can tell the owner actually cares about the finish — not a rush job.",
    job: "Garage",
    initial: "M",
  },
  {
    name: "Samantha P.",
    date: "Jan 4, 2025",
    location: "Bay Shore, NY",
    text: "We had peeling paint and oil stains. They explained prep clearly and delivered a floor that's easy to clean with kids and bikes rolling through daily.",
    job: "Garage",
    initial: "S",
  },
  {
    name: "James L.",
    date: "Dec 19, 2024",
    location: "Plainview, NY",
    text: "Commercial bay needed a tough surface. Crew was professional, on time, and the topcoat looks consistently glossy across the whole slab.",
    job: "Commercial",
    initial: "J",
  },
  {
    name: "Elena V.",
    date: "Nov 2, 2024",
    location: "Syosset, NY",
    text: "Metallic came out better than the inspiration photo. Communication was straightforward — owner present throughout.",
    job: "Garage",
    initial: "E",
  },
  {
    name: "Daniel K.",
    date: "Oct 9, 2024",
    location: "Smithtown area",
    text: "Grind and seal looks premium without being slippery in our basement hallway. Solid crew and clean worksite.",
    job: "Basement",
    initial: "D",
  },
  {
    name: "Nicole H.",
    date: "Sep 17, 2024",
    location: "Garden City, NY",
    text: "Scheduling was easy and they honored the timeline. Floor feels rock solid — no weird soft spots like our neighbor's DIY kit.",
    job: "Garage",
    initial: "N",
  },
  {
    name: "Chris A.",
    date: "Aug 3, 2024",
    location: "Ronkonkoma, NY",
    text: "Big two-car garage + storage zone. They handled expansion joints cleanly and the transition to the driveway looks crisp.",
    job: "Garage",
    initial: "C",
  },
  {
    name: "Priya S.",
    date: "Jul 21, 2024",
    location: "Hauppauge, NY",
    text: "We asked a lot of questions — they answered honestly about moisture and what to expect. Final product matches what they promised.",
    job: "Commercial",
    initial: "P",
  },
];

/** Deterministic hue rotation per initial letter for colored initials */
function avatarColor(initial: string) {
  const palette = [
    { bg: "bg-forest/30", text: "text-forest-light", ring: "ring-forest/30" },
    { bg: "bg-forest/20", text: "text-forest-light", ring: "ring-forest/30" },
    { bg: "bg-forest-dark/30", text: "text-forest-light", ring: "ring-forest/30" },
    { bg: "bg-sky-900/30", text: "text-sky-400", ring: "ring-sky-500/30" },
  ];
  return palette[initial.charCodeAt(0) % palette.length];
}

export function ReviewsSection() {
  const reduced = useReducedMotion();

  return (
    <motion.section
      className="border-y border-forest/40 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-16 md:py-24"
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <MotionGroup className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <MotionItem>
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
                Reviews
              </p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                What Our Customers Are Saying
              </h2>
              <p className="mt-4 text-muted-foreground">
                Long Island homeowners who trusted us with their floors.
              </p>
            </div>
          </MotionItem>

          <MotionItem>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-center shadow-xl shadow-black/40 transition hover:border-white/20 hover:bg-white/5"
            >
              {/* Google logo */}
              <div className="flex items-center justify-center gap-1.5">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-black text-white">Google</span>
              </div>
              <p className="mt-2 text-3xl font-black text-white">
                5.0{" "}
                <span className="text-forest-light" aria-label="5 stars">★★★★★</span>
              </p>
              <p className="text-sm font-semibold text-muted-foreground">
                50+ verified reviews
              </p>
              <p className="mt-2 text-xs font-black uppercase tracking-widest text-forest-light opacity-0 transition group-hover:opacity-100">
                Leave a review →
              </p>
            </a>
          </MotionItem>
        </MotionGroup>

        <MotionGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => {
            const colors = avatarColor(r.initial);
            return (
              <MotionItem key={r.name + r.date}>
                <motion.div
                  whileHover={{
                    y: -4,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  className="group flex h-full flex-col rounded-[1.25rem] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-[1.5px]"
                >
                  <div className="flex h-full flex-col rounded-[calc(1.25rem-1.5px)] bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {/* Initials avatar */}
                        <div
                          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ring-2 ${colors.bg} ${colors.text} ${colors.ring} text-sm font-black`}
                        >
                          {r.initial}
                        </div>
                        <div className="leading-tight">
                          <p className="text-sm font-black text-white">
                            {r.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {r.date} · {r.location}
                          </p>
                        </div>
                      </div>
                      {/* Google wordmark */}
                      <svg
                        width="40"
                        height="14"
                        viewBox="0 0 40 14"
                        aria-label="Google"
                        className="flex-shrink-0 opacity-70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <text
                          x="0"
                          y="12"
                          fontFamily="Arial, sans-serif"
                          fontSize="12"
                          fontWeight="bold"
                          fill="white"
                        >
                          Google
                        </text>
                      </svg>
                    </div>

                    <div className="mt-3 text-forest-light" aria-label="5 stars">
                      ★★★★★
                    </div>

                    <span className="mt-2 inline-flex self-start rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                      {r.job}
                    </span>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/90">
                      &ldquo;{r.text}&rdquo;
                    </p>
                  </div>
                </motion.div>
              </MotionItem>
            );
          })}
        </MotionGroup>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" variant="secondary" className="font-black">
            <Link href="/reviews">Read More Reviews</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
