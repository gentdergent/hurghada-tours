"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Tour } from "@/lib/tours";
import { whatsappLink } from "@/lib/config";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type Props = {
  tour: Tour;
  index?: number;
  /** Tall variant = taller aspect ratio for masonry rhythm. */
  tall?: boolean;
};

/**
 * Tour card with "Double-Bezel" architecture: outer shell (bg tint + ring)
 * wraps a concentric inner content radius for a machined hardware feel.
 * Lifts on hover with a tinted diffuse shadow.
 */
export function TourCard({ tour, index = 0, tall = false }: Props) {
  return (
    <RevealOnScroll delay={index * 0.08}>
      <article className="group relative">
        <a
          href={whatsappLink(
            `Hallo, ich hätte Fragen zur Tour "${tour.title}". Könnt ihr mir mehr Infos schicken?`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
        >
          {/* Outer bezel */}
          <div className="relative p-1.5 md:p-2 rounded-[2.25rem] bg-[var(--color-ink)]/[0.04] ring-1 ring-[var(--color-ink)]/[0.06] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[3px] group-hover:bg-[var(--color-ember)]/[0.08] group-hover:ring-[var(--color-ember)]/20 group-hover:shadow-[0_40px_80px_-30px_rgba(168,88,48,0.35)]">
            {/* Inner core — concentric radius */}
            <div
              className={`relative overflow-hidden rounded-[calc(2.25rem-0.375rem)] md:rounded-[calc(2.25rem-0.5rem)] bg-[var(--color-paper-warm)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] ${
                tall ? "aspect-[3/4]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={tour.image}
                alt={`${tour.title} — ${tour.categoryLabel}`}
                fill
                sizes="(min-width: 1280px) 42vw, (min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />

              {/* Readability gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)]/25 via-transparent via-50% to-[var(--color-ink)]/85" />

              {/* Category chip */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1.5 rounded-full bg-[var(--color-paper)]/92 backdrop-blur-md text-[var(--color-ink)] border border-[var(--color-paper)]/40">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-ember)]" />
                  {tour.categoryLabel}
                </span>
              </div>

              {/* Price tag */}
              <div className="absolute top-5 right-5">
                <div className="bg-[var(--color-paper)]/92 backdrop-blur-md rounded-full px-4 py-1.5 flex items-baseline gap-1 border border-[var(--color-paper)]/40">
                  <span className="text-[10px] text-[var(--color-ink-subtle)] uppercase tracking-wider">
                    ab
                  </span>
                  <span className="nums font-display text-lg font-semibold text-[var(--color-ink)] leading-none">
                    €{tour.priceFrom}
                  </span>
                </div>
              </div>

              {/* Title block */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-paper)]/80 mb-3 nums">
                  {tour.duration}
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-paper)] leading-[1.02] tracking-[-0.02em] text-balance">
                  {tour.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Summary + CTA below card */}
          <div className="pt-7 px-2 md:px-3 flex items-start justify-between gap-6">
            <p className="text-sm md:text-[15px] text-[var(--color-ink-muted)] leading-relaxed max-w-md">
              {tour.summary}
            </p>
            <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full border border-[var(--color-ink-line)] flex items-center justify-center text-[var(--color-ink)] group-hover:bg-[var(--color-ember)] group-hover:text-[var(--color-paper)] group-hover:border-[var(--color-ember)] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-45">
              <ArrowUpRight size={18} weight="regular" />
            </div>
          </div>
        </a>
      </article>
    </RevealOnScroll>
  );
}
