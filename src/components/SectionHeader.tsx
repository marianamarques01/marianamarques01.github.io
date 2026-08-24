type SectionHeaderProps = {
  title: string;
  lead?: string;
  stat?: string;
  titleId?: string;
  as?: "h2" | "h3";
  count?: number;
};

export default function SectionHeader({
  title,
  lead,
  stat,
  titleId,
  as: Heading = "h3",
  count,
}: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div className="section-header__main">
        <Heading id={titleId} className="section-header-title">
          {title}
        </Heading>
        {lead ? <p className="section-header-lead">{lead}</p> : null}
      </div>
      {stat || count !== undefined ? (
        <div className="section-header__aside">
          {stat ? <span className="section-header-stat">{stat}</span> : null}
          {count !== undefined ? (
            <span className="section-header-count" aria-hidden="true">
              {String(count).padStart(2, "0")}
            </span>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
