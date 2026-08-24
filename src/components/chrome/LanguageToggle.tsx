"use client";

import { useLanguage } from "@/lib/language";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div role="group" aria-label="Language" className="lang-toggle">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => setLanguage("pt-BR")}
        aria-pressed={language === "pt-BR"}
      >
        PT
      </button>
    </div>
  );
}
