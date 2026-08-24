type CompactSectionHeaderProps = {
  kicker: string;
  title: string;
  count: number;
  titleId?: string;
  as?: "h2" | "h3";
  showKickerTags?: boolean;
};

function kickerTags(kicker: string): string[] {
  return kicker
    .split(/,\s*|\s+e\s+/i)
    .map((part) => part.replace(/^and\s+/i, "").trim())
    .filter(Boolean);
}

export default function CompactSectionHeader({
  kicker,
  title,
  count,
  titleId,
  as: Heading = "h3",
  showKickerTags = true,
}: CompactSectionHeaderProps) {
  const tags = kickerTags(kicker);

  return (
    <header className="compact-section-header">
      <div className="compact-section-header__main">
        {showKickerTags ? (
          <div className="compact-section-tags" aria-hidden="true">
            {tags.map((tag) => (
              <span key={tag} className="compact-section-tag">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <p className="sr-only">{kicker}</p>
        <Heading id={titleId} className="compact-section-title">
          {title}
        </Heading>
      </div>
      <span className="compact-section-count" aria-hidden="true">
        {String(count).padStart(2, "0")}
      </span>
    </header>
  );
}
