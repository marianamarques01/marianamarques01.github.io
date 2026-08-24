"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { rotatingWords } from "@/data/lab-content";

const INTERVAL_MS = 2800;
const NBSP = " ";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function MorphingHeadline() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % rotatingWords.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const word = rotatingWords[index];
  const characters = Array.from(word);

  return (
    <div
      className="lab-word-clip"
      role="img"
      aria-label={rotatingWords.join(", ")}
    >
      <div className="lab-word" style={{ position: "relative", display: "grid" }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={word}
            aria-hidden="true"
            style={{ gridArea: "1 / 1", display: "flex", justifyContent: "center" }}
          >
            {characters.map((char, i) => (
              <motion.span
                className="lab-word-char"
                key={`${word}-${i}`}
                initial={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: "0.55em", filter: "blur(14px)", scale: 1.06 }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: "-0.45em", filter: "blur(14px)", scale: 0.94 }
                }
                transition={{
                  duration: reducedMotion ? 0.2 : 0.65,
                  delay: reducedMotion ? 0 : i * 0.014,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char === " " ? NBSP : char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
