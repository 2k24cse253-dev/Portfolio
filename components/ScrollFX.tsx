"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global scroll-driven effects (GSAP ScrollTrigger + Lenis sync).
 * Elements:
 *  - [data-parallax]           → translateY by data-parallax (px)
 *  - [data-scroll-scale]       → scale from data-from → 1
 *  - [data-scroll-opacity]     → opacity 0 → 1
 *  - [data-scroll-x]           → translateX by data-scroll-x (px)
 *  - [data-scroll-rotate]      → rotate by data-scroll-rotate (deg)
 */
export default function ScrollFX() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const y = Number(el.dataset.parallax || 60);
        gsap.fromTo(
          el,
          { y: -y * 0.35 },
          {
            y: y,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-scale]").forEach((el) => {
        const from = Number(el.dataset.scrollScale || 0.88);
        gsap.fromTo(
          el,
          { scale: from },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 35%",
              scrub: 0.6,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-opacity]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              end: "top 55%",
              scrub: 0.5,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-x]").forEach((el) => {
        const x = Number(el.dataset.scrollX || 80);
        gsap.fromTo(
          el,
          { x: -x },
          {
            x: x,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-rotate]").forEach((el) => {
        const r = Number(el.dataset.scrollRotate || 8);
        gsap.fromTo(
          el,
          { rotate: -r },
          {
            rotate: r,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    });

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return null;
}
