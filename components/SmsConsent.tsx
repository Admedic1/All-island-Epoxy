"use client";

import Link from "next/link";

import { SITE } from "@/lib/site";

type SmsConsentProps = {
  smsChecked: boolean;
  marketingChecked: boolean;
  onSmsChange: (checked: boolean) => void;
  onMarketingChange: (checked: boolean) => void;
  requireSms?: boolean;
  error?: string;
};

export function SmsConsent({
  smsChecked,
  marketingChecked,
  onSmsChange,
  onMarketingChange,
  requireSms = true,
  error,
}: SmsConsentProps) {
  return (
    <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-forest-light">
        Text Message Consent
      </p>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="smsConsent"
          checked={smsChecked}
          required={requireSms}
          onChange={(e) => onSmsChange(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[hsl(var(--primary))]"
        />
        <span className="text-sm leading-relaxed text-white/85">
          By checking this box, I consent to receive non-marketing text messages
          from {SITE.legalName} related to account notification, confirmation
          and reminders for consultation calls and updates. Message frequency
          varies. Message and data rates may apply. Text HELP for assistance.
          Reply STOP to opt out.
        </span>
      </label>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="marketingConsent"
          checked={marketingChecked}
          onChange={(e) => onMarketingChange(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[hsl(var(--primary))]"
        />
        <span className="text-sm leading-relaxed text-white/85">
          By checking this box, I consent to receive occasional marketing
          communications from {SITE.legalName}. Message frequency varies (2
          times a month). Message and data rates may apply. Text HELP for
          assistance. You can reply STOP to opt out at any time.
        </span>
      </label>

      {error ? (
        <p className="text-sm font-semibold text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <p className="text-xs leading-relaxed text-muted-foreground">
        Consent is not a condition of purchase. See our{" "}
        <Link href="/privacy" className="font-bold text-forest-light underline underline-offset-2 hover:text-white">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="font-bold text-forest-light underline underline-offset-2 hover:text-white">
          Terms &amp; Conditions
        </Link>
        .
      </p>
    </div>
  );
}
