"use client";

import ArrowUpRight from "@/components/ArrowUpRight";
import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/language";

export default function ContactSection() {
  const { contact, site } = useContent();

  return (
    <section id="contact" className="dvd-section container dvd-contact" aria-labelledby="contact-section-title">
      <Reveal>
        <div className="contact-layout">
          <div className="contact-lead">
            <p className="s-label">{contact.eyebrow}</p>
            <h2 id="contact-section-title" className="contact-headline">
              {contact.headline}
            </h2>
          </div>

          <div className="contact-aside">
            <p className="contact-note">{contact.note}</p>
            <a href={`mailto:${site.email}`} className="contact-cta">
              <span>{contact.subline}</span>
              <ArrowUpRight className="contact-cta-icon" />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <footer className="site-footer">
          <nav className="site-footer__nav" aria-label="Contact and social">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href="tel:+5531984946938">{site.phone}</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>

          <div className="site-footer__meta">
            <span className="site-footer__status">{site.availability}</span>
            <span className="site-footer__copy">
              © {new Date().getFullYear()} {site.name}
            </span>
          </div>
        </footer>
      </Reveal>
    </section>
  );
}
