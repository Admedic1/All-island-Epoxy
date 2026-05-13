import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Contact | ${SITE.legalName} | ${SITE.phoneDisplay}`,
  description:
    `Contact All Island Epoxy for epoxy floor coatings across Long Island. Call ${SITE.phoneDisplay} or send a message.`,
};

export default function ContactPage() {
  return (
    <div className="bg-ink">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Let&apos;s Talk About Your Floor
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Fastest path: call{" "}
              <a className="font-black text-amber-glow" href={`tel:${SITE.phoneTel}`}>
                {SITE.phoneDisplay}
              </a>{" "}
              — or send details below.
            </p>
            <div className="mt-8 space-y-3 text-muted-foreground">
              <p>
                <span className="font-black text-white">Email:</span>{" "}
                <a className="underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="font-black text-white">Hours:</span> {SITE.hours}
              </p>
              <p>
                <span className="font-black text-white">Area:</span> {SITE.region}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="font-black uppercase">
                <Link href="/quote">Start Quote Quiz</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-black">
                <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
              </Button>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
