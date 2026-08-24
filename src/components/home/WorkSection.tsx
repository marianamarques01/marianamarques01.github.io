"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CompactWorkCarousel from "@/components/home/CompactWorkCarousel";
import { heroShot } from "@/lib/projects";
import { useContent } from "@/lib/language";
import type { Project } from "@/data/content";

const CARD_THEMES = ["pcard-a", "pcard-b", "pcard-c", "pcard-d", "pcard-e", "pcard-f"] as const;

function projectTags(project: Project) {
  const domain = project.domain.split("·")[0]?.trim();
  const stack = project.stack.slice(0, 2);
  return [domain, ...stack].filter(Boolean).slice(0, 3) as string[];
}

function CardArrow() {
  return (
    <div className="pcard-arrow" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2 12 12 2M12 2H4M12 2V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  theme,
  priority = false,
}: {
  project: Project;
  index: number;
  theme: (typeof CARD_THEMES)[number];
  priority?: boolean;
}) {
  const shot = heroShot(project);
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={index * 80}>
      <article className={`pcard ${theme}`}>
        <Link href={`/work#project-${project.id}`} className="pcard-link">
          <div className="pcard-inner">
            <div className="pcard-info">
              <div className="pcard-top">
                <span className="pnum">{num}</span>
                <div className="pcard-tags">
                  {projectTags(project).map((tag) => (
                    <span key={tag} className="pcard-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pcard-mid">
                <p className="pcompany">{project.domain}</p>
                <h3 className="pname">{project.title}</h3>
                <p className="pyear">
                  {project.year} · {project.role}
                </p>
              </div>

              <p className="pcard-summary">{project.description}</p>
            </div>

            <div className="pcard-vis">
              <div className="pcard-bg" />
              {shot && (
                <>
                  <Image
                    className="pcard-img"
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(min-width: 900px) 50vw, 100vw"
                    priority={priority}
                  />
                  <div className="pcard-img-overlay" />
                </>
              )}
              <CardArrow />
            </div>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

export default function WorkSection() {
  const { projects, work, home } = useContent();
  const featured = projects.items.filter((p) => p.featured && !p.hidden);

  return (
    <section id="work" className="dvd-section container" aria-labelledby="work-section-title">
      <Reveal>
        <div className="s-header">
          <div>
            <p className="s-label">{work.kicker}</p>
            <h2 id="work-section-title" className="s-title">
              {home.workLabel}
            </h2>
          </div>
          <span className="s-count">{String(featured.length).padStart(2, "0")}</span>
        </div>
      </Reveal>

      <div className="projects">
        {featured.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            theme={CARD_THEMES[index % CARD_THEMES.length]}
            priority={index === 0}
          />
        ))}
      </div>

      <CompactWorkCarousel />

      <Reveal>
        <Link href="/work" className="dvd-more-link link-slide">
          {home.viewAllWork} →
        </Link>
      </Reveal>
    </section>
  );
}
