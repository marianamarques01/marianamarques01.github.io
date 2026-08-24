"use client";

import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { useContent } from "@/lib/language";

type ExperienceTrackProps = {
  id?: string;
  variant?: "home" | "page";
};

export default function ExperienceTrack({
  id = "trajectory",
  variant = "home",
}: ExperienceTrackProps) {
  const { trajectory } = useContent();

  return (
    <section
      id={id}
      className={`experience-block experience-block--${variant}${variant === "page" ? " about-block" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <Reveal>
        <SectionHeader
          title={trajectory.title}
          lead={trajectory.lead}
          stat={trajectory.stat}
          count={trajectory.steps.length}
          titleId={`${id}-title`}
          as={variant === "page" ? "h2" : "h3"}
        />
        <p className="sr-only">{trajectory.intro}</p>
      </Reveal>

      <ol className="experience-list">
        {trajectory.steps.map((step, index) => (
          <li key={`${step.org}-${step.role}`} className="experience-item">
            <Reveal delay={index * 60}>
              <div className="experience-row">
                <div className="experience-primary">
                  <span className="experience-org">{step.org}</span>
                  <span className="experience-role">{step.role}</span>
                </div>
                <p className="experience-shift">{step.shift}</p>
                {"period" in step && step.period ? (
                  <span className="experience-period">{step.period}</span>
                ) : null}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
