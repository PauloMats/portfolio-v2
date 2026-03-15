import Image from "next/image";

import { TechItem } from "@/data/types";

export function TechMarquee({ items }: { items: TechItem[] }) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-surface/70 p-3 shadow-soft">
      <div className="marquee-track flex min-w-max items-center gap-3">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surfaceAlt/85">
              <Image src={item.icon} alt={item.name} width={28} height={28} className="h-7 w-7 object-contain" />
            </div>
            <span className="text-sm font-medium text-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
