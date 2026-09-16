import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How All Island Epoxy & Polishing collects, uses, and protects your information, including SMS opt-in data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-ink">
      <section className="border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: September 15, 2026
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            This page explains what {SITE.legalName} collects when you use our
            website, request a quote, or opt in to text messages — and how we
            use that information.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-12 px-4 py-14 text-base leading-relaxed text-muted-foreground md:px-6 md:py-20">
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            What Information Is Collected
          </h2>
          <p>We may collect:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Contact details you give us — name, phone number, email, and
              property address
            </li>
            <li>
              Project details from our quote or contact forms — space type,
              coating interest, timeline, and notes
            </li>
            <li>
              SMS opt-in and opt-out records, including the time you checked a
              consent box
            </li>
            <li>
              Messages you send us by form, email, phone, or text
            </li>
            <li>
              Basic site data such as pages viewed and browser type, if your
              device sends it
            </li>
          </ul>
          <p>
            We only collect what you provide or what is needed to run the site
            and respond to you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            How User Data Is Used
          </h2>
          <p>We use your information to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Answer quote and contact requests</li>
            <li>
              Confirm appointments, send reminders, and give job updates if you
              opted in to non-marketing texts
            </li>
            <li>
              Send occasional offers if you opted in to marketing texts
            </li>
            <li>Call or email you about the work you asked us about</li>
            <li>Keep records we need for the job and for the law</li>
          </ul>
          <p>
            We do not sell your personal information. We do not rent your phone
            number to other companies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            SMS Opt-In Details
          </h2>
          <p>
            When you submit a form on this site, you can choose to receive texts
            from {SITE.legalName}. Those boxes are unchecked unless you tap
            them. Checking a box is how you opt in.
          </p>
          <p>
            <span className="font-bold text-white">Non-marketing texts</span>{" "}
            cover account notices, quote confirmations, and reminders for
            consultation calls and job updates. Frequency varies.
          </p>
          <p>
            <span className="font-bold text-white">Marketing texts</span> are
            occasional offers and updates. Frequency varies and is about 2
            times a month.
          </p>
          <p>
            Message and data rates may apply. Text HELP to {SITE.phoneDisplay}{" "}
            for help. Reply STOP to opt out at any time. After you opt out we
            will not send more texts unless you opt in again.
          </p>
          <p>
            Consent is not a condition of purchase. You can still request a
            quote if you do not want marketing texts.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Cookie &amp; Tracking Practices
          </h2>
          <p>
            Our site uses cookies that are needed for the pages and forms to
            work. We do not run advertising pixels or sell browsing data.
          </p>
          <p>
            Your browser may also send standard request data (such as IP
            address and pages loaded) to our hosting provider so the site can
            load and stay secure.
          </p>
          <p>
            You can block cookies in your browser. Some form features may not
            work if you do.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Data Security and Handling
          </h2>
          <p>
            We take reasonable steps to keep your information safe. Form
            submissions are sent to our business tools so we can follow up.
            Access is limited to people who need it to do the job.
          </p>
          <p>
            We keep quote, job, and SMS consent records as long as we need them
            to serve you and meet legal or carrier rules. We then delete or
            lock them down when they are no longer needed.
          </p>
          <p>
            No system is perfect. If we learn of a breach that affects you, we
            will tell you as the law requires.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">User Rights</h2>
          <p>You can ask us to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Tell you what we have on file</li>
            <li>Fix information that is wrong</li>
            <li>Delete information we no longer need to keep</li>
            <li>Stop marketing texts (reply STOP anytime)</li>
          </ul>
          <p>
            Email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-bold text-forest-light underline underline-offset-2"
            >
              {SITE.email}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="font-bold text-forest-light underline underline-offset-2"
            >
              {SITE.phoneDisplay}
            </a>
            . We will work through the request as soon as we can.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            Mobile Information Sharing Statement
          </h2>
          <p>
            No mobile information will be shared with third parties or
            affiliates for marketing or promotional purposes. All the above
            categories exclude text messaging originator opt-in data and
            consent; this information will not be shared with any third
            parties.
          </p>
          <p>
            We may share information only when required by law, to our service
            providers who send messages or host the site on our behalf, or to
            complete a request you made. Those providers are not allowed to use
            your SMS opt-in data for their own marketing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">Contact</h2>
          <p>
            {SITE.legalName}
            <br />
            {SITE.store.fullAddress}
            <br />
            <a
              href={`tel:${SITE.phoneTel}`}
              className="font-bold text-forest-light underline underline-offset-2"
            >
              {SITE.phoneDisplay}
            </a>
            <br />
            <a
              href={`mailto:${SITE.email}`}
              className="font-bold text-forest-light underline underline-offset-2"
            >
              {SITE.email}
            </a>
          </p>
          <p>
            See also our{" "}
            <Link
              href="/terms"
              className="font-bold text-forest-light underline underline-offset-2"
            >
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
