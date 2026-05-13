"use client";

import { useState } from "react";

import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    console.log("contact form:", Object.fromEntries(fd.entries()));
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
            Phone
          </label>
          <Input name="phone" required inputMode="tel" className="mt-2" />
        </div>
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Email
        </label>
        <Input type="email" name="email" className="mt-2" />
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Message
        </label>
        <Textarea name="message" className="mt-2" required />
      </div>
      <Button type="submit" className="font-black uppercase">
        Send message
      </Button>
    </form>
  );
}
