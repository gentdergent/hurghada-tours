"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { site, whatsappLink } from "@/lib/config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-paper)]/85 backdrop-blur-md border-b border-[var(--color-ink-line)]/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-[0.75rem] overflow-hidden shadow-[0_8px_24px_-8px_rgba(24,52,84,0.4)] ring-1 ring-white/20">
            <Image src="/logo.jpg" alt="My Excursion Club" width={44} height={44} className="object-cover w-full h-full" />
          </div>
          <div
            className={`transition-colors duration-300 ${
              scrolled ? "text-[var(--color-ink)]" : "text-[var(--color-paper)]"
            }`}
          >
            <div className="font-display text-xl font-semibold leading-none tracking-tight">
              {site.brandName}
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.2em] mt-1 transition-colors duration-300 ${
                scrolled
                  ? "text-[var(--color-ink-subtle)]"
                  : "text-[var(--color-paper)]/70"
              }`}
            >
              Hurghada · Red Sea
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {[
            ["Touren", "#touren"],
            ["Erlebnisse", "#erlebnisse"],
            ["Vertrauen", "#vertrauen"],
            ["Kontakt", "#kontakt"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-[var(--color-ink-muted)] hover:text-[var(--color-ember)]"
                  : "text-[var(--color-paper)]/85 hover:text-[var(--color-paper)]"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Hallo, ich interessiere mich für eure Touren.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--color-ember)] hover:bg-[var(--color-ember-deep)] text-[var(--color-ink)] px-5 py-2.5 text-sm font-medium shadow-[0_10px_30px_-10px_rgba(212,160,48,0.5)] transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
        >
          <WhatsappLogo weight="fill" size={16} />
          Schreiben
        </a>
      </div>
    </header>
  );
}
