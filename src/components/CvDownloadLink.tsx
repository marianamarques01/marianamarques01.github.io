"use client";

import { useContent } from "@/lib/language";

type CvDownloadLinkProps = {
  className?: string;
};

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 2v7M7 9l3-3M7 9 4 6M2 11h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CvDownloadLink({ className }: CvDownloadLinkProps) {
  const { site } = useContent();

  return (
    <a
      href={site.cv.href}
      download
      className={["cv-download", className].filter(Boolean).join(" ")}
    >
      {site.cv.label}
      <DownloadIcon />
    </a>
  );
}
