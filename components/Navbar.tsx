"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services-data";
import { FLOOR_AREAS } from "@/lib/floor-areas";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/showroom", label: "Showroom" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-md"
      initial={reduced ? false : { y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-black tracking-tight text-white md:text-lg">
            All Island{" "}
            <span className="text-forest-light">Epoxy</span>
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground md:text-[11px]">
            &amp; Polishing
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold text-white/90 outline-none hover:text-white">
              Services <span className="text-xs text-muted-foreground">▾</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[260px]">
              <DropdownMenuItem asChild>
                <Link href="/services">All services</Link>
              </DropdownMenuItem>
              <div className="px-2 py-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                By area
              </div>
              {FLOOR_AREAS.map((a) => (
                <DropdownMenuItem key={a.slug} asChild>
                  <Link href={`/floors/${a.slug}`}>{a.label}</Link>
                </DropdownMenuItem>
              ))}
              <div className="px-2 py-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Guides
              </div>
              <DropdownMenuItem asChild>
                <Link href="/garage-floor-maintenance">Low-Maintenance Floors</Link>
              </DropdownMenuItem>
              <div className="px-2 py-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                By coating type
              </div>
              {SERVICES.map((s) => (
                <DropdownMenuItem key={s.slug} asChild>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold text-white/80 hover:text-white",
                pathname === link.href && "text-forest-light",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="text-sm font-bold text-white hover:text-forest-light"
          >
            Call Now
          </a>
          <Button asChild size="sm" className="font-black uppercase tracking-wide">
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="text-xs font-bold text-white"
          >
            Call
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <div className="mt-8 flex flex-col gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Services
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <Link href="/services" className="text-lg font-bold text-white">
                      All services
                    </Link>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      By area
                    </p>
                    {FLOOR_AREAS.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/floors/${a.slug}`}
                        className="text-base font-semibold text-forest-light/90"
                      >
                        {a.label}
                      </Link>
                    ))}
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      Guides
                    </p>
                    <Link
                      href="/garage-floor-maintenance"
                      className="text-base font-semibold text-forest-light/90"
                    >
                      Low-Maintenance Floors
                    </Link>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      By coating type
                    </p>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="text-base font-semibold text-white/85"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-bold text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Button asChild className="w-full font-black uppercase">
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="text-center text-sm font-bold text-forest-light"
                >
                  Call Now
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
