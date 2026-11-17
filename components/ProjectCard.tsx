"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/content";
import Reveal from "./Reveal";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal delay={index * 80}>
      <Link
        href={`/work/${project.id}`}
        className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-2/85 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-rose/45 hover:bg-ink-3/90 hover:shadow-[0_24px_60px_rgba(255,45,85,0.12)]"
      >
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-rose/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_30%,rgba(255,45,85,0.08)_50%,transparent_70%)] bg-[length:200%_100%] group-hover:[animation:shimmer_1.2s_ease-in-out]" />

        <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-ink-3">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} visual`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 mesh-bg flex items-end p-4">
              <span className="display text-sm tracking-[0.2em] text-cream/70">
                {project.title}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent transition group-hover:from-rose/20" />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-muted uppercase">
              {project.upcoming ? (
                <span className="rounded-full border border-amber/40 bg-amber/10 px-2 py-0.5 text-amber">
                  Upcoming · {project.year}
                </span>
              ) : (
                project.year
              )}
            </span>
            <span className="text-lg text-rose transition duration-300 group-hover:translate-x-1.5 group-hover:text-rose-soft">
              →
            </span>
          </div>
          <h3 className="display mt-5 text-2xl leading-tight text-cream sm:text-3xl">
            {project.title}
          </h3>
          <p className="serif mt-1.5 text-lg italic text-rose-soft">
            {project.subtitle}
          </p>
          <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/12 px-3 py-1.5 text-[11px] font-medium text-cream/80 transition group-hover:border-rose/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/8 pt-4">
            <span className="text-[12px] font-semibold tracking-[0.14em] text-rose uppercase transition group-hover:text-rose-soft">
              View case study →
            </span>
            {project.prototypeUrl && (
              <span
                onClick={(e) => e.preventDefault()}
                className="text-[12px] font-semibold tracking-[0.14em] text-muted uppercase transition hover:text-cream"
              >
                Figma Prototype ↗
              </span>
            )}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
