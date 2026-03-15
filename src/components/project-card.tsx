import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";

import { ProjectItem } from "@/data/types";
import { Locale } from "@/lib/locales";

interface ProjectCardProps {
  item: ProjectItem;
  locale: Locale;
  activeLabel: string;
  buildingLabel: string;
  actionLabels: Record<"live" | "github" | "video", string>;
  disabledLabel: string;
}

const actionIconMap = {
  live: ArrowUpRight,
  github: Github,
  video: PlayCircle,
};

export function ProjectCard({
  item,
  locale,
  activeLabel,
  buildingLabel,
  actionLabels,
  disabledLabel,
}: ProjectCardProps) {
  const statusLabel = item.status === "active" ? activeLabel : buildingLabel;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-surface/80 shadow-soft transition hover:-translate-y-1 hover:border-accent/35">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-surfaceAlt/60">
        <Image
          src={item.image}
          alt={item.title}
          width={1200}
          height={800}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              {item.title}
            </h3>
            <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {statusLabel}
            </span>
          </div>

          <p className="text-sm leading-7 text-muted md:text-base">
            {item.description[locale]}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accentSoft/60 px-3 py-1 text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-1">
          {item.actions.map((action) => {
            const Icon = actionIconMap[action.type];
            const label = actionLabels[action.type];

            if (action.disabled || !action.href) {
              return (
                <span
                  key={`${item.slug}-${action.type}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2.5 text-sm font-semibold text-muted"
                >
                  <Icon className="h-4 w-4" />
                  {disabledLabel}
                </span>
              );
            }

            return (
              <Link
                key={`${item.slug}-${action.type}`}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/45 hover:text-accent"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
}
