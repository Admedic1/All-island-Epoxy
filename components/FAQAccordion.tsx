"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionGroup, MotionItem } from "@/components/MotionSection";

const faqs = [
  {
    q: "How long does installation take?",
    a: "Timing depends on your floor, repairs, and the system you choose. Most jobs take more than one day. We confirm the full schedule before we start.",
  },
  {
    q: "How long before I can walk or drive on the floor?",
    a: "Walk times and vehicle return times depend on materials and temperature. We'll give you clear guidance at job completion so you don't guess.",
  },
  {
    q: "What coatings do you offer?",
    a: "Flake/chip systems, metallic epoxy, grind-and-seal, commercial systems, and polyaspartic topcoats when they fit your goals and slab condition.",
  },
  {
    q: "Do you service commercial properties?",
    a: "Yes — warehouses, shops, offices, and more across Long Island. Scheduling and access plans are handled up front.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. All Island Epoxy & Polishing is fully licensed and insured for your peace of mind.",
  },
  {
    q: "What areas do you serve on Long Island?",
    a: "We serve Nassau and Suffolk communities throughout Long Island. See our service areas page for towns and local landing pages.",
  },
  {
    q: "How do I get a quote?",
    a: "Use our guided quote form or call us directly. If you share approximate square footage and photos, we can move faster.",
  },
  {
    q: "What's the difference between epoxy and polyaspartic?",
    a: "Generalizations can mislead — both can be excellent when specified correctly. We choose layers based on prep, UV exposure, timeline, and performance needs.",
  },
];

export function FAQAccordion() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-6">
      <MotionGroup className="text-center">
        <MotionItem>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            FAQs
          </p>
        </MotionItem>
        <MotionItem>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Straight Answers — No Fluff
          </h2>
        </MotionItem>
      </MotionGroup>

      <Accordion type="single" collapsible className="mt-10 w-full">
        <MotionGroup className="flex flex-col">
          {faqs.map((item, idx) => (
            <MotionItem key={item.q}>
              <AccordionItem value={`item-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            </MotionItem>
          ))}
        </MotionGroup>
      </Accordion>
    </div>
  );
}
