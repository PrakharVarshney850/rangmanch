"use client";

import { useEffect } from "react";

/**
 * A soft follow-spot that tracks the pointer across the hero.
 * Writes CSS variables on <body> so any section can read them.
 */
export function SpotlightCursor() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (matchMedia("(hover: none)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.body.style.setProperty("--spot-x", `${event.clientX}px`);
        document.body.style.setProperty("--spot-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden mix-blend-soft-light md:block"
      style={{
        background:
          "radial-gradient(520px circle at var(--spot-x, 50%) var(--spot-y, 20%), rgb(243 217 160 / 0.14), transparent 70%)",
      }}
    />
  );
}
