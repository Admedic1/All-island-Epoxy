"use client";

import { useMemo, useState } from "react";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type SpaceKind =
  | "garage"
  | "basement"
  | "patio"
  | "commercial"
  | "other";

type GarageSize = "1" | "2" | "3plus";

type SqFtChoice = string;

type CoatingChoice =
  | "flake"
  | "grind-seal"
  | "metallic"
  | "unsure";

type TimelineChoice = "asap" | "week" | "month";

const TOTAL_STEPS = 4;

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const [spaceKind, setSpaceKind] = useState<SpaceKind | "">("");
  const [garageSize, setGarageSize] = useState<GarageSize | "">("");
  const [sqFt, setSqFt] = useState<SqFtChoice | "">("");
  const [coating, setCoating] = useState<CoatingChoice | "">("");
  const [timeline, setTimeline] = useState<TimelineChoice | "">("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const progress = useMemo(
    () => Math.round((step / TOTAL_STEPS) * 100),
    [step],
  );

  const sqFtOptions = useMemo(() => {
    if (spaceKind === "garage") {
      if (garageSize === "1") {
        return [{ label: "~200–250 sq ft (typical 1-car)", value: "200-250" }];
      }
      if (garageSize === "2") {
        return [{ label: "~400–500 sq ft (typical 2-car)", value: "400-500" }];
      }
      if (garageSize === "3plus") {
        return [{ label: "~600+ sq ft (3+ car / oversized)", value: "600-plus" }];
      }
      return [];
    }

    return [
      { label: "Under 500 sq ft", value: "under-500" },
      { label: "500–1,000 sq ft", value: "500-1000" },
      { label: "1,000–2,500 sq ft", value: "1000-2500" },
      { label: "2,500+ sq ft", value: "2500-plus" },
    ];
  }, [spaceKind, garageSize]);

  function next() {
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }

  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  function resetGarageIfNeeded(nextKind: SpaceKind) {
    setSpaceKind(nextKind);
    if (nextKind !== "garage") {
      setGarageSize("");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const coatingLabel: Record<string, string> = {
      flake: "Flake / Chip Epoxy",
      "grind-seal": "Grind & Seal",
      metallic: "Metallic Epoxy",
      unsure: "Not Sure",
    };
    const timelineLabel: Record<string, string> = {
      asap: "ASAP",
      week: "This week",
      month: "This month",
    };

    const message = [
      `New Quote Request — All Island Epoxy`,
      `Name: ${firstName} ${lastName}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Address: ${address || "Not provided"}`,
      `Space: ${spaceKind}${garageSize ? ` (${garageSize}-car)` : ""}`,
      `Coating: ${coatingLabel[coating] ?? coating}`,
      `Timeline: ${timelineLabel[timeline] ?? timeline}`,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const webhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message,
            firstName,
            lastName,
            phone,
            email,
            address,
            spaceKind,
            garageSize,
            coating,
            timeline,
            notes,
          }),
        });
      } catch {
        // Silently continue — don't block the success screen
      }
    }

    setDone(true);
  }

  const canProceedStep1 =
    !!spaceKind &&
    (spaceKind !== "garage" || !!garageSize);

  const canProceedStep2 = !!coating;

  if (done) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-10 text-center shadow-2xl shadow-black/60">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
          Received
        </p>
        <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
          You&apos;re All Set
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We&apos;ll be in touch within 24 hours. Prefer faster? Call{" "}
          <a
            className="font-bold text-forest-light hover:text-white"
            href={`tel:${SITE.phoneTel}`}
          >
            {SITE.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 p-6 shadow-2xl shadow-black/60 md:p-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-forest-light">
            Free Quote
          </p>
          <h1 className="mt-2 text-2xl font-black text-white md:text-3xl">
            Guided Project Quiz
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Step {step} of {TOTAL_STEPS}
          </p>
        </div>
        <div className="hidden text-right text-xs font-semibold text-muted-foreground sm:block">
          Prefer calling?
          <div>
            <a className="font-black text-forest-light" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-forest via-forest-light to-forest-light transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-8">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-black text-white">
              What space are you coating?
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {(
                [
                  ["garage", "Garage"],
                  ["basement", "Basement"],
                  ["patio", "Patio / Outdoor"],
                  ["commercial", "Commercial Space"],
                  ["other", "Other"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => resetGarageIfNeeded(value)}
                  className={cn(
                    "rounded-xl border px-4 py-4 text-left text-sm font-black uppercase tracking-wide transition hover:border-forest-light",
                    spaceKind === value
                      ? "border-forest-light bg-forest/15 text-white"
                      : "border-white/10 bg-black/30 text-white/90",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            {spaceKind === "garage" ? (
              <div className="space-y-3 pt-2">
                <p className="text-sm font-bold text-white">
                  Garage size
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {(
                    [
                      ["1", "1 car"],
                      ["2", "2 car"],
                      ["3plus", "3+ car"],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setGarageSize(value)}
                      className={cn(
                        "rounded-xl border px-3 py-3 text-sm font-black uppercase tracking-wide",
                        garageSize === value
                          ? "border-forest-light bg-forest/15 text-white"
                          : "border-white/10 bg-black/30 text-white/90",
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-black text-white">
              Which coating are you interested in?
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {(
                [
                  ["flake", "Flake / Chip Epoxy", true],
                  ["grind-seal", "Grind & Seal", false],
                  ["metallic", "Metallic Epoxy", false],
                  ["unsure", "Not Sure — Help Me Choose", false],
                ] as const
              ).map(([value, label, popular]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setCoating(value)}
                  className={cn(
                    "relative rounded-xl border px-4 py-4 text-left text-sm font-black uppercase tracking-wide",
                    coating === value
                      ? "border-forest-light bg-forest/15 text-white"
                      : "border-white/10 bg-black/30 text-white/90",
                  )}
                >
                  {popular ? (
                    <span className="absolute right-3 top-3 rounded-full bg-forest-light/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-forest-light ring-1 ring-forest-light/40">
                      Most popular
                    </span>
                  ) : null}
                  <span className="block pr-24">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-black text-white">
              When would you like this done?
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {(
                [
                  ["asap", "ASAP"],
                  ["week", "This week"],
                  ["month", "This month"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTimeline(value)}
                  className={cn(
                    "rounded-xl border px-4 py-4 text-left text-sm font-black uppercase tracking-wide",
                    timeline === value
                      ? "border-forest-light bg-forest/15 text-white"
                      : "border-white/10 bg-black/30 text-white/90",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-xl font-black text-white">Your contact info</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  First name
                </label>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Last name
                </label>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Phone (required)
                </label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  inputMode="tel"
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Email (optional)
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Property address
              </label>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="123 Main St, Commack, NY"
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Notes / special requests
              </label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-2"
                placeholder="Tell us about drainage issues, timeline constraints, or color goals."
              />
            </div>
          </div>
        )}

        <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
            variant="secondary"
            onClick={back}
            disabled={step === 1}
            className="font-black uppercase"
          >
            Back
          </Button>

          {step < TOTAL_STEPS ? (
            <Button
              type="button"
              onClick={next}
              disabled={
                (step === 1 && !canProceedStep1) ||
                (step === 2 && !canProceedStep2) ||
                (step === 3 && !timeline)
              }
              className="font-black uppercase"
            >
              Continue
            </Button>
          ) : (
            <Button type="submit" className="font-black uppercase">
              Get My Free Quote →
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
