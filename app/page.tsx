import Link from "next/link";

import { SITE } from "@/lib/site";
import { MotionSection } from "@/components/MotionSection";
import { HeroSection } from "@/components/HeroSection";
import { MasterpieceSection } from "@/components/MasterpieceSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TrustDifferentiators } from "@/components/TrustDifferentiators";
import { CTABanner } from "@/components/CTABanner";
import { HassleFreeProcess } from "@/components/HassleFreeProcess";
import { GalleryPreview } from "@/components/GalleryPreview";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ServiceAreasPills } from "@/components/ServiceAreasPills";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <MotionSection className="bg-zinc-950 py-16 md:py-24">
        <MasterpieceSection />
      </MotionSection>

      <MotionSection className="bg-black py-16 md:py-24">
        <ServicesGrid />
      </MotionSection>

      <MotionSection className="bg-zinc-950 py-16 md:py-24">
        <ProcessSteps />
      </MotionSection>

      <MotionSection className="bg-black py-16 md:py-24">
        <TrustDifferentiators />
      </MotionSection>

      <MotionSection>
        <CTABanner
          title="Want a Floor You'll Actually Be Proud Of?"
          subtitle="Get a free quote. We'll walk you through exactly what we'd do and what it costs — no pressure."
        />
      </MotionSection>

      <MotionSection className="bg-zinc-950 py-16 md:py-24">
        <HassleFreeProcess />
      </MotionSection>

      <MotionSection className="bg-black py-16 md:py-24">
        <GalleryPreview />
      </MotionSection>

      <ReviewsSection />

      <MotionSection className="bg-white py-16 md:py-24">
        <ComparisonTable />
      </MotionSection>

      <MotionSection className="bg-zinc-950 py-16 md:py-24">
        <FAQAccordion />
      </MotionSection>

      <MotionSection className="border-y border-white/10 bg-black py-16 md:py-24">
        <ServiceAreasPills />
      </MotionSection>

      <section className="bg-gradient-to-r from-red-700 via-forest-dark to-forest py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left md:px-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-white/80">
              Today
            </p>
            <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
              Ready? Let&apos;s Fix That Floor.
            </h2>
            <p className="mt-2 text-sm font-semibold text-white/85">
              Prefer voice? Call{" "}
              <a className="underline" href={`tel:${SITE.phoneTel}`}>
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white font-black uppercase text-black hover:bg-white/90"
            >
              <Link href="/quote">Start Quote Quiz</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-black">
              <a href={`tel:${SITE.phoneTel}`}>Tap-to-Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
