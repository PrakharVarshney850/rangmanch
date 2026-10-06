"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";
import logo from "@/assets/brand/rangmanch-logo.webp";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold-500/15 bg-stage-950/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
      <div className="container-stage flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
          <span className="relative block size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-gold-500/40 transition group-hover:ring-gold-400">
            <Image src={logo} alt="" fill sizes="44px" className="object-cover" priority />
          </span>
          <span>
            <span className="block font-display text-base font-bold tracking-[0.2em] text-cream sm:text-lg">
              RANGMANCH
            </span>
            <span className="block text-[9px] font-medium tracking-[0.28em] text-gold-500/80 uppercase sm:text-[10px]">
              {site.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-5 py-2.5 text-sm font-semibold text-stage-950 shadow-glow-gold transition hover:brightness-110 sm:inline-flex"
          >
            Partner with us
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-gold-500/25 text-cream transition hover:border-gold-400 lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div className="rule-spectrum" />
      </header>

      {/* Rendered outside <header> on purpose: the header's backdrop-filter
          would otherwise become the containing block for this fixed panel. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-[73px] bottom-0 z-40 overflow-y-auto border-t border-gold-500/10 bg-stage-950 lg:hidden"
      >
        <nav className="container-stage flex min-h-full flex-col py-6" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-stage-700/60 py-4 font-display text-lg text-cream transition hover:text-gold-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-7 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-5 py-3.5 text-center text-sm font-semibold text-stage-950"
          >
            Follow {site.handle}
          </a>

          <div className="mt-auto pt-10 pb-6">
            <div className="rule-spectrum" />
            <p className="mt-5 font-display text-xs tracking-[0.3em] text-gold-500/70 uppercase">
              {site.tagline}
            </p>
            <p className="mt-2 text-xs text-faint">{site.base}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
