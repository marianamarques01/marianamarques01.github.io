import type { Metadata } from "next";
import WorkArchive from "@/components/archive/WorkArchive";

export const metadata: Metadata = {
  title: "Work — Mariana Marques",
  description:
    "Selected products and shipped work by Mariana Marques, product engineer.",
};

export default function WorkPage() {
  return <WorkArchive />;
}
