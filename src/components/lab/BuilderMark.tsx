/**
 * Flat, bold "builder" mark — filled silhouette for head/torso/laptop,
 * thick rounded strokes for limbs. Not a photo, not a mascot: an
 * abstracted figure holding the tools of the trade.
 */
export default function BuilderMark() {
  return (
    <svg
      className="lab-figure-svg"
      viewBox="0 0 260 360"
      fill="none"
      role="img"
      aria-label="Flat illustrated figure holding an open laptop"
      style={{ color: "var(--lab-ink)" }}
    >
      {/* legs */}
      <line x1="108" y1="196" x2="96" y2="322" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
      <line x1="152" y1="196" x2="164" y2="322" stroke="currentColor" strokeWidth="22" strokeLinecap="round" />

      {/* shoes */}
      <rect x="74" y="316" width="42" height="21" rx="10.5" fill="var(--lab-paper)" stroke="currentColor" strokeWidth="3" />
      <rect x="144" y="316" width="42" height="21" rx="10.5" fill="var(--lab-paper)" stroke="currentColor" strokeWidth="3" />

      {/* arms, meeting at the laptop */}
      <polyline
        points="96,100 70,150 108,206"
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="164,100 190,150 152,206"
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* torso */}
      <rect x="82" y="82" width="96" height="118" rx="38" fill="currentColor" />
      <circle cx="130" cy="118" r="6" fill="var(--lab-signal)" />

      {/* laptop, held up front and centre */}
      <g transform="rotate(-4 130 215)">
        <rect x="84" y="184" width="92" height="62" rx="8" fill="var(--lab-paper)" stroke="currentColor" strokeWidth="4" />
        <rect x="98" y="203" width="50" height="5" rx="2.5" fill="var(--lab-trace)" />
        <rect x="98" y="215" width="34" height="5" rx="2.5" fill="var(--lab-signal)" />
        <rect x="90" y="247" width="80" height="8" rx="4" fill="currentColor" opacity="0.85" />
      </g>

      {/* head */}
      <circle cx="130" cy="52" r="28" fill="currentColor" />
    </svg>
  );
}
