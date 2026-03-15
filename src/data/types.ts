import { Locale } from "@/lib/locales";

export type LocalizedString = Record<Locale, string>;
export type ActionType = "live" | "github" | "video";
export type ProjectStatus = "active" | "building";

export interface TechItem {
  name: string;
  icon: string;
}

export interface HighlightItem {
  title: LocalizedString;
  description: LocalizedString;
}

export interface SkillItem {
  title: LocalizedString;
  description: LocalizedString;
}

export interface CertificateItem {
  title: LocalizedString;
  issuer: LocalizedString;
  image: string;
}

export interface ExperienceItem {
  company: string;
  role: LocalizedString;
  image: string;
  href: string;
  tags: string[];
  summaries: LocalizedString[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  image: string;
  status: ProjectStatus;
  description: LocalizedString;
  tags: string[];
  actions: Array<{
    type: ActionType;
    href?: string;
    disabled?: boolean;
  }>;
}

export interface SiteContent {
  seo: {
    title: string;
    description: string;
  };
  header: {
    availability: LocalizedString;
    nav: Array<{ href: string; label: LocalizedString }>;
    themeToggle: LocalizedString;
    languageLabel: LocalizedString;
  };
  hero: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
    primaryCta: LocalizedString;
    secondaryCta: LocalizedString;
    resumeCta: LocalizedString;
    profileCardTitle: LocalizedString;
    profileCardDescription: LocalizedString;
    stats: Array<{
      value: string;
      label: LocalizedString;
    }>;
    badges: LocalizedString[];
  };
  about: {
    title: LocalizedString;
    intro: LocalizedString;
    paragraphs: LocalizedString[];
    facts: Array<{
      label: LocalizedString;
      value: LocalizedString;
    }>;
  };
  highlights: {
    title: LocalizedString;
    description: LocalizedString;
    items: HighlightItem[];
  };
  skills: {
    title: LocalizedString;
    description: LocalizedString;
    items: SkillItem[];
  };
  experience: {
    title: LocalizedString;
    description: LocalizedString;
    visitLabel: LocalizedString;
  };
  projects: {
    title: LocalizedString;
    description: LocalizedString;
    activeLabel: LocalizedString;
    buildingLabel: LocalizedString;
    actionLabels: Record<ActionType, LocalizedString>;
    disabledLabel: LocalizedString;
  };
  certificates: {
    title: LocalizedString;
    description: LocalizedString;
  };
  contact: {
    title: LocalizedString;
    description: LocalizedString;
    primaryCta: LocalizedString;
    secondaryCta: LocalizedString;
    footerNote: LocalizedString;
  };
}
