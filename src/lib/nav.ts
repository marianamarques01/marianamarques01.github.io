export function resolveNavHref(href: string): string | null {
  switch (href) {
    case "#work":
      return "/work";
    case "#about":
      return "/about";
    case "#stacks":
      return "/about#stacks";
    case "#trajectory":
      return "/about#trajectory";
    case "#practice":
      return "/about#practice";
    case "#contact":
      return "/#contact";
    case "#lab":
    case "#top":
      return null;
    default:
      return href.startsWith("#") ? null : href;
  }
}

export function navLabel(
  links: readonly { label: string; href: string }[],
  hash: string,
) {
  return links.find((link) => link.href === hash)?.label;
}

export function foyerLinks(links: readonly { label: string; href: string }[]) {
  return [
    { href: "/work", label: navLabel(links, "#work") ?? "Work" },
    { href: "/about", label: navLabel(links, "#about") ?? "About" },
  ];
}
