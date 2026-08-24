import type { Metadata } from "next";
import PersonView from "@/components/person/PersonView";

export const metadata: Metadata = {
  title: "About — Mariana Marques",
  description:
    "Product engineer with full-stack execution, applied AI experience, and a track record across education, industry, and corporate products.",
};

export default function AboutPage() {
  return <PersonView />;
}
