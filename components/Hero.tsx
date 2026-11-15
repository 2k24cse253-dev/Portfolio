"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { profile } from "@/data/content";
import Tilt from "./Tilt";

const tags = [
  { label: "Figma", x: "6%", y: "22%", tone: "rose" },
  { label: "Editorial", x: "78%", y: "16%", tone: "plain" },
  { label: "Figma Prototype", x: "70%", y: "32%", tone: "amber" },
  { label: "Styling", x: "4%", y: "48%", tone: "plain" },
  { label: "Illustration", x: "82%", y: "52%", tone: "rose" },
  { label: "Garment Dev", x: "10%", y: "72%", tone: "amber" },
  { label: "Brand Story", x: "74%", y: "70%", tone: "plain" },
  { label: "Photoshoots", x: "64%", y: "84%", tone: "rose" },
];

const toneClass: Record<string, string> = {
  rose: "border-rose/40 text-rose-soft",
  amber: "border-amber/40 text-amber",
  plain: "border-white/15 text-cream/85",
};

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-depth]"));
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      tx = (e.clientX - rect.left) / rect.width - 0.5;
      ty = (e.clientY - rect.top) / rect.height - 0.5;
    };

    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      for (const layer of layers) {
        const depth = Number(layer.dataset.depth || 8);
        layer.style.transform = `translate3d(${cx * depth}px, ${cy * depth}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    root.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      root.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      for (const layer of layers) layer.style.transform = "";
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-28"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div
        className="pointer-events-none absolute inset-x-0 top-[12%] z-0 select-none overflow-hidden"
        data-parallax={120}
      >
        <h1
          className="display text-center text-[19vw] leading-[0.85] text-gradient-rose opacity-90"
          aria-hidden="true"
        >
          Portfolio
        </h1>
      </div>

      <div className="relative z-10 container-page grid w-full grid-cols-1 items-center gap-10 pt-8 lg:grid-cols-12 lg:gap-6 xl:gap-8">
        <div className="order-2 flex flex-col items-start lg:order-1 lg:col-span-4 lg:self-center">
          <p className="serif text-2xl italic text-cream/90">
            Hello, I&apos;m
          </p>
          <h2 className="display mt-1.5 whitespace-nowrap text-[clamp(1.55rem,3vw,2.55rem)] leading-none text-cream">
            Varshinie <span className="text-gradient-rose">A. R.</span>
          </h2>
          <p className="display mt-4 text-sm leading-relaxed tracking-[0.14em] text-rose sm:text-base">
            Brand Stylist
            <br />
            &amp; Fashion Strategist
          </p>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="display inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3.5 text-xs tracking-[0.16em] text-white transition hover:brightness-110"
            >
              View Work →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-cream transition hover:border-white/35 hover:bg-white/5"
            >
              Contact
            </Link>
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
            <span>{profile.location}</span>
            <span className="text-rose">·</span>
            <span>{profile.openTo}</span>
          </p>
        </div>

        <div className="order-1 flex justify-center px-8 sm:px-12 lg:order-2 lg:col-span-5 lg:px-6 lg:self-center">
          <div className="relative w-full max-w-[420px]">
            <Tilt max={5} className="relative aspect-[4/5] w-full">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-rose/20 via-transparent to-transparent blur-[1px]" />
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 430px"
                className="photo-fade relative z-10 object-cover object-[center_18%]"
              />
            </Tilt>

            {tags.map((t, i) => (
              <div
                key={t.label}
                data-depth={i % 2 === 0 ? 18 : 30}
                className={`tag-chip animate-float absolute z-20 hidden rounded-full px-3.5 py-2 text-[11px] font-semibold tracking-wide md:block ${toneClass[t.tone]}`}
                style={{
                  left: t.x,
                  top: t.y,
                  animationDelay: `${i * 0.45}s`,
                }}
              >
                {t.label}
              </div>
            ))}
          </div>
        </div>

        <div className="order-3 hidden flex-col items-end gap-8 self-center lg:col-span-3 lg:flex xl:gap-10">
          {profile.stats.map((s) => (
            <div key={s.label} data-depth={10} className="w-full max-w-[180px] text-right">
              <div className="display text-gradient-rose text-[clamp(2.5rem,4vw,3.6rem)] leading-none">
                {s.value}
              </div>
              <div className="mt-2 h-px w-full bg-gradient-to-l from-rose/50 to-transparent" />
              <div className="mt-2 text-[10px] font-semibold tracking-[0.22em] text-muted uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-ink/70 backdrop-blur-md">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3 text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse-dot" />
            Available for internships &amp; collaborations
          </span>
          <span className="hidden md:inline">M.Des · NIFT Kangra · 2025–2027</span>
          <span>Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
