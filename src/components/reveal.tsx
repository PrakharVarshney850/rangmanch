"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds before the transition starts. */
  delay?: number;
  /** `fade` slides up; `clip` wipes the element in from the bottom. */
  variant?: "fade" | "clip";
  as?: ElementType;
  className?: string;
};

/**
 * Reveals its children once they scroll into view. Falls back to visible
 * immediately when IntersectionObserver is unavailable.
 */
export function Reveal({
  children,
  delay = 0,
  variant = "fade",
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const base = variant === "clip" ? "reveal-clip" : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${base} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
