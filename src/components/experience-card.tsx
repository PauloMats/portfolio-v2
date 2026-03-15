import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ExperienceItem } from "@/data/types";
import { Locale } from "@/lib/locales";

interface ExperienceCardProps {
  item: ExperienceItem;
  locale: Locale;
  visitLabel: string;
}

export function ExperienceCard({
  item,
  locale,
  visitLabel,
}: ExperienceCardProps) {
  return (
    <article className="grid gap-6 rounded-[2rem] border border-border/60 bg-surface/75 p-5 shadow-soft md:grid-cols-[1.1fr_1.4fr] md:p-6">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 bg-surfaceAlt/80">
        <Image
          src={item.image}
          alt={item.company}
          width={960}
          height={720}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="space-y-3">
          <span className="eyebrow">{item.role[locale]}</span>
          <h3 className="font-display text-2xl font-semibold text-foreground">
            {item.company}
          </h3>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {item.summaries.map((summary) => (
            <p key={summary[locale]} className="text-sm leading-7 text-muted md:text-base">
              {summary[locale]}
            </p>
          ))}
        </div>

        <div>
          <Link
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/45 hover:text-accent"
          >
            {visitLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
