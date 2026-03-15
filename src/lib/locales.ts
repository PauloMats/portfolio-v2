export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  pt: "PT-BR",
  en: "EN",
  es: "ES",
};
