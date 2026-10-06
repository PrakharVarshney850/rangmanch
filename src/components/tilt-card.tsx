"use client";

import { useRef, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees on each axis. */
  max?: number;
};

/**
 * Pointer-reactive 3D tilt with a gold sheen that tracks the cursor.
 * Touch and reduced-motion users simply get the static card.
 */
export function TiltCard({ children, className = "", max = 7 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    cancelAnimationFrame(frame.current);
    node.style.transform = "";
    node.style.setProperty("--sheen-opacity", "0");
  };

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const node = ref.current;
    if (!node) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      node.style.transform = `perspective(1100px) rotateX(${(0.5 - py) * max * 2}deg) rotateY(${(px - 0.5) * max * 2}deg) translateZ(0)`;
      node.style.setProperty("--sheen-x", `${px * 100}%`);
      node.style.setProperty("--sheen-y", `${py * 100}%`);
      node.style.setProperty("--sheen-opacity", "1");
    });
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={`group relative transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-[var(--sheen-opacity,0)] transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(420px circle at var(--sheen-x,50%) var(--sheen-y,50%), rgb(212 162 76 / 0.16), transparent 62%)",
        }}
      />
      {children}
    </div>
  );
}
