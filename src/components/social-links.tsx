import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

import { socialLinks } from "@/data/site-content";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];

        return (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface/75 text-foreground transition hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent"
          >
            <Icon className="h-5 w-5" />
          </Link>
        );
      })}
    </div>
  );
}
