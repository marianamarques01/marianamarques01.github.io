"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useContent } from "@/lib/language";
import MorphingHeadline from "./MorphingHeadline";
import ProjectReel from "./ProjectReel";
import BuilderMark from "./BuilderMark";

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>";

export default function LabHero() {
  const { lab } = useContent();
  const stageRef = useRef<HTMLElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 55, damping: 20, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 20, mass: 0.6 });

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth) * 2 - 1);
      pointerY.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", handlePointer);
    return () => window.removeEventListener("pointermove", handlePointer);
  }, [pointerX, pointerY]);

  const wordX = useTransform(springX, [-1, 1], [-12, 12]);
  const wordY = useTransform(springY, [-1, 1], [-7, 7]);
  const figureX = useTransform(springX, [-1, 1], [-24, 24]);
  const figureY = useTransform(springY, [-1, 1], [-16, 16]);
  const figureRotate = useTransform(springX, [-1, 1], [-4, 4]);
  const reelX = useTransform(springX, [-1, 1], [-10, 10]);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4, 0.85], [1, 1, 0]);
  const wordScale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0.8]);
  const wordRise = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0, -70]);
  const figureFall = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0, 110]);
  const reelScale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 1.18]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section className="lab-stage" ref={stageRef}>
      <div className="lab-frame">
        <div className="lab-grain" style={{ backgroundImage: `url("${GRAIN}")` }} />
        <div className="lab-wash" />

        <motion.div className="lab-eyebrow" style={{ opacity: heroOpacity }}>
          <span className="lab-mono-label">{lab.eyebrow}</span>
        </motion.div>

        <motion.div
          className="lab-word-layer"
          style={{ x: wordX, y: wordY, scale: wordScale, opacity: heroOpacity }}
        >
          <motion.div style={{ y: wordRise, width: "100%" }}>
            <MorphingHeadline />
          </motion.div>
        </motion.div>

        <motion.div
          className="lab-figure-layer"
          style={{ x: figureX, y: figureY, rotate: figureRotate, opacity: heroOpacity }}
        >
          <motion.div style={{ y: figureFall }}>
            <div className="lab-figure">
              <BuilderMark />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="lab-reel-layer" style={{ x: reelX, scale: reelScale }}>
          <ProjectReel />
        </motion.div>

        <motion.div className="lab-tags" style={{ opacity: heroOpacity }}>
          <span className="lab-tag lab-tag--left">{lab.tagLeft}</span>
          <span className="lab-tag lab-tag--right">{lab.tagRight}</span>
        </motion.div>

        <motion.div className="lab-cue" style={{ opacity: cueOpacity }}>
          <span className="lab-cue-pill">
            {lab.cue}
            <span className="lab-cue-arrow" aria-hidden="true">
              ↓
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
