"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const WelcomeScene = dynamic(() => import("./WelcomeScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-[11px] tracking-[0.3em] text-rose uppercase">
        Preparing welcome…
      </span>
    </div>
  ),
});

const STORAGE_KEY = "varshinie_welcome_seen";

export default function WelcomeGate() {
  const [phase, setPhase] = useState<"loading" | "ready" | "exit" | "done">(
    "loading"
  );

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setPhase("done");
        return;
      }
    } catch {
      /* ignore */
    }
    const t = window.setTimeout(() => setPhase("ready"), 400);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;
    const t = window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setPhase("done");
      window.scrollTo(0, 0);
    }, 900);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink transition-opacity duration-700 ${
        phase === "exit" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome"
    >
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <WelcomeScene />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-6 py-10 text-center sm:py-12">
        <div
          className={`transition-all duration-700 delay-100 ${
            phase === "ready"
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <p className="text-[10px] font-semibold tracking-[0.35em] text-amber/90 uppercase sm:text-[11px]">
            Traditional welcome
          </p>
          <p
            className="serif mt-2 text-[clamp(2.2rem,7vw,3.6rem)] leading-none text-cream"
            lang="hi"
          >
            नमस्ते
          </p>
        </div>

        <div
          className={`pointer-events-none max-w-lg transition-all duration-700 delay-200 ${
            phase === "ready"
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-rose/70 to-transparent" />
          <p className="text-[11px] font-semibold tracking-[0.28em] text-rose uppercase">
            You are welcome
          </p>
          <h1 className="display mt-3 text-[clamp(1.6rem,5vw,2.6rem)] leading-[1.05] text-cream">
            Welcome to
            <br />
            <span className="text-gradient-rose">{profile.name}</span>
          </h1>
          <p className="serif mx-auto mt-3 max-w-sm text-base italic text-muted sm:text-lg">
            Brand · Strategy · Fashion Styling
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 text-[10px] tracking-[0.2em] text-cream/55 uppercase">
            <span className="h-px w-8 bg-white/20" />
            {profile.location} · {profile.openTo}
            <span className="h-px w-8 bg-white/20" />
          </div>
        </div>

        <div
          className={`flex flex-col items-center gap-4 transition-all duration-700 delay-300 ${
            phase === "ready"
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <button
            type="button"
            disabled={phase !== "ready"}
            onClick={() => setPhase("exit")}
            className="btn-primary display group relative overflow-hidden rounded-full px-10 py-4 text-xs tracking-[0.2em] text-white"
          >
            <span className="relative z-10">Enter Portfolio →</span>
            <span className="btn-shine" aria-hidden />
          </button>
          <p className="text-[10px] tracking-[0.22em] text-cream/40 uppercase">
            Handcrafted experience · Scroll heavy
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 border border-white/5" />
      <div
        className={`pointer-events-none absolute bottom-6 left-1/2 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-rose/60 to-transparent ${
          phase === "ready" ? "animate-pulse-dot" : "opacity-0"
        }`}
      />
      <Link
        href="/work"
        className="pointer-events-none absolute opacity-0"
        tabIndex={-1}
        aria-hidden
      >
        work
      </Link>
    </div>
  );
}
