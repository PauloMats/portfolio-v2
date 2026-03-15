import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          {icon ? (
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/75 text-accent">
              {icon}
            </div>
          ) : null}
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
        </div>
        <p className="text-base leading-7 text-muted md:text-lg">{description}</p>
      </div>
    </div>
  );
}
