"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

/**
 * SSR-safe reveal: renders fully visible server-side, then on client hydration
 * snaps to hidden state and fades back in when in-viewport. If JS never runs
 * (or IntersectionObserver is broken by Lenis/smooth-scroll timing), content
 * stays visible — no white page.
 */
export function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  y = 32,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hydrated, setHydrated] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Intentional post-mount hydration flip — see component doc above.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);

    // Safety net: if IntersectionObserver never fires (e.g. Lenis edge cases),
    // reveal after a short delay so content is never permanently hidden.
    const fallback = window.setTimeout(() => setVisible(true), 800);

    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
          window.clearTimeout(fallback);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    );

    io.observe(el);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  // Hidden state only applies AFTER hydration. SSR + no-JS = visible.
  const isHidden = hydrated && !visible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isHidden ? 0 : 1,
        transform: isHidden ? `translate3d(0, ${y}px, 0)` : "translate3d(0, 0, 0)",
        transition: `opacity 900ms cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 900ms cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: isHidden ? "opacity, transform" : undefined,
      }}
    >
      {children}
    </div>
  );
}
