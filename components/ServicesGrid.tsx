"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import { SERVICES } from "@/lib/services-data";
import { getServiceCover } from "@/lib/service-images";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MotionGroup, MotionItem } from "@/components/MotionSection";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), {
    stiffness: 180,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 180,
    damping: 28,
  });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6" style={{ perspective: "1200px" }}>
      <MotionGroup className="mx-auto max-w-3xl text-center">
        <MotionItem>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
            Coatings
          </p>
        </MotionItem>
        <MotionItem>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            What We Do
          </h2>
        </MotionItem>
        <MotionItem>
          <p className="mt-4 text-muted-foreground">
            Garages, basements, commercial spaces — we coat them all.
            Built to handle Long Island winters, hot tires, and daily use.
          </p>
        </MotionItem>
      </MotionGroup>

      <MotionGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => {
          const cover = getServiceCover(service.slug);
          return (
            <MotionItem key={service.slug}>
              <TiltCard className="h-full">
                {/* Spotlight glow on hover — follows the tilt */}
                <div className="group h-full rounded-[1.5rem] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-[1.5px] transition-all duration-300 hover:from-white/[0.12] hover:to-white/[0.04]">
                  <div className="flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-gradient-to-b from-zinc-900/90 to-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <span className="absolute right-3 top-3 z-10 rounded-md bg-red-600 px-2 py-1 text-xs font-black text-white shadow-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${cover.isPhoto ? "opacity-100" : "opacity-90"}`}
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    </div>

                    {/* Text */}
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1" />
                    <CardFooter className="justify-between pb-6">
                      <Button asChild variant="ghost" className="px-0 text-amber-glow">
                        <Link href={`/services/${service.slug}`}>
                          Learn more{" "}
                          <span
                            className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden
                          >
                            →
                          </span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </TiltCard>
            </MotionItem>
          );
        })}
      </MotionGroup>
    </div>
  );
}
