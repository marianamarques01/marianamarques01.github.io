"use client";

import { useEffect, useRef } from "react";

type RevealVariant = "up" | "left" | "scale";

/**
 * Scroll-triggered reveal wrapper. Adds `.shown` once the element enters
 * the viewport; under prefers-reduced-motion content is visible immediately.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("shown");
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("shown");
          io.disconnect();
        }
      },
      {
        threshold: isMobile ? 0.08 : 0.15,
        rootMargin: isMobile ? "0px 0px 4% 0px" : "0px 0px -6% 0px",
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "scroll-reveal-left"
      : variant === "scale"
        ? "scroll-reveal-scale"
        : "";

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${variantClass} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
