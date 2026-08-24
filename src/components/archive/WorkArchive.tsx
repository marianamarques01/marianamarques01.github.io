"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import CompactSectionHeader from "@/components/work/CompactSectionHeader";
import SiteHeader from "@/components/chrome/SiteHeader";
import { useContent } from "@/lib/language";
import { detailShots, heroShot } from "@/lib/projects";
import type { Project, ProjectShot } from "@/data/content";

type WorkCopy = ReturnType<typeof useContent>["work"];

function CaseShots({
  shots,
  priority = false,
}: {
  shots: ProjectShot[];
  priority?: boolean;
}) {
  if (shots.length === 0) return null;

  const layout =
    shots.length === 1 ? "single" : shots.length === 2 ? "duo" : "multi";

  return (
    <div className={`case__shots case__shots--${layout}`}>
      {shots.map((shot, index) => (
        <figure key={shot.src} className="case-shot">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes="(min-width: 900px) 24vw, 50vw"
            priority={priority && index === 0}
          />
        </figure>
      ))}
    </div>
  );
}

function FeaturedCase({
  project,
  work,
  priority = false,
  index = 0,
}: {
  project: Project;
  work: WorkCopy;
  priority?: boolean;
  index?: number;
}) {
  const shots = detailShots(project);

  return (
    <article id={`project-${project.id}`} className="case">
      <Reveal delay={index * 100}>
        <CaseShots shots={shots} priority={priority} />

        <div className="case__grid">
          <div className="case__main">
            <p className="case__meta">
              {project.domain} · {project.year}
            </p>
            <h2 className="case__title">{project.title}</h2>
            <p className="case__lead">{project.thesis}</p>
            <p className="case__body">{project.description}</p>

            <ul className="case__points">
              {project.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="case__aside" aria-label={project.title}>
            <dl className="case__facts">
              <div>
                <dt>{work.roleLabel}</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>{work.stackLabel}</dt>
                <dd>{project.stack.join(", ")}</dd>
              </div>
            </dl>

            <p className="case__stat">
              <span>{project.metric.value}</span>
              {project.metric.label}
            </p>
          </aside>
        </div>
      </Reveal>
    </article>
  );
}

function CompactProjectRow({ project, index }: { project: Project; index: number }) {
  const shot = heroShot(project);

  return (
    <Reveal delay={index * 70} variant="scale">
      <article id={`project-${project.id}`} className="compact-row">
      <p className="compact-row-year">{project.year}</p>

      <div className="compact-row-main">
        <h3>{project.title}</h3>
        <p className="compact-row-meta">{project.domain}</p>
        <p className="compact-row-thesis">{project.thesis}</p>
      </div>

      {shot && (
        <figure className="compact-row__thumb">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes="7.5rem"
            className="compact-row__thumb-img"
          />
        </figure>
      )}
    </article>
    </Reveal>
  );
}

export default function WorkArchive() {
  const { projects, work, home } = useContent();
  const visible = projects.items.filter((project) => !project.hidden);
  const featured = visible.filter((project) => project.featured);
  const compact = visible.filter((project) => !project.featured);

  return (
    <>
      <SiteHeader />
      <main id="main" className="container work-page" tabIndex={-1}>
        <header className="work-page-hero">
          <Reveal variant="left">
            <div className="work-page-hero__content">
              <h1 className="work-page-title">{home.archiveLabel}</h1>
              <p className="work-page-intro">{projects.intro}</p>
            </div>
          </Reveal>
          <Reveal delay={120} variant="scale">
            <figure className="work-page-hero__mark" aria-hidden="true">
              <img src="/work/pinguim.gif" alt="" decoding="async" />
            </figure>
          </Reveal>
        </header>

        <section className="case-list" aria-label={home.archiveLabel}>
          {featured.map((project, index) => (
            <FeaturedCase
              key={project.id}
              project={project}
              work={work}
              priority={index === 0}
              index={index}
            />
          ))}
        </section>

        {compact.length > 0 && (
          <section className="compact-section" aria-labelledby="compact-title">
            <Reveal>
              <CompactSectionHeader
                kicker={work.landingKicker}
                title={work.landingTitle}
                count={compact.length}
                titleId="compact-title"
                as="h2"
              />
            </Reveal>

            <div className="compact-list">
              {compact.map((project, index) => (
                <CompactProjectRow key={project.id} project={project} index={index} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
