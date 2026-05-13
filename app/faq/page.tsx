import type { Metadata } from "next";

import { SITE } from "@/lib/site";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: `FAQ | ${SITE.legalName}`,
  description:
    "Answers about epoxy cure times, coatings, commercial service, quotes, and Long Island towns served.",
};

export default function FAQPage() {
  return (
    <div className="bg-ink py-16 md:py-24">
      <FAQAccordion />
    </div>
  );
}
