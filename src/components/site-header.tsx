"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { usePortfolioContent } from "@/components/providers/locale-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { resumeByLocale } from "@/data/site-content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, content } = usePortfolioContent();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-border/70 bg-background/75 px-4 py-3 shadow-soft backdrop-blur-xl md:px-6">
        <Link href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surfaceAlt/90">
            <Image
              src="/images/branding/logo-mark.png"
              alt="Paulo Mateus"
              width={34}
              height={34}
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-lg font-semibold text-foreground">
              Paulo Mateus
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {content.header.availability[locale]}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {content.header.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-foreground"
            >
              {item.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href={resumeByLocale[locale]} className="button-primary" target="_blank">
            {content.hero.resumeCta[locale]}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface/80 text-foreground lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-border/70 bg-background/90 p-5 shadow-soft backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {content.header.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-border/60 px-4 py-3 text-sm font-medium text-foreground transition hover:border-accent/40"
              >
                {item.label[locale]}
              </Link>
            ))}
          </nav>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <Link
            href={resumeByLocale[locale]}
            target="_blank"
            className="button-primary mt-5 inline-flex"
          >
            {content.hero.resumeCta[locale]}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
