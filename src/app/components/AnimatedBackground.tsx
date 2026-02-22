"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const spansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (spansRef.current) {
            const scrollY = window.scrollY;
            const spans = spansRef.current.children;
            for (let i = 0; i < spans.length; i++) {
              const span = spans[i] as HTMLElement;
              const speed = 0.15 + (i * 0.03);
              span.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02}deg)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="background" ref={spansRef} aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
