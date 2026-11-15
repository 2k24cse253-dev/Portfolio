import Nav from "@/components/Nav";
import StatusBar from "@/components/StatusBar";
import Reveal from "@/components/Reveal";
import Backdrop from "@/components/Backdrop";
import { profile } from "@/data/content";
import { fashionImages } from "@/data/images";

export const metadata = {
  title: "Contact — Varshinie A. R.",
};

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    external: true,
  },
  {
    label: "Behance",
    value: profile.behanceLabel,
    href: profile.behance,
    external: true,
  },
];

export default function ContactPage() {
  const mailto = `mailto:${profile.email}?subject=Portfolio%20enquiry%20for%20Varshinie%20A.%20R.&body=Hi%20Varshinie%2C%0A%0AI%20came%20across%20your%20portfolio...`;

  return (
    <main className="min-h-screen">
      <Nav />

      <section className="relative min-h-[100svh] overflow-hidden">
        <Backdrop
          src={fashionImages.atelier}
          position="center 25%"
          overlay="bg-[linear-gradient(180deg,rgba(10,7,8,0.92)_0%,rgba(10,7,8,0.84)_45%,rgba(10,7,8,0.96)_100%)]"
        />
        <div className="container-page relative z-10 pt-32 pb-20 sm:pt-40">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.24em] text-rose uppercase">
              Contact
            </p>
            <h1 className="display mt-3 text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.92] text-cream">
              Let&apos;s work
              <br />
              <span className="text-gradient-rose">together</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
              Open to styling commissions, brand collaborations, internship placements and
              full-time opportunities. Based in Salem, Tamil Nadu — open to relocation.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-2/85 p-6 backdrop-blur-md sm:p-8">
                <h2 className="text-[12px] font-bold tracking-[0.18em] text-rose uppercase">
                  Reach directly
                </h2>
                <ul className="mt-6 grid flex-1 content-start gap-4">
                  {channels.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 px-5 py-4 transition hover:border-rose/40 hover:bg-white/[0.03]"
                      >
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                            {c.label}
                          </p>
                          <p className="mt-1 break-all text-[15px] text-cream group-hover:text-rose-soft">
                            {c.value}
                          </p>
                        </div>
                        <span className="shrink-0 text-rose transition group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-rose-deep/30 via-ink-2/90 to-ink-2/90 p-6 backdrop-blur-md sm:p-8">
                <h2 className="text-[12px] font-bold tracking-[0.18em] text-rose uppercase">
                  Start a conversation
                </h2>
                <p className="serif mt-4 text-2xl italic leading-snug text-cream">
                  Have a campaign, lookbook or brand story that needs a stylist&apos;s eye?
                </p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                  Send a short brief — timeline, scope and references help me reply with the
                  right ideas and availability.
                </p>
                <a
                  href={mailto}
                  className="display mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-rose px-7 py-4 text-xs tracking-[0.16em] text-white transition hover:brightness-110"
                >
                  Write an Email →
                </a>
                <p className="mt-5 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                  {profile.location} · {profile.openTo}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatusBar />
    </main>
  );
}
