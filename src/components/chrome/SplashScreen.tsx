"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import HandWalkMark from "@/components/HandWalkMark";

const STORAGE_KEY = "portfolio-splash-seen";
const EASE = [0.16, 1, 0.3, 1] as const;

type SplashScreenProps = {
  wordmark: string;
  role: string;
  onComplete?: () => void;
};

export default function SplashScreen({
  wordmark,
  role,
  onComplete,
}: SplashScreenProps) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);
  const [exiting, setExiting] = useState(false);

  const finish = useCallback(() => {
    document.body.style.overflow = "";
    setActive(false);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (seen || reduced) {
      onComplete?.();
      return;
    }

    setActive(true);
    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => setExiting(true), 2100);
    const finishTimer = window.setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      finish();
    }, 2900);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, [reduced, finish, onComplete]);

  const words = wordmark.split(/\s+/);

  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          className="splash"
          role="presentation"
          aria-hidden="true"
          initial={{ y: 0 }}
          animate={{ y: exiting ? "-100%" : 0 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <div className="splash-inner">
            <p className="splash-wordmark">
              {words.map((word, index) => (
                <span key={`${word}-${index}`} className="splash-word-clip">
                  <motion.span
                    className="splash-word-inner"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.15 + index * 0.08,
                      ease: EASE,
                    }}
                  >
                    {word}
                    {index < words.length - 1 ? "\u00a0" : ""}
                  </motion.span>
                </span>
              ))}
            </p>

            <motion.span
              className="splash-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.55, ease: EASE }}
            />

            <motion.p
              className="splash-role"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.85, ease: EASE }}
            >
              {role}
            </motion.p>

            <motion.div
              className="splash-hand"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
            >
              <HandWalkMark />
            </motion.div>
          </div>

          <motion.span
            className="splash-index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1, ease: EASE }}
          >
            001
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
