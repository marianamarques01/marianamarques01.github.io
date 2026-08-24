"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
};

const MAX_PARTICLES = 40;
const SPAWN_DISTANCE = 6;

export default function ParticleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef({ x: 0, y: 0, moved: false });
  const smoothRef = useRef({ x: 0, y: 0, ringX: 0, ringY: 0, ringScale: 1, dotScale: 1 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastSpawnRef = useRef({ x: 0, y: 0 });
  const idleRef = useRef(0);
  const clickPulseRef = useRef(0);
  const colorRef = useRef("16, 16, 16");
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    if (reduced || coarse) return;

    const canvas = canvasRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!canvas || !dot || !ring) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    document.body.classList.add("custom-cursor");

    const readColor = () => {
      colorRef.current =
        getComputedStyle(document.documentElement).getPropertyValue("--cursor-particle").trim() ||
        "16, 16, 16";
    };

    readColor();

    const themeObserver = new MutationObserver(readColor);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const spawn = (x: number, y: number, vx: number, vy: number) => {
      const particles = particlesRef.current;
      if (particles.length >= MAX_PARTICLES) particles.shift();

      const speed = Math.hypot(vx, vy);
      particles.push({
        x,
        y,
        vx: -vx * 0.06 + (Math.random() - 0.5) * 0.6,
        vy: -vy * 0.06 + (Math.random() - 0.5) * 0.6,
        life: speed > 2 ? 0.85 : 0.65,
        size: Math.random() * 1.6 + 0.6,
      });
    };

    const onMove = (event: PointerEvent) => {
      const prev = pointerRef.current;
      const dx = event.clientX - prev.x;
      const dy = event.clientY - prev.y;

      velocityRef.current = {
        x: velocityRef.current.x * 0.6 + dx * 0.4,
        y: velocityRef.current.y * 0.6 + dy * 0.4,
      };

      pointerRef.current = { x: event.clientX, y: event.clientY, moved: true };
      idleRef.current = 0;
    };

    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onDown = () => {
      clickPulseRef.current = 1;
    };

    const onUp = () => {
      clickPulseRef.current = 0.6;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const interactive = target.closest(
        "a, button, input, textarea, select, label, [role='button'], summary",
      );
      document.body.classList.toggle("cursor-hover", Boolean(interactive));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerenter", onEnter);
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("mouseover", onOver);

    const tick = () => {
      const { x, y, moved } = pointerRef.current;
      const smooth = smoothRef.current;
      const isHover = document.body.classList.contains("cursor-hover");

      smooth.x += (x - smooth.x) * 0.28;
      smooth.y += (y - smooth.y) * 0.28;
      smooth.ringX += (x - smooth.ringX) * 0.14;
      smooth.ringY += (y - smooth.ringY) * 0.14;

      const targetRingScale = isHover ? 1.12 : 1;
      const targetDotScale = isHover ? 0.5 : 1;
      smooth.ringScale += (targetRingScale - smooth.ringScale) * 0.18;
      smooth.dotScale += (targetDotScale - smooth.dotScale) * 0.22;

      clickPulseRef.current *= 0.82;
      const clickRing = 1 - clickPulseRef.current * 0.18;
      const clickDot = 1 + clickPulseRef.current * 0.4;

      dot.style.transform = `translate(${smooth.x}px, ${smooth.y}px) scale(${smooth.dotScale * clickDot})`;
      ring.style.transform = `translate(${smooth.ringX}px, ${smooth.ringY}px) scale(${smooth.ringScale * clickRing})`;

      if (moved) {
        idleRef.current += 1;
        const dist = Math.hypot(smooth.x - lastSpawnRef.current.x, smooth.y - lastSpawnRef.current.y);
        if (dist >= SPAWN_DISTANCE) {
          spawn(smooth.x, smooth.y, velocityRef.current.x, velocityRef.current.y);
          lastSpawnRef.current = { x: smooth.x, y: smooth.y };
        }

        if (idleRef.current > 8) {
          document.body.classList.add("cursor-idle");
        } else {
          document.body.classList.remove("cursor-idle");
        }
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const color = colorRef.current;

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.032;
        particle.vx *= 0.96;
        particle.vy *= 0.96;

        if (particle.life <= 0) return false;

        ctx.save();
        ctx.shadowBlur = 4;
        ctx.shadowColor = `rgba(${color}, ${particle.life * 0.35})`;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, ${particle.life * 0.45})`;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return true;
      });

      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerenter", onEnter);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.body.classList.remove("custom-cursor", "cursor-hover", "cursor-idle");
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-canvas" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
