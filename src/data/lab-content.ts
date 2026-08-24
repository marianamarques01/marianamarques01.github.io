/**
 * Content for /lab — an isolated concept test.
 * Reuses real project data from content.ts; nothing here is fabricated.
 */
import { projects } from "@/data/content";

export const labMeta = {
  title: "Lab — concept test",
  back: "M.MARQUES",
};

export const rotatingWords = [
  "UI/UX DESIGN",
  "PRODUCT DESIGN",
  "FULLSTACK DEVELOPMENT",
  "PRODUCT ENGINEERING",
  "CREATIVE TECHNOLOGY",
  "AI PRODUCTS",
  "DESIGN SYSTEMS",
  "DIGITAL EXPERIENCES",
];

export type ReelItem = {
  id: string;
  title: string;
  domain: string;
  role: string;
  stack: string[];
  image: string;
  alt: string;
  href: string;
  external: boolean;
};

/** Depth pattern for the reel — near / far / near / far… gives the esteira its perspective. */
const depthPattern: Array<"near" | "far"> = ["near", "far", "near", "far", "near", "far"];

export const reelItems: (ReelItem & { depth: "near" | "far" })[] = projects.items
  .filter((p) => !p.hidden && p.shots && p.shots.length > 0)
  .map((p, i) => ({
    id: p.id,
    title: p.title,
    domain: p.domain,
    role: p.role,
    stack: p.stack,
    image: p.shots![0].src,
    alt: p.shots![0].alt,
    href: p.url ?? `/#project-${p.id}`,
    external: Boolean(p.url),
    depth: depthPattern[i % depthPattern.length],
  }));
