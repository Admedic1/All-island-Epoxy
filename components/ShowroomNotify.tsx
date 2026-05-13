"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ShowroomNotify() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    console.log("showroom notify:", Object.fromEntries(fd.entries()));
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-center text-lg font-black text-white">
        You&apos;re on the list — we&apos;ll email you before opening day.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
    >
      <Input
        type="email"
        name="email"
        required
        placeholder="you@email.com"
        className="h-12"
      />
      <Button type="submit" className="h-12 font-black uppercase">
        Notify me
      </Button>
    </form>
  );
}
