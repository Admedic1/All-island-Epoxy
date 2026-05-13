import type { Metadata } from "next";

import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Epoxy Floor Quote | Long Island NY | (631) 636-5667",
  description:
    "Answer a few quick questions and request your All Island Epoxy quote. Serving Nassau & Suffolk County.",
};

export default function QuotePage() {
  return (
    <div className="border-b border-white/10 bg-ink py-16 md:py-24">
      <QuoteForm />
    </div>
  );
}
