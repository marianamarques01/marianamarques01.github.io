import type { Project, ProjectShot } from "@/data/content";

export function heroShot(project: Project): ProjectShot | undefined {
  return project.shots?.find((shot) => shot.kind === "hero") ?? project.shots?.[0];
}

export function detailShots(project: Project): ProjectShot[] {
  if (!project.shots?.length) return [];
  const details = project.shots.filter((shot) => shot.kind === "detail");
  if (details.length > 0) return details;
  const hero = heroShot(project);
  return hero ? [hero] : [];
}
