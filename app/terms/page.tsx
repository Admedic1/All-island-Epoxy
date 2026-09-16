import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms for using the All Island Epoxy website and opting in to SMS messages, including opt-out, rates, and age rules.",
};

export default function TermsPage() {
  return (
    <div className="bg-ink">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: September 15, 2026
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            These terms cover use of the {SITE.legalName} website and our text
            message program. By using this site or opting in to SMS, you agree
            to these terms.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-12 px-4 py-14 text-base leading-relaxed text-muted-foreground md:px-6 md:py-20">
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Description of SMS Use Cases
          </h2>
          <p>
            If you opt in on a website form, {SITE.legalName} may text the
            mobile number you provide.
          </p>
          <p>
            <span className="font-bold text-white">Non-marketing texts</span>{" "}
            are for account notices, quote confirmations, and reminders for
            consultation calls and job updates. Frequency varies based on your
            project.
          </p>
          <p>
            <span className="font-bold text-white">Marketing texts</span> are
            occasional offers and company updates. Frequency varies and is
            about 2 times a month.
          </p>
          <p>
            You opt in by checking the matching box on our quote or contact
            form. Boxes are not pre-checked. You can choose one, both, or
            neither. Marketing opt-in is optional.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Opt-Out Instructions
          </h2>
          <p>
            Reply <span className="font-bold text-white">STOP</span> to any
            text from us to opt out. You can also text STOP to{" "}
            {SITE.phoneDisplay}. After we get STOP, we will send one
            confirmation and then stop texting that number.
          </p>
          <p>
            Reply <span className="font-bold text-white">HELP</span> for help.
            You can also call {SITE.phoneDisplay} or email {SITE.email}.
          </p>
          <p>
            If you opt out of texts, we may still contact you by phone or email
            about a quote or job you already requested, unless you ask us not
            to.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Customer Support Contact
          </h2>
          <p>
            {SITE.legalName}
            <br />
            {SITE.store.fullAddress}
            <br />
            Phone:{" "}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="font-bold text-forest-light underline underline-offset-2"
            >
              {SITE.phoneDisplay}
            </a>
            <br />
            Email:{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-bold text-forest-light underline underline-offset-2"
            >
              {SITE.email}
            </a>
            <br />
            Hours: {SITE.hours}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Message &amp; Data Rate Disclosure
          </h2>
          <p>
            Message and data rates may apply. Your carrier bills those charges,
            not us. Message frequency varies. For marketing texts, expect up to
            about 2 messages a month if you opted in.
          </p>
          <p>
            You are responsible for any phone or plan charges tied to texts you
            receive or send.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Carrier Liability Disclaimer
          </h2>
          <p>
            Wireless carriers are not liable for delayed or undelivered
            messages. {SITE.legalName} is not responsible if a text is late,
            blocked, or never arrives because of your phone, your carrier, or
            network problems.
          </p>
          <p>
            Supported carriers may change. If your carrier does not support our
            number, you may not get texts.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Age Restriction (18+)
          </h2>
          <p>
            You must be 18 years or older to use this website, request a quote,
            or opt in to text messages. If you are under 18, do not submit a
            form or check a consent box.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Quotes, Jobs, and the Website
          </h2>
          <p>
            A form request is not a contract. A job starts when both sides
            agree on scope, price, and timing. Photos and samples on this site
            are examples. Your floor may look different based on the slab,
            light, and the system you pick.
          </p>
          <p>
            We may update these terms. The date at the top shows the latest
            version. Keep using the site after a change means you accept the
            new terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">Privacy Policy</h2>
          <p>
            How we collect and use your information — including SMS opt-in data
            — is explained in our{" "}
            <Link
              href="/privacy"
              className="font-bold text-forest-light underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            . That page includes our mobile information sharing statement.
          </p>
        </section>
      </article>
    </div>
  );
}
