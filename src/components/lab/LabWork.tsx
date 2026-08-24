import Link from "next/link";
import { reelItems } from "@/data/lab-content";

export default function LabWork() {
  return (
    <section className="lab-work" id="lab-work" aria-labelledby="lab-work-title">
      <div className="lab-work-inner">
        <div className="lab-work-head">
          <p className="lab-mono-label">The systems behind the reel</p>
          <h2 id="lab-work-title">Same work. No spectacle needed.</h2>
          <p>
            Every mockup that just slid past is a shipped product — not a
            placeholder. The full cases live on the main site.
          </p>
        </div>

        <div className="lab-work-grid">
          {reelItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="lab-work-item"
            >
              <span className="lab-mono-label lab-work-item-domain">{item.domain}</span>
              <h3>{item.title}</h3>
              <p>{item.role}</p>
              <span className="lab-work-item-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
