"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/language";

type StacksPanelProps = {
  id?: string;
  variant?: "sidebar" | "page";
};

export default function StacksPanel({ id = "stacks", variant = "page" }: StacksPanelProps) {
  const { stacks } = useContent();

  return (
    <section
      id={id}
      className={`stacks-block stacks-block--${variant}${variant === "page" ? " about-block" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <Reveal>
        {variant === "page" ? (
          <>
            <p className="eyebrow eyebrow-accent">{stacks.label}</p>
            <h2 id={`${id}-title`} className="about-lead">
              {stacks.label}
            </h2>
          </>
        ) : (
          <h3 id={`${id}-title`} className="detail-h">
            {stacks.label}
          </h3>
        )}
      </Reveal>

      <dl className="stacks-spec">
        {stacks.groups.map((group) => (
          <Reveal key={group.name}>
            <div className="stacks-spec-row">
              <dt className="stacks-spec-label">{group.name}</dt>
              <dd className="stacks-spec-items">{group.items.join(" · ")}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
