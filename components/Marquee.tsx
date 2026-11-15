import { profile } from "@/data/content";

export default function Marquee() {
  const items = [...profile.marquee, ...profile.marquee];
  return (
    <div className="border-y border-white/10 bg-ink-2/60 py-4 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-medium tracking-[0.2em] text-muted uppercase whitespace-nowrap"
          >
            {item}
            <span className="text-rose">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
