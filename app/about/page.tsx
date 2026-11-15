import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import StatusBar from "@/components/StatusBar";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";
import {
  achievements,
  education,
  experience,
  profile,
  skills,
} from "@/data/content";
import { fashionImages } from "@/data/images";

export const metadata = {
  title: "About — Varshinie A. R.",
};

const principles = [
  {
    n: "01",
    title: "Research first",
    text: "User-centred research and visual research ground every styling decision — so the story holds up beyond the frame.",
  },
  {
    n: "02",
    title: "Craft in detail",
    text: "Garment construction, drape and fit are studied up close. The small decisions are what read as premium on camera and on shelf.",
  },
  {
    n: "03",
    title: "Brand as system",
    text: "Styling is treated as brand strategy — touchpoints, content and identity speaking one clear voice.",
  },
];

const metrics = [
  { value: "03", label: "Internships" },
  { value: "04+", label: "Projects" },
  { value: "'25", label: "Show prize" },
  { value: "NIFT", label: "M.Des · Kangra" },
];

export default function AboutPage() {
  return (
    <main className="relative grain overflow-hidden">
      <Nav />

      {/* ── Premium hero ── */}
      <section className="mesh-bg relative overflow-hidden border-b border-white/8">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute -right-8 top-24 select-none"
          data-parallax={80}
          aria-hidden
        >
          <span className="display text-outline block text-[22vw] leading-none opacity-60">
            About
          </span>
        </div>

        <div className="container-page relative z-10 grid items-end gap-12 pt-32 pb-16 sm:pt-40 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
                <span className="h-px w-10 bg-rose/60" />
                Profile
              </p>
              <h1 className="display mt-4 text-[clamp(2.4rem,7vw,4.6rem)] leading-[0.95] text-cream">
                Varshinie <span className="text-gradient-rose">A. R.</span>
              </h1>
              <p className="serif mt-4 max-w-xl text-xl italic leading-snug text-rose-soft sm:text-2xl">
                Brand stylist &amp; strategist shaping how garments are seen, felt and
                remembered.
              </p>
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
                {profile.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="display rounded-full bg-rose px-6 py-3.5 text-xs tracking-[0.16em] text-white transition hover:brightness-110"
                >
                  Email Me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-cream transition hover:border-white/35 hover:bg-white/5"
                >
                  LinkedIn
                </a>
                <Link
                  href="/work"
                  className="rounded-full border border-white/15 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-cream transition hover:border-white/35 hover:bg-white/5"
                >
                  View Work
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100} className="mt-10">
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="glass rounded-2xl px-4 py-4 text-center"
                  >
                    <dt className="display text-gradient-rose text-2xl leading-none sm:text-3xl">
                      {m.value}
                    </dt>
                    <dd className="mt-2 text-[10px] font-semibold tracking-[0.16em] text-muted uppercase">
                      {m.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:col-span-5 lg:justify-self-end">
            <div className="mx-auto w-full max-w-[420px] lg:mx-0">
              <div className="photo-frame" data-parallax={40}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-ink-3">
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-rose uppercase">
                      Based in
                    </p>
                    <p className="mt-1 text-lg font-semibold text-cream">
                      {profile.location}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{profile.openTo}</p>
                  </div>
                </div>
                <span className="tag-chip absolute -left-4 top-8 hidden rounded-full px-3.5 py-2 text-[11px] font-semibold text-rose-soft sm:block">
                  M.Des · 2025–27
                </span>
                <span className="tag-chip absolute -right-3 bottom-24 hidden rounded-full px-3.5 py-2 text-[11px] font-semibold text-amber sm:block">
                  Stylist · Strategist
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="relative overflow-hidden border-b border-white/8 bg-ink-2/40">
        <div className="container-page relative z-10 py-16 sm:py-24">
          <Reveal className="section-head">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
                Approach
              </p>
              <h2 className="display mt-3 text-[clamp(1.6rem,4vw,2.6rem)] text-cream">
                How I work
              </h2>
            </div>
            <span className="section-link text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
              Research · Craft · Brand
            </span>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className="h-full">
                <article className="glass group h-full rounded-3xl p-7 transition duration-300 hover:border-rose/35">
                  <span className="display text-outline-rose text-4xl">{p.n}</span>
                  <h3 className="mt-6 text-lg font-semibold text-cream">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.text}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-rose/50 via-white/10 to-transparent" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience timeline ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" data-parallax={50}>
          <Backdrop
            src={fashionImages.sampling}
            position="center"
            overlay="bg-[linear-gradient(180deg,rgba(10,7,8,0.97)_0%,rgba(10,7,8,0.92)_50%,rgba(10,7,8,0.97)_100%)]"
            quality={70}
          />
        </div>

        <div className="container-page relative z-10 py-16 sm:py-24">
          <Reveal className="section-head">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
                Path
              </p>
              <h2 className="display mt-3 text-[clamp(1.6rem,4vw,2.6rem)] text-cream">
                Experience
              </h2>
            </div>
            <span className="section-link text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
              2022 — 2026
            </span>
          </Reveal>

          <div className="relative mt-12 pl-6 sm:pl-10">
            <div className="timeline-rail absolute left-0 top-0 h-full w-px" />
            <div className="grid gap-6">
              {experience.map((job, i) => (
                <Reveal key={`${job.company}-${i}`} delay={i * 90}>
                  <article className="relative glass rounded-3xl p-6 sm:p-8">
                    <span className="absolute -left-[calc(1.5rem+4px)] top-8 h-2.5 w-2.5 rounded-full bg-rose shadow-[0_0_0_4px_rgba(255,45,85,0.25)] sm:-left-[calc(2.5rem+4px)]" />
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.16em] text-rose uppercase">
                          {job.company}
                        </p>
                        <h3 className="mt-1.5 text-xl font-semibold text-cream">
                          {job.role}
                        </h3>
                      </div>
                      <span className="rounded-full border border-white/12 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-5 grid gap-2.5">
                      {job.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex gap-3 text-[15px] leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="mesh-bg relative overflow-hidden border-y border-white/8">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
        <div className="container-page relative z-10 py-16 sm:py-24">
          <Reveal className="section-head">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
                Toolkit
              </p>
              <h2 className="display mt-3 text-[clamp(1.6rem,4vw,2.6rem)] text-cream">
                Skills
              </h2>
            </div>
            <span className="section-link text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
              Four practice areas
            </span>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {skills.map((group, i) => (
              <Reveal key={group.category} delay={i * 70} className="h-full">
                <div className="glass h-full rounded-3xl p-6">
                  <div className="flex items-center justify-between">
                    <span className="display text-outline text-3xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-rose" />
                  </div>
                  <h3 className="mt-5 text-[12px] font-bold tracking-[0.14em] text-rose-soft uppercase">
                    {group.category}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-[12px] text-muted transition hover:border-rose/40 hover:text-cream"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements + Education ── */}
      <section className="relative overflow-hidden bg-ink-2/30">
        <div
          className="pointer-events-none absolute left-0 top-10 select-none"
          data-parallax={60}
          aria-hidden
        >
          <span className="display text-outline block text-[18vw] leading-none opacity-50">
            Merit
          </span>
        </div>

        <div className="container-page relative z-10 grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <div className="section-head">
                <h2 className="display text-[clamp(1.6rem,4vw,2.6rem)] text-cream">
                  Achievements
                </h2>
              </div>
            </Reveal>
            <ul className="mt-8 grid gap-4">
              {achievements.map((a, i) => (
                <Reveal key={a} delay={i * 70}>
                  <li className="glass group flex gap-5 rounded-3xl p-6 transition hover:border-rose/35">
                    <span className="display text-gradient-rose text-2xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-relaxed text-muted group-hover:text-cream">
                      {a}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <div className="section-head">
                <h2 className="display text-[clamp(1.6rem,4vw,2.6rem)] text-cream">
                  Education
                </h2>
              </div>
            </Reveal>
            <ul className="mt-8 grid gap-4">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 70}>
                  <li className="glass rounded-3xl p-6 transition hover:border-rose/35">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <h3 className="font-semibold text-cream">{e.degree}</h3>
                      <span className="rounded-full border border-white/12 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
                        {e.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-rose-soft">{e.school}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div data-parallax={70} className="absolute inset-0">
          <Backdrop
            src={fashionImages.editorial}
            position="center 30%"
            overlay="bg-[linear-gradient(90deg,rgba(10,7,8,0.95)_0%,rgba(10,7,8,0.85)_55%,rgba(196,18,63,0.35)_100%)]"
          />
        </div>
        <div className="container-page relative z-10 py-20 sm:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
              Next
            </p>
            <h2 className="display mt-3 text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.05] text-cream">
              Let&apos;s build a brand story worth{" "}
              <span className="serif italic text-rose-soft">stopping for.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="display rounded-full bg-rose px-7 py-4 text-xs tracking-[0.16em] text-white transition hover:brightness-110"
              >
                Get in Touch →
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-white/20 px-7 py-4 text-xs font-semibold tracking-[0.14em] text-cream transition hover:border-white/40 hover:bg-white/5"
              >
                See Projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <StatusBar />
    </main>
  );
}
