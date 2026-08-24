"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ArrowUpRight from "@/components/ArrowUpRight";
import Reveal from "@/components/Reveal";
import CompactSectionHeader from "@/components/work/CompactSectionHeader";
import { useContent } from "@/lib/language";
import type { Project } from "@/data/content";

type CompactWorkCarouselProps = {
  className?: string;
  headerAs?: "h2" | "h3";
  titleId?: string;
};

function CompactCard({ project }: { project: Project }) {
  const href = project.url ?? `/work#project-${project.id}`;
  const external = Boolean(project.url);

  return (
    <Link
      id={`project-${project.id}`}
      href={href}
      className="compact-carousel-card"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <div className="compact-carousel-card__head">
        <span className="compact-carousel-year">{project.year}</span>
      </div>

      <div className="compact-carousel-card__body">
        <h3 className="compact-carousel-name">{project.title}</h3>
        <p className="compact-carousel-thesis">{project.thesis}</p>
      </div>

      <ArrowUpRight className="compact-carousel-arrow" aria-hidden="true" />
    </Link>
  );
}

function CarouselNav({
  direction,
  label,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`compact-carousel-nav compact-carousel-nav--${direction}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d={direction === "prev" ? "M9 2 4 7l5 5" : "M5 2l5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function CompactWorkCarousel({
  className,
  headerAs = "h3",
  titleId = "compact-carousel-title",
}: CompactWorkCarouselProps = {}) {
  const { projects, work } = useContent();
  const compact = projects.items.filter((project) => !project.featured && !project.hidden);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < maxScroll - 8);
  }, []);

  const scroll = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".compact-carousel-card");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "12");
    const delta = (card?.offsetWidth ?? 220) + gap;

    track.scrollBy({ left: direction * delta, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(track);

    return () => observer.disconnect();
  }, [compact.length, updateScrollState]);

  if (compact.length === 0) return null;

  return (
    <div
      className={["compact-carousel", className].filter(Boolean).join(" ")}
      aria-labelledby={titleId}
    >
      <Reveal>
        <CompactSectionHeader
          kicker={work.landingKicker}
          title={work.landingTitle}
          count={compact.length}
          titleId={titleId}
          as={headerAs}
          showKickerTags={false}
        />
      </Reveal>

      <div className="compact-carousel-shell">
        <CarouselNav
          direction="prev"
          label={work.prevLabel}
          disabled={!canPrev}
          onClick={() => scroll(-1)}
        />
        <CarouselNav
          direction="next"
          label={work.nextLabel}
          disabled={!canNext}
          onClick={() => scroll(1)}
        />

        <div ref={trackRef} className="compact-carousel-track" onScroll={updateScrollState}>
          {compact.map((project) => (
            <CompactCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
