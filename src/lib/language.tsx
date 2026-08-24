"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import * as en from "@/data/content";
import * as ptBR from "@/data/content.pt-BR";

export type Language = "en" | "pt-BR";

const STORAGE_KEY = "portfolio-language";
const dictionaries = { en, "pt-BR": ptBR };

const listeners = new Set<() => void>();
let current: Language = "en";
let didReadStore = false;

function emit() {
  listeners.forEach((listener) => listener());
}

function readStored(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "pt-BR" ? stored : "en";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Language {
  if (!didReadStore) {
    didReadStore = true;
    current = readStored();
  }
  return current;
}

function getServerSnapshot(): Language {
  return "en";
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    current = next;
    window.localStorage.setItem(STORAGE_KEY, next);
    emit();
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

export function useContent() {
  const { language } = useLanguage();
  return dictionaries[language];
}
