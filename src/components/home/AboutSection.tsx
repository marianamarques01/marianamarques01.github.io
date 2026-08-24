"use client";

import Reveal from "@/components/Reveal";
import CvDownloadLink from "@/components/CvDownloadLink";
import ExperienceTrack from "@/components/about/ExperienceTrack";
import StacksPanel from "@/components/about/StacksPanel";
import { useContent } from "@/lib/language";

export default function AboutSection() {
  const { about, education } = useContent();

  return (
    <section id="about" className="dvd-section container" aria-labelledby="about-section-title">
      <Reveal>
        <div className="s-header">
          <div>
            <p className="s-label">{about.eyebrow}</p>
            <h2 id="about-section-title" className="s-title">
              {about.heading}
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="about-grid">
        <div className="about-main">
          <Reveal className="about-bio">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 80}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
            <Reveal delay={about.paragraphs.length * 80}>
              <CvDownloadLink />
            </Reveal>
          </Reveal>

          <Reveal className="about-education">
            <h3 className="detail-h">{education.label}</h3>
            <ul className="exp-list">
              {education.items.map((item) => (
                <li key={item.degree} className="exp-item">
                  <div className="ei-l">
                    <span className="ei-co">{item.degree}</span>
                    <span className="ei-role">
                      {item.institution} · {item.location}
                    </span>
                    <span className="ei-period">{item.period}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <StacksPanel id="stacks" variant="sidebar" />
      </div>

      <ExperienceTrack variant="home" />
    </section>
  );
}
