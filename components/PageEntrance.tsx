"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Full-screen dark overlay that fades out immediately on mount.
 * Gives the impression of the page "revealing" itself as it loads.
 * Automatically disabled when the user prefers reduced motion.
 */
export function PageEntrance() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[200] bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
    />
  );
}
