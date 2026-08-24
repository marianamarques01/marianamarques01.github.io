"use client";

import ArrowUpRight from "@/components/ArrowUpRight";
import CvDownloadLink from "@/components/CvDownloadLink";
import ExperienceTrack from "@/components/about/ExperienceTrack";
import StacksPanel from "@/components/about/StacksPanel";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/chrome/SiteHeader";
import { useContent } from "@/lib/language";

export default function PersonView() {
  const { about, manifesto, practice, education, certifications, contact, site } = useContent();

  return (
    <>
      <SiteHeader />
      <main id="main" className="container" tabIndex={-1}>
        <section id="about" aria-labelledby="about-title" className="about-block">
          <Reveal>
            <p className="eyebrow eyebrow-accent">{about.eyebrow}</p>
            <h1 id="about-title" className="page-title">
              {about.title}
            </h1>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="prose" style={{ marginTop: "1rem" }}>
                {paragraph}
              </p>
            ))}
            <CvDownloadLink />
          </Reveal>
        </section>

        <ExperienceTrack id="trajectory" variant="page" />

        <section id="manifesto" aria-labelledby="manifesto-note" className="about-block">
          <Reveal>
            <p className="eyebrow eyebrow-accent">{manifesto.eyebrow}</p>
            <p id="manifesto-note" className="about-lead">
              {manifesto.statement}
            </p>
            <ul className="marginalia">
              {manifesto.marginalia.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section id="practice" aria-labelledby="practice-title" className="about-block">
          <Reveal>
            <p className="eyebrow eyebrow-accent">{practice.eyebrow}</p>
            <h2 id="practice-title" className="about-lead">
              {practice.title}
            </h2>
            <p className="prose" style={{ marginTop: "1rem" }}>
              {practice.intro}
            </p>
          </Reveal>

          <div className="principles-stack" style={{ marginTop: "2rem" }}>
            {practice.principles.map((principle, index) => (
              <article key={principle.verb} className="principle-card" style={{ minHeight: "auto", paddingBlock: "2rem" }}>
                <Reveal delay={index * 90} variant="scale">
                  <p className="principles-num">{principle.index}</p>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                  <p className="eyebrow" style={{ marginTop: "1rem" }}>
                    {principle.evidence}
                  </p>
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        <StacksPanel variant="page" />

        <section id="education" aria-labelledby="education-title" className="about-block">
          <Reveal>
            <p className="eyebrow eyebrow-accent">{education.label}</p>
            <h2 id="education-title" className="about-lead">
              {education.label}
            </h2>
          </Reveal>

          <ul className="timeline">
            {education.items.map((item, index) => (
              <li key={item.degree} className="timeline-item">
                <Reveal delay={index * 70}>
                  <p className="timeline-org">{item.degree}</p>
                  <p className="timeline-role">
                    {item.institution} · {item.location}
                  </p>
                  <p className="timeline-shift">{item.period}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section id="certifications" aria-labelledby="certifications-title" className="about-block">
          <Reveal>
            <p className="eyebrow eyebrow-accent">{certifications.label}</p>
            <h2 id="certifications-title" className="about-lead">
              {certifications.label}
            </h2>
          </Reveal>

          <ul className="marginalia">
            {certifications.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="about-block">
          <Reveal>
            <p className="eyebrow eyebrow-accent">{contact.eyebrow}</p>
            <h2 id="contact-title" className="about-lead">
              {contact.title}
            </h2>
            <p className="prose" style={{ marginTop: "1rem" }}>
              {contact.note}
            </p>

            <a href={`mailto:${site.email}`} className="contact-email">
              {site.email}
              <ArrowUpRight className="h-5 w-5" />
            </a>

            <nav className="case-links" aria-label="Social">
              <a href="tel:+5531984946938">{site.phone}</a>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn →
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram →
              </a>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub →
              </a>
              <span className="tag">{site.availability}</span>
            </nav>
          </Reveal>
        </section>
      </main>
    </>
  );
}
