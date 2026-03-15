"use client";

import { useLocale, usePortfolioContent } from "@/components/providers/locale-provider";
import { localeLabels, locales } from "@/lib/locales";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const { content } = usePortfolioContent();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-surface/80 p-1 shadow-soft"
      aria-label={content.header.languageLabel[locale]}
    >
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLocale(item)}
            className={[
              "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition",
              isActive
                ? "bg-accent text-white"
                : "text-muted hover:bg-surfaceAlt hover:text-foreground",
            ].join(" ")}
            aria-pressed={isActive}
          >
            {localeLabels[item]}
          </button>
        );
      })}
    </div>
  );
}
