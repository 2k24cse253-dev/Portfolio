import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import StatusBar from "@/components/StatusBar";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";
import { projects } from "@/data/content";
import { fashionImages } from "@/data/images";

export const metadata = {
  title: "Work — Varshinie A. R.",
};

export default function WorkPage() {
  const featured = projects.filter((p) => p.featured && (p.image || p.prototypeUrl));
  const rest = projects.filter((p) => !featured.includes(p));

  return (
    <main className="min-h-screen">
      <Nav />

      <section className="relative overflow-hidden border-b border-white/10">
        <Backdrop
          src={fashionImages.runway}
          position="center 25%"
          overlay="bg-[linear-gradient(180deg,rgba(10,7,8,0.9)_0%,rgba(10,7,8,0.78)_40%,rgba(10,7,8,0.97)_100%)]"
        />
        <div
          className="pointer-events-none absolute -left-16 top-20 h-56 w-56 rounded-full bg-rose/12 blur-[80px] animate-float"
          aria-hidden
        />
        <div className="container-page relative z-10 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
              Portfolio
            </p>
            <h1 className="display mt-3 text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.92] text-cream">
              Selected
              <br />
              <span className="text-gradient-rose">Work</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
              Brand concepts, editorial styling, research-led graduation work and cultural
              collections — a cross-section of styling, strategy and design practice.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary display rounded-full px-6 py-3.5 text-xs tracking-[0.16em] text-white"
              >
                Work with me →
              </Link>
              <Link
                href="/about"
                className="btn-ghost rounded-full border border-white/15 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-cream"
              >
                About Varshinie →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <Backdrop
          src={fashionImages.fabric}
          position="center"
          overlay="bg-[linear-gradient(180deg,rgba(10,7,8,0.97)_0%,rgba(10,7,8,0.9)_45%,rgba(10,7,8,0.97)_100%)]"
          quality={70}
        />
        <div className="container-page relative z-10 py-14 sm:py-20">
          {featured.map((p) => (
            <Reveal key={`feature-${p.id}`} className="mb-12">
              <div
                id={`${p.id}-feature`}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/12 bg-ink-2/85 transition duration-500 hover:border-rose/35"
              >
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="relative min-h-[280px] overflow-hidden bg-ink-3">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`${p.title} visual`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="absolute inset-0 mesh-bg flex items-center justify-center p-8">
                        <span className="display text-2xl text-cream/60">{p.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-rose uppercase">
                      {p.upcoming ? "Upcoming" : "Featured"} · {p.year}
                    </p>
                    <h2 className="display mt-3 text-3xl text-cream sm:text-4xl">
                      {p.title}
                    </h2>
                    <p className="serif mt-1 text-xl italic text-rose-soft">
                      {p.subtitle}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">
                      {p.description}
                    </p>
                    <ul className="mt-5 grid gap-2">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex gap-3 text-[14px] leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        href={`/work/${p.id}`}
                        className="btn-primary display rounded-full px-6 py-3.5 text-xs tracking-[0.16em] text-white"
                      >
                        Full case study →
                      </Link>
                      {p.prototypeUrl && (
                        <a
                          href={p.prototypeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost rounded-full border border-white/15 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-cream"
                        >
                          Figma Prototype ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((p, i) => (
              <div key={p.id} id={p.id} className="h-full scroll-mt-28">
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatusBar />
    </main>
  );
}
