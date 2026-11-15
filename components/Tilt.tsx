"use client";

import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  max?: number;
};

export default function Tilt({ children, className = "", max = 6 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${px * max * 2}deg) rotateX(${-py * max * 2}deg) translateZ(0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div className={`perspective ${className}`}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="preserve-3d h-full w-full transition-transform duration-300 ease-out"
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
