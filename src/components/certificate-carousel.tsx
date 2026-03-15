"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { CertificateItem } from "@/data/types";
import { Locale } from "@/lib/locales";

interface CertificateCarouselProps {
  items: CertificateItem[];
  locale: Locale;
}

export function CertificateCarousel({
  items,
  locale,
}: CertificateCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  function scroll(direction: "left" | "right") {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const distance = container.clientWidth * 0.85;
    container.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface/80 text-foreground transition hover:border-accent/45 hover:text-accent"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface/80 text-foreground transition hover:border-accent/45 hover:text-accent"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <article
            key={item.title.pt}
            className="min-w-[280px] max-w-[320px] flex-1 snap-start rounded-[2rem] border border-border/60 bg-surface/80 p-4 shadow-soft md:min-w-[340px]"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-border/50 bg-surfaceAlt/70">
              <Image
                src={item.image}
                alt={item.title[locale]}
                width={960}
                height={720}
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
            <div className="space-y-2 px-1 pt-4">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {item.title[locale]}
              </h3>
              <p className="text-sm text-muted">{item.issuer[locale]}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
