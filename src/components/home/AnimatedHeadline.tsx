"use client";

import { motion, useReducedMotion } from "motion/react";

export default function AnimatedHeadline({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(/\s+/);

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="hero-word-clip">
          <motion.span
            className="hero-word-inner"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + index * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
