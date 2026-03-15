"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

import { usePortfolioContent } from "@/components/providers/locale-provider";
import { CertificateCarousel } from "@/components/certificate-carousel";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SocialLinks } from "@/components/social-links";
import { TechMarquee } from "@/components/tech-marquee";
import { certificates, experiences, projects, techStack } from "@/data/catalog";
import { resumeByLocale } from "@/data/site-content";

export function SiteShell() {
  const { locale, content } = usePortfolioContent();

  return (
    <div id="top" className="relative min-h-screen pb-10">
      <div className="spotlight pointer-events-none absolute inset-x-0 top-0 h-[38rem]" />
      <SiteHeader />

      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-8 pt-8 md:px-6 md:pt-10">
        <section className="section-shell grid gap-10 overflow-hidden px-6 py-8 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-10">
          <div className="flex flex-col justify-center gap-7">
            <div className="space-y-4">
              <span className="eyebrow">{content.hero.eyebrow[locale]}</span>
              <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {content.hero.title[locale]}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
                {content.hero.description[locale]}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#projects" className="button-primary">
                {content.hero.primaryCta[locale]}
              </Link>
              <Link href="#contact" className="button-secondary">
                {content.hero.secondaryCta[locale]}
              </Link>
              <Link
                href={resumeByLocale[locale]}
                target="_blank"
                className="button-secondary"
              >
                {content.hero.resumeCta[locale]}
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {content.hero.stats.map((stat) => (
                <div
                  key={stat.label[locale]}
                  className="rounded-[1.5rem] border border-border/60 bg-background/70 p-4"
                >
                  <p className="font-display text-3xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {stat.label[locale]}
                  </p>
                </div>
              ))}
            </div>

            <SocialLinks />
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute right-5 top-0 hidden h-40 w-40 rounded-full bg-accent/20 blur-3xl md:block" />
            <div className="absolute bottom-12 left-0 hidden h-28 w-28 rounded-full bg-success/20 blur-3xl md:block" />

            <div className="relative w-full max-w-[32rem] rounded-[2.2rem] border border-border/60 bg-surface/80 p-4 shadow-glow md:p-5">
              <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative overflow-hidden rounded-[1.8rem] bg-surfaceAlt/80">
                  <Image
                    src="/images/branding/paulo.png"
                    alt="Paulo Mateus"
                    width={860}
                    height={980}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between gap-4 rounded-[1.8rem] bg-background/75 p-5">
                  <div className="space-y-3">
                    <span className="eyebrow">{content.hero.profileCardTitle[locale]}</span>
                    <p className="text-sm leading-7 text-muted">
                      {content.hero.profileCardDescription[locale]}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {content.hero.badges.map((badge) => (
                      <div
                        key={badge[locale]}
                        className="rounded-2xl border border-border/60 bg-surface/80 px-3 py-3 text-sm text-foreground"
                      >
                        {badge[locale]}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Tech stack" className="space-y-5">
          <TechMarquee items={techStack} />
        </section>

        <section id="highlights" className="section-shell px-6 py-8 md:px-10 md:py-10">
          <SectionHeading
            eyebrow="01"
            title={content.highlights.title[locale]}
            description={content.highlights.description[locale]}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.highlights.items.map((item) => (
              <article
                key={item.title[locale]}
                className="rounded-[1.7rem] border border-border/60 bg-background/75 p-5"
              >
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description[locale]}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
          <div className="section-shell px-6 py-8 md:px-10 md:py-10">
            <SectionHeading
              eyebrow="02"
              title={content.about.title[locale]}
              description={content.about.intro[locale]}
            />

            <div className="mt-8 space-y-4">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph[locale]} className="text-base leading-8 text-muted">
                  {paragraph[locale]}
                </p>
              ))}
            </div>
          </div>

          <div className="section-shell px-6 py-8 md:px-8 md:py-10">
            <div className="space-y-6">
              {content.about.facts.map((fact) => (
                <div
                  key={fact.label[locale]}
                  className="rounded-[1.6rem] border border-border/60 bg-background/70 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {fact.label[locale]}
                  </p>
                  <p className="mt-3 text-base leading-7 text-foreground">
                    {fact.value[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-6 py-8 md:px-10 md:py-10">
          <SectionHeading
            eyebrow="03"
            title={content.skills.title[locale]}
            description={content.skills.description[locale]}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.skills.items.map((item) => (
              <article
                key={item.title[locale]}
                className="rounded-[1.7rem] border border-border/60 bg-background/75 p-5"
              >
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description[locale]}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell px-6 py-8 md:px-10 md:py-10">
          <SectionHeading
            eyebrow="04"
            title={content.experience.title[locale]}
            description={content.experience.description[locale]}
          />

          <div className="mt-8 space-y-6">
            {experiences.map((item) => (
              <ExperienceCard
                key={item.company}
                item={item}
                locale={locale}
                visitLabel={content.experience.visitLabel[locale]}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell px-6 py-8 md:px-10 md:py-10">
          <SectionHeading
            eyebrow="05"
            title={content.projects.title[locale]}
            description={content.projects.description[locale]}
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {projects.map((item) => (
              <ProjectCard
                key={item.slug}
                item={item}
                locale={locale}
                activeLabel={content.projects.activeLabel[locale]}
                buildingLabel={content.projects.buildingLabel[locale]}
                actionLabels={{
                  live: content.projects.actionLabels.live[locale],
                  github: content.projects.actionLabels.github[locale],
                  video: content.projects.actionLabels.video[locale],
                }}
                disabledLabel={content.projects.disabledLabel[locale]}
              />
            ))}
          </div>
        </section>

        <section id="certificates" className="section-shell px-6 py-8 md:px-10 md:py-10">
          <SectionHeading
            eyebrow="06"
            title={content.certificates.title[locale]}
            description={content.certificates.description[locale]}
          />

          <div className="mt-8">
            <CertificateCarousel items={certificates} locale={locale} />
          </div>
        </section>

        <section id="contact" className="section-shell overflow-hidden px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <span className="eyebrow">07</span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {content.contact.title[locale]}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
                {content.contact.description[locale]}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="mailto:pm.mats98@gmail.com" className="button-primary">
                  <Mail className="h-4 w-4" />
                  {content.contact.primaryCta[locale]}
                </Link>
                <Link
                  href="https://www.linkedin.com/in/paulomatsdev/"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  {content.contact.secondaryCta[locale]}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.7rem] border border-border/60 bg-background/75 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Email
                </p>
                <Link
                  href="mailto:pm.mats98@gmail.com"
                  className="mt-3 inline-block text-lg font-medium text-foreground transition hover:text-accent"
                >
                  pm.mats98@gmail.com
                </Link>
              </div>
              <div className="rounded-[1.7rem] border border-border/60 bg-background/75 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  LinkedIn
                </p>
                <Link
                  href="https://www.linkedin.com/in/paulomatsdev/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-lg font-medium text-foreground transition hover:text-accent"
                >
                  /in/paulomatsdev
                </Link>
              </div>
              <div className="rounded-[1.7rem] border border-border/60 bg-background/75 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  GitHub
                </p>
                <Link
                  href="https://github.com/PauloMats"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-lg font-medium text-foreground transition hover:text-accent"
                >
                  github.com/PauloMats
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 py-6 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[2rem] border border-border/60 bg-surface/70 px-6 py-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>{content.contact.footerNote[locale]}</p>
          <p>© {new Date().getFullYear()} Paulo Mateus</p>
        </div>
      </footer>
    </div>
  );
}
