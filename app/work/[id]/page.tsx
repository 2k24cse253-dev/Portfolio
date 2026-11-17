import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import StatusBar from "@/components/StatusBar";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";
import { projects } from "@/data/content";
import { fashionImages } from "@/data/images";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project — Varshinie A. R." };
  return {
    title: `${project.title} — Varshinie A. R.`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const next = project.nextId
    ? projects.find((p) => p.id === project.nextId)
    : projects.find((p) => p.id !== project.id);

  const meta = [
    project.year && { k: "Year", v: project.year },
    project.duration && { k: "Duration", v: project.duration },
    project.role && { k: "Role", v: project.role },
  ].filter(Boolean) as { k: string; v: string }[];

  return (
    <main className="min-h-screen">
      <Nav />

      {/* Banner */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Backdrop
          src={fashionImages.editorial}
          position="center 30%"
          overlay="bg-[linear-gradient(180deg,rgba(10,7,8,0.92)_0%,rgba(10,7,8,0.82)_45%,rgba(10,7,8,0.97)_100%)]"
        />
        <div
          className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-rose/15 blur-[90px] animate-float"
          aria-hidden
        />
        <div className="container-page relative z-10 pt-32 pb-14 sm:pt-40 sm:pb-18">
          <Reveal>
            <Link
              href="/work"
              className="btn-ghost inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-cream uppercase"
            >
              ← All work
            </Link>
            <p className="mt-8 flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
              <span className="h-px w-10 bg-rose/60" />
              {project.upcoming ? "Upcoming project" : "Case study"} · {project.year}
            </p>
            {project.upcoming && (
              <span className="mt-4 inline-block rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-amber uppercase">
                Coming soon
              </span>
            )}
            <h1 className="display mt-3 max-w-4xl text-[clamp(2.4rem,7vw,5rem)] leading-[0.95] text-cream">
              {project.title}
            </h1>
            <p className="serif mt-3 max-w-2xl text-[clamp(1.15rem,2.5vw,1.75rem)] italic text-rose-soft">
              {project.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag-chip rounded-full px-4 py-2 text-[11px] font-medium tracking-wide text-cream/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rose/50 to-transparent"
          aria-hidden
        />
      </section>

      {/* Overview */}
      <section className="relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div className="container-page relative z-10 py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
                  Overview
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-cream/90 sm:text-lg">
                  {project.description}
                </p>

                {project.challenge && (
                  <div className="glass mt-8 rounded-2xl p-6 sm:p-7">
                    <h2 className="display text-lg tracking-wide text-cream">
                      The challenge
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.approach && (
                  <div className="glass mt-4 rounded-2xl p-6 sm:p-7">
                    <h2 className="display text-lg tracking-wide text-cream">
                      Approach
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {project.approach}
                    </p>
                  </div>
                )}
              </Reveal>

              {project.sections && project.sections.length > 0 && (
                <div className="mt-10 space-y-8">
                  {project.sections.map((section, i) => (
                    <Reveal key={section.heading} delay={i * 70}>
                      <article className="border-l-2 border-rose/40 pl-5">
                        <h3 className="display text-xl text-cream">
                          {section.heading}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted">
                          {section.body}
                        </p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              )}

              <Reveal className="mt-10">
                <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
                  Deliverables &amp; outcomes
                </p>
                <ul className="mt-4 grid gap-3">
                  {(project.outcomes ?? project.points).map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 rounded-xl border border-white/8 bg-ink-2/60 px-4 py-3.5 text-[15px] leading-relaxed text-muted transition hover:border-rose/30 hover:text-cream"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <Reveal delay={100} className="space-y-4 lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-2xl border border-white/12 bg-ink-3">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} visual`}
                      width={900}
                      height={560}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="h-auto w-full object-cover object-top"
                    />
                  ) : (
                    <div className="mesh-bg flex min-h-[240px] items-center justify-center p-8">
                      <span className="display text-2xl text-cream/60">{project.title}</span>
                    </div>
                  )}
                </div>

                <div className="glass rounded-2xl p-6">
                  <h2 className="display text-sm tracking-[0.18em] text-cream">
                    Project facts
                  </h2>
                  <dl className="mt-4 space-y-3">
                    {meta.map((row) => (
                      <div
                        key={row.k}
                        className="flex items-start justify-between gap-4 border-b border-white/8 pb-3 last:border-0 last:pb-0"
                      >
                        <dt className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                          {row.k}
                        </dt>
                        <dd className="text-right text-[14px] font-medium text-cream">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {project.tools && project.tools.length > 0 && (
                    <div className="mt-5">
                      <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                        Tools &amp; methods
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-white/12 px-3 py-1.5 text-[11px] text-cream/85"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex flex-col gap-3">
                    {project.prototypeUrl && (
                      <a
                        href={project.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary display rounded-full px-6 py-3.5 text-center text-xs tracking-[0.16em] text-white"
                      >
                        Open Figma Prototype →
                      </a>
                    )}
                    <Link
                      href="/contact"
                      className="btn-ghost rounded-full border border-white/15 px-6 py-3.5 text-center text-xs font-semibold tracking-[0.14em] text-cream"
                    >
                      Discuss a similar project →
                    </Link>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="relative overflow-hidden border-t border-white/10">
          <div className="grid-lines pointer-events-none absolute inset-0" />
          <div className="container-page relative z-10 py-14 sm:py-20">
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
                Gallery
              </p>
              <h2 className="display mt-3 text-[clamp(1.6rem,4vw,2.5rem)] text-cream">
                Selected pages &amp; frames
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, i) => (
                <Reveal
                  key={img.src}
                  delay={(i % 3) * 70}
                  className={img.span === "wide" ? "sm:col-span-2" : undefined}
                >
                  <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-3">
                    <Image
                      src={img.src}
                      alt={img.caption ?? `${project.title} — image ${i + 1}`}
                      width={834}
                      height={1180}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    {img.caption && (
                      <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-[12px] font-medium tracking-wide text-cream opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      {next && (
        <section className="relative overflow-hidden border-t border-white/10 mesh-bg">
          <div className="container-page relative z-10 py-16 text-center sm:py-20">
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
                Next project
              </p>
              <Link
                href={`/work/${next.id}`}
                className="group mt-4 inline-block"
              >
                <span className="display block text-[clamp(1.8rem,5vw,3.5rem)] leading-none text-cream transition duration-300 group-hover:text-gradient-rose group-hover:tracking-wide">
                  {next.title}
                </span>
                <span className="serif mt-2 block text-lg italic text-rose-soft">
                  {next.subtitle} →
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <StatusBar />
    </main>
  );
}
