import LabHero from "./LabHero";

/**
 * Wraps LabHero in the `.lab-root` scope it needs for its CSS variables —
 * required here since, unlike /lab, the main page doesn't apply that
 * class at the layout level.
 */
export default function LabHeroSection() {
  return (
    <div id="lab" className="lab-root scroll-mt-14">
      <LabHero />
    </div>
  );
}
