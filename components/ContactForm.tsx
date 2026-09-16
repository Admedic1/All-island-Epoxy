"use client";

import { useState } from "react";

import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmsConsent } from "@/components/SmsConsent";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [consentError, setConsentError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();

    if (!phone && !email) {
      setConsentError("Leave a phone number or email so we can get back to you.");
      return;
    }

    if ((smsConsent || marketingConsent) && !phone) {
      setConsentError("Add a phone number if you want texts.");
      return;
    }

    const payload = {
      firstName: String(fd.get("name") ?? ""),
      phone,
      email,
      notes: String(fd.get("message") ?? ""),
      source: "contact",
      smsConsent,
      marketingConsent,
      smsConsentAt:
        smsConsent || marketingConsent ? new Date().toISOString() : "",
    };

    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Don't block the success screen
    }

    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-8">
        <p className="text-lg font-black text-white">Message captured.</p>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll reply shortly — or call{" "}
          <a className="font-bold text-forest-light" href={`tel:${SITE.phoneTel}`}>
            {SITE.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Name
          </label>
          <Input name="name" required className="mt-2" />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Phone (optional)
          </label>
          <Input name="phone" inputMode="tel" className="mt-2" />
        </div>
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Email (optional)
        </label>
        <Input type="email" name="email" className="mt-2" />
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Message
        </label>
        <Textarea name="message" className="mt-2" required />
      </div>
      <SmsConsent
        smsChecked={smsConsent}
        marketingChecked={marketingConsent}
        requireSms={false}
        onSmsChange={(checked) => {
          setSmsConsent(checked);
          if (checked) setConsentError("");
        }}
        onMarketingChange={setMarketingConsent}
        error={consentError}
      />
      <Button type="submit" className="font-black uppercase">
        Send message
      </Button>
    </form>
  );
}
