import Image from "next/image";
import Link from "next/link";
import { reelItems } from "@/data/lab-content";

/** Duplicated once so the CSS marquee (-50%) loops seamlessly. */
const track = [...reelItems, ...reelItems];

export default function ProjectReel() {
  return (
    <div className="lab-reel-track">
      {track.map((item, i) => {
        const isDuplicate = i >= reelItems.length;
        return (
        <Link
          key={`${item.id}-${i}`}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noreferrer" : undefined}
          className={`lab-card lab-card--${item.depth}`}
          aria-label={`${item.title} — ${item.role}`}
          aria-hidden={isDuplicate}
          tabIndex={isDuplicate ? -1 : 0}
        >
          <div className="lab-card-frame">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 767px) 40vw, 20vw"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
          <div className="lab-card-overlay">
            <p className="lab-card-title">{item.title}</p>
            <p className="lab-card-role">{item.role}</p>
            <div className="lab-card-stack">
              {item.stack.slice(0, 3).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </Link>
        );
      })}
    </div>
  );
}
