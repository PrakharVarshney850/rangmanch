"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  /** Rendered before/after the number, e.g. "+", "K", "%". */
  suffix?: string;
  prefix?: string;
  decimals?: number;
  durationMs?: number;
  className?: string;
};

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Animates a number from zero to `to` the first time it scrolls into view. */
export function CountUp({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  durationMs = 1900,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    let start: number | null = null;

    if (reduced || typeof IntersectionObserver === "undefined") {
      // Deferred to a frame callback so this never fires synchronously
      // inside the effect body.
      frame = requestAnimationFrame(() => setValue(to));
      return () => cancelAnimationFrame(frame);
    }

    const step = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / durationMs, 1);
      setValue(to * easeOutExpo(progress));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          frame = requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, durationMs]);

  const display = value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
