import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Nav from "@/components/Nav";
import StatusBar from "@/components/StatusBar";
import Backdrop from "@/components/Backdrop";
import WelcomeGate from "@/components/welcome/WelcomeGate";
import { profile, projects } from "@/data/content";
import { fashionImages } from "@/data/images";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="grain relative overflow-hidden">
      <WelcomeGate />
      <Nav />
      <Hero />
      <Marquee />

      {/* Selected work — watermark + parallax fabric band */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-x-0 top-6 select-none overflow-hidden"
          data-parallax={100}
          aria-hidden
        >
          <span className="display text-outline block text-center text-[16vw] leading-none">
            Work
          </span>
        </div>
        <div
          className="pointer-events-none absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-rose/12 blur-[100px] animate-float"
        />

        <div className="container-page relative z-10 py-20 sm:py-28">
          <Reveal className="section-head">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
                <span className="h-px w-10 bg-rose/60" />
                Selected Work
              </p>
              <h2 className="display mt-3 text-[clamp(2rem,5vw,3.4rem)] leading-none text-cream">
                Projects &amp; Concepts
              </h2>
            </div>
            <Link
              href="/work"
              className="btn-ghost section-link rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-muted uppercase"
            >
              View all →
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((p, i) => (
              <div key={p.id} data-scroll-scale className="h-full">
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-28 overflow-hidden sm:h-40" data-parallax={30}>
          <Backdrop
            src={fashionImages.fabric}
            position="center 40%"
            overlay="bg-[linear-gradient(180deg,rgba(10,7,8,0.75)_0%,rgba(10,7,8,0.35)_50%,rgba(10,7,8,0.95)_100%)]"
            quality={70}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="display text-[clamp(1.2rem,3vw,2rem)] tracking-[0.35em] text-cream/85 uppercase"
              data-scroll-x={60}
            >
              Styling · Strategy · Story
            </p>
          </div>
        </div>
      </section>

      {/* About strip — glass panel over editorial parallax */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" data-parallax={80}>
          <Backdrop
            src={fashionImages.editorial}
            position="center 25%"
            overlay="bg-[linear-gradient(100deg,rgba(10,7,8,0.97)_0%,rgba(10,7,8,0.9)_45%,rgba(196,18,63,0.28)_100%)]"
          />
        </div>
        <div
          className="pointer-events-none absolute -left-20 bottom-0 select-none"
          aria-hidden
          data-parallax={50}
        >
          <span className="display text-outline block text-[14vw] leading-none">
            Styling
          </span>
        </div>

        <div className="container-page relative z-10 py-20 sm:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <div className="glass rounded-3xl p-7 sm:p-10">
                <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
                  <span className="h-px w-10 bg-rose/60" />
                  About
                </p>
                <h2 className="display mt-4 text-[clamp(1.7rem,4vw,2.9rem)] leading-[1.08] text-cream">
                  Styling that shapes how brands are{" "}
                  <span className="serif italic text-rose-soft">
                    seen, felt and remembered.
                  </span>
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted">
                  {profile.summary}
                </p>
                <Link
                  href="/about"
                  className="btn-primary display mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs tracking-[0.16em] text-white"
                >
                  My Story →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <div className="grid gap-4">
                {[
                  { k: "Based", v: profile.location },
                  { k: "Open to", v: profile.openTo },
                  { k: "Focus", v: "Brand & editorial styling" },
                  { k: "Studying", v: "M.Des, NIFT Kangra" },
                ].map((row) => (
                  <div
                    key={row.k}
                    data-scroll-x={40}
                    className="glass flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition duration-300 hover:border-rose/30 hover:shadow-[0_12px_40px_rgba(255,45,85,0.08)]"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
                      {row.k}
                    </span>
                    <span className="text-right text-[15px] font-medium text-cream">
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="mesh-bg relative overflow-hidden border-t border-white/8">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute left-1/4 top-10 h-48 w-48 rounded-full bg-amber/10 blur-[80px] animate-float"
          aria-hidden
        />
        <div className="container-page relative z-10 py-20 text-center sm:py-28">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
              Contact
            </p>
            <h2 className="display mx-auto mt-4 max-w-3xl text-[clamp(1.8rem,5vw,3.4rem)] leading-[1.05] text-cream">
              Available for collaborations &amp;{" "}
              <span className="text-gradient-rose">internships</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="btn-primary display rounded-full px-7 py-4 text-xs tracking-[0.16em] text-white"
              >
                Start a Conversation →
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="btn-ghost rounded-full border border-white/15 px-7 py-4 text-xs font-semibold tracking-[0.14em] text-cream"
              >
                {profile.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <StatusBar />
    </main>
  );
}
