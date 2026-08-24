import type { Metadata } from "next";
import "./lab.css";

export const metadata: Metadata = {
  title: "Lab — Mariana Marques",
  description:
    "An isolated concept test: a motion-first, typography-driven hero built entirely from real project work.",
  robots: { index: false, follow: false },
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return <div className="lab-root">{children}</div>;
}
