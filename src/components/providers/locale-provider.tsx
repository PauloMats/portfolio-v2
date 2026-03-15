"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { siteContent } from "@/data/site-content";
import { Locale, locales } from "@/lib/locales";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const STORAGE_KEY = "portfolio-locale";

const LocaleContext = createContext<LocaleContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value !== null && locales.includes(value as Locale);
}

function detectLocale(): Locale {
  if (typeof window === "undefined") {
    return "pt";
  }

  const browserLanguage = window.navigator.language.toLowerCase();

  if (browserLanguage.startsWith("es")) {
    return "es";
  }

  if (browserLanguage.startsWith("en")) {
    return "en";
  }

  return "pt";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    setLocaleState(isLocale(saved) ? saved : detectLocale());
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => {
        window.localStorage.setItem(STORAGE_KEY, nextLocale);
        setLocaleState(nextLocale);
      },
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}

export function usePortfolioContent() {
  const { locale } = useLocale();

  return {
    locale,
    content: siteContent,
  };
}
