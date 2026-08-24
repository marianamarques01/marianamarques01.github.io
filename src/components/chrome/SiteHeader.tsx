"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ArrowUpRight from "@/components/ArrowUpRight";
import LanguageToggle from "@/components/chrome/LanguageToggle";
import ThemeToggle from "@/components/chrome/ThemeToggle";
import { useContent } from "@/lib/language";

export default function SiteHeader() {
  const { nav, site } = useContent();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  function isCurrent(href: string) {
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.slice(1);
    }

    const [path, fragment] = href.split("#");
    if (fragment) {
      return pathname === path && hash === `#${fragment}`;
    }

    return pathname === href && !hash;
  }

  return (
    <nav className={`site-nav${scrolled ? " is-scrolled" : ""}`} aria-label="Site">
      <Link href="/" className="wordmark">
        {nav.wordmark}
      </Link>

      <ul className="nav-links">
        {nav.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-end">
        <div className="nav-theme">
          <ThemeToggle />
        </div>
        <div className="nav-actions">
          <LanguageToggle />
          <a href={`mailto:${site.email}`} className="btn-cta btn-cta--icon" aria-label={nav.cta}>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
}
