"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Apple-grade spring — weighty, physical, no bounce
const SPRING = { type: "spring", stiffness: 60, damping: 22, mass: 1 } as const;

// Blur-up reveal — Apple's signature entrance
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)", scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: SPRING,
  },
};

// Faster variant for tighter UI elements
export const itemVariantsFast: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 90, damping: 22 },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.05,
    },
  },
};

/** Section-level cinematic fade-up wrapper */
export function MotionSection({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ ...SPRING, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/** Stagger orchestration parent — triggers waterfall reveals for children */
export function MotionGroup({
  children,
  className,
  stagger = 0.11,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-56px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger child — inherits animation state via variant propagation */
export function MotionItem({
  children,
  className,
  fast,
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={fast ? itemVariantsFast : itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
