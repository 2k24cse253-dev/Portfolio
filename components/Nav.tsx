"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-300 ${
          scrolled
            ? "border-white/12 bg-ink/85 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-white/8 bg-ink/40 backdrop-blur-md"
        }`}
      >
        <Link
          href="/"
          aria-label="Home"
          className="mr-1 flex h-9 w-9 items-center justify-center rounded-full bg-rose text-sm font-bold text-white transition hover:brightness-110"
        >
          V
        </Link>
        {links.map((l) => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`hidden rounded-full px-4 py-2 text-[13px] font-medium transition sm:block ${
                active
                  ? "bg-white/10 text-cream"
                  : "text-muted hover:bg-white/5 hover:text-cream"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-cream transition hover:bg-white/10 sm:hidden"
        >
          <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-16 rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-2xl backdrop-blur-xl sm:hidden">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                  active ? "bg-rose/15 text-rose-soft" : "text-muted hover:bg-white/5 hover:text-cream"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
