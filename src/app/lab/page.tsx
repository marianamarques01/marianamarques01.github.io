import Link from "next/link";
import LabHero from "@/components/lab/LabHero";
import LabWork from "@/components/lab/LabWork";

export default function LabPage() {
  return (
    <main>
      <div className="lab-bar">
        <Link href="/" className="lab-mono-label">
          ← M.MARQUES
        </Link>
        <span className="lab-mono-label lab-bar-tag">
          <span className="lab-bar-dot" aria-hidden="true" />
          Concept test
        </span>
      </div>

      <LabHero />
      <LabWork />

      <footer className="lab-note">
        <p className="lab-mono-label">
          Experimental concept — not the live site.
        </p>
        <Link href="/">Back to the real portfolio →</Link>
      </footer>
    </main>
  );
}
