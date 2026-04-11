import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  WhatsappLogo,
  Translate,
  Coins,
  Clock,
  Car,
  Medal,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TourCard } from "@/components/TourCard";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { site, whatsappLink } from "@/lib/config";
import {
  featuredTours,
  categories,
  tours,
  HERO_IMAGE,
  CONTACT_IMAGE,
} from "@/lib/tours";

const promises = [
  {
    icon: Translate,
    title: "Deutschsprachige Guides",
    copy: "Kein Rate-Spiel, keine Sprachbarrieren. Unsere Guides sprechen Deutsch oder Englisch, erklären, was ihr wirklich seht.",
  },
  {
    icon: Coins,
    title: "Festpreis, alles inklusive",
    copy: "Transfer, Eintritt, Mittagessen, Guide — der Preis den ihr seht, ist der Preis den ihr zahlt. Keine Tricks vor Ort.",
  },
  {
    icon: Clock,
    title: "Antwort in unter 5 Minuten",
    copy: "Schreibt uns auf WhatsApp — wir antworten auch am Wochenende, auch abends, auch wenn ihr schon auf dem Boot sitzt.",
  },
  {
    icon: Car,
    title: "Abholung vom Hotel",
    copy: "Egal ob Makadi Bay, El Gouna oder Sahl Hasheesh — wir holen euch direkt ab und bringen euch zurück.",
  },
  {
    icon: Medal,
    title: "Bestpreis, sonst Bonus",
    copy: "Findet ihr die gleiche Tour günstiger, matchen wir den Preis und geben euch zusätzlich einen Boot-Drink aufs Haus.",
  },
  {
    icon: CheckCircle,
    title: "Vor Ort persönlich geprüft",
    copy: "Jede Tour haben wir selbst gebucht, bevor wir sie euch empfehlen. Wir wissen, welcher Kapitän pünktlich ist.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <WhatsAppFab />
      <main className="relative">
        {/* ===================================================================
            HERO — Full-bleed editorial. Massive serif + hero image + stats strip
            =================================================================== */}
        <section className="relative min-h-[100dvh] bg-[var(--color-ink)] overflow-hidden">
          {/* Hero image */}
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="Rotes Meer bei Hurghada in der Morgendämmerung"
              fill
              priority
              sizes="100vw"
              className="object-cover ken-burns"
            />
            {/* Layered gradients: darken top for header, heavy bottom for text */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)]/55 via-transparent to-[var(--color-ink)]/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/70 via-[var(--color-ink)]/20 to-transparent" />
          </div>

          {/* Content stack — left-aligned, bottom-anchored, asymmetric */}
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-36 md:pt-44 pb-12 md:pb-16 min-h-[100dvh] flex flex-col justify-end">
            <div className="max-w-[52rem] rise">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
                <span className="w-10 h-px bg-[var(--color-ember)]" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-ember)] font-medium">
                  Ab Hurghada · seit 2016
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-[clamp(3rem,7.5vw,7rem)] font-medium leading-[0.92] tracking-[-0.02em] text-[var(--color-paper)] text-balance mb-6 md:mb-8">
                Das echte Ägypten.
                <br />
                <em className="italic font-normal text-[var(--color-ember)]">
                  Ohne&nbsp;das&nbsp;Drumherum.
                </em>
              </h1>

              {/* Subcopy */}
              <p className="text-base md:text-xl text-[var(--color-paper)]/80 leading-relaxed max-w-xl mb-8 md:mb-12 text-balance">
                Tauchen, Luxor, Wüste, Pyramiden — ein handverlesener Katalog,
                ein Ansprechpartner, Beratung auf Deutsch. Wir vermitteln nicht
                an Dritte: wir kennen jeden Guide persönlich.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="#touren"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-ember)] hover:bg-[var(--color-ember-deep)] text-[var(--color-ink)] px-8 py-4 text-sm md:text-base font-medium transition-all duration-500 hover:-translate-y-[2px] active:translate-y-0 cursor-pointer shadow-[0_20px_50px_-20px_rgba(212,160,48,0.55)]"
                >
                  Touren entdecken
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </a>
                <a
                  href={whatsappLink(
                    "Hallo, ich plane meinen Urlaub in Hurghada und würde gerne Touren buchen. Könnt ihr mich beraten?",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--color-paper)]/30 hover:border-[var(--color-ember)] bg-[var(--color-paper)]/5 hover:bg-[var(--color-ember)]/10 backdrop-blur-md text-[var(--color-paper)] hover:text-[var(--color-ember)] px-8 py-4 text-sm md:text-base font-medium transition-all duration-500 cursor-pointer"
                >
                  <WhatsappLogo size={18} weight="regular" />
                  Direkt per WhatsApp
                </a>
              </div>
            </div>

            {/* Stats strip — bottom of hero */}
            <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-[var(--color-paper)]/15">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[var(--color-paper)]/15">
                {site.stats.map((stat, i) => (
                  <div key={stat.label} className="md:px-8 first:md:pl-0">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-ember)]/80 mb-2 nums">
                      0{i + 1} / 04
                    </div>
                    <div className="font-display text-4xl md:text-5xl font-medium text-[var(--color-paper)] leading-none tracking-tight nums mb-2">
                      {stat.figure}
                    </div>
                    <div className="text-xs text-[var(--color-paper)]/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll hint — desktop only */}
          <div className="hidden md:flex absolute bottom-8 right-10 items-center gap-2 text-[var(--color-paper)]/60 text-[10px] uppercase tracking-[0.25em]">
            <span>Scroll</span>
            <ArrowDown size={14} className="animate-[bounce_2.4s_ease-in-out_infinite]" />
          </div>
        </section>

        {/* ===================================================================
            MANIFEST — oversized editorial pull statement
            =================================================================== */}
        <section className="relative bg-[var(--color-paper)] py-28 md:py-40">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-2">
                <RevealOnScroll>
                  <div className="nums text-[11px] uppercase tracking-[0.28em] text-[var(--color-ember)] font-medium">
                    — Manifest
                  </div>
                </RevealOnScroll>
              </div>
              <div className="md:col-span-10">
                <RevealOnScroll delay={0.1}>
                  <p className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-[var(--color-ink)] leading-[1.08] tracking-[-0.015em] text-balance">
                    Jede Tour, die wir euch empfehlen, sind wir{" "}
                    <em className="italic font-normal text-[var(--color-ember)]">
                      selbst gefahren.
                    </em>{" "}
                    Mit eigenen Augen geprüft. Nach sieben Jahren an der Küste
                    bleibt eine kurze Liste — und genau diese bekommt ihr.
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            EXPERIENCES — numbered editorial list
            =================================================================== */}
        <section
          id="erlebnisse"
          className="relative bg-[var(--color-paper-deep)] py-28 md:py-36 overflow-hidden"
        >
          {/* Ambient ornament */}
          <div
            className="absolute -left-40 top-1/3 w-[700px] h-[700px] rounded-full opacity-60 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--color-ember-soft) 0%, transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
              <div className="md:col-span-5">
                <RevealOnScroll>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-ember)] font-medium mb-6">
                    — Sechs Welten
                  </div>
                  <h2 className="font-display text-5xl md:text-7xl font-medium text-[var(--color-ink)] leading-[0.95] tracking-[-0.02em] text-balance">
                    Ein Urlaub,
                    <br />
                    sechs Welten,
                    <br />
                    <em className="italic font-normal text-[var(--color-ember)]">
                      ein Ansprech­partner.
                    </em>
                  </h2>
                </RevealOnScroll>
              </div>
              <div className="md:col-span-6 md:col-start-7 flex items-end">
                <RevealOnScroll delay={0.15}>
                  <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed max-w-md">
                    Wir haben Jahre damit verbracht, die besten Anbieter
                    entlang der Küste zu finden. Alles was ihr hier seht, haben
                    wir persönlich getestet und für gut befunden.
                  </p>
                </RevealOnScroll>
              </div>
            </div>

            {/* Numbered rows */}
            <div className="divide-y divide-[var(--color-ink-line)]/60 border-t border-[var(--color-ink-line)]/60">
              {categories.map((cat, i) => (
                <RevealOnScroll key={cat.key} delay={i * 0.06} className="group">
                  <a
                    href="#touren"
                    className="flex items-start md:items-center gap-6 md:gap-10 py-10 md:py-14 cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-6"
                  >
                    <div className="nums text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-subtle)] pt-2 md:pt-3 w-10 flex-shrink-0">
                      0{i + 1}
                    </div>
                    <div className="flex-1 grid md:grid-cols-12 gap-4 md:gap-10 items-baseline">
                      <div className="md:col-span-4">
                        <div className="font-display text-3xl md:text-5xl font-medium text-[var(--color-ink)] leading-none tracking-[-0.02em] group-hover:text-[var(--color-ember)] transition-colors duration-500">
                          {cat.label}
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <div className="text-base text-[var(--color-ink-muted)] leading-relaxed max-w-md">
                          {cat.blurb}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--color-ink-line)] flex items-center justify-center text-[var(--color-ink)] group-hover:bg-[var(--color-ember)] group-hover:text-[var(--color-paper)] group-hover:border-[var(--color-ember)] group-hover:-rotate-45 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <ArrowUpRight size={18} />
                    </div>
                  </a>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            FEATURED TOURS — 5-card compact grid with Double-Bezel cards
            =================================================================== */}
        <section
          id="touren"
          className="relative bg-[var(--color-paper)] py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <RevealOnScroll>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-ember)] font-medium mb-6">
                    — Unsere Auswahl
                  </div>
                  <h2 className="font-display text-5xl md:text-7xl font-medium text-[var(--color-ink)] leading-[0.95] tracking-[-0.02em] text-balance">
                    Handverlesen.
                    <br />
                    <em className="italic font-normal text-[var(--color-ember)]">
                      Vor Ort getestet.
                    </em>
                  </h2>
                </RevealOnScroll>
              </div>
              <RevealOnScroll delay={0.15}>
                <p className="text-base text-[var(--color-ink-muted)] leading-relaxed max-w-sm">
                  Keine Touren von der Stange. Jede dieser Ausflüge haben wir
                  vor euch gemacht, mit eigenen Augen geprüft und nur
                  weiterempfohlen wenn sie besser war als der Durchschnitt.
                </p>
              </RevealOnScroll>
            </div>

            {/* 5-card compact grid: 3 oben + 2 unten, alle gleich hoch */}
            <div className="grid md:grid-cols-6 gap-6 md:gap-8">
              {/* Row 1: Orange, Safari, Luxor — je 2 cols of 6 */}
              <div className="md:col-span-2">
                <TourCard tour={featuredTours[0]} index={0} />
              </div>
              <div className="md:col-span-2">
                <TourCard tour={featuredTours[1]} index={1} />
              </div>
              <div className="md:col-span-2">
                <TourCard tour={featuredTours[2]} index={2} />
              </div>
              {/* Row 2: Cairo + Diving — je 3 cols, etwas breiter */}
              <div className="md:col-span-3">
                <TourCard tour={featuredTours[3]} index={3} />
              </div>
              <div className="md:col-span-3">
                <TourCard tour={featuredTours[4]} index={4} />
              </div>
            </div>

            {/* Transfer-Zuschlag-Hinweis */}
            <RevealOnScroll delay={0.1}>
              <div className="mt-20 md:mt-28 pt-8 border-t border-[var(--color-ink-line)]/60">
                <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                  <div className="md:col-span-3">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ember)] font-medium">
                      — Gut zu wissen
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-sm md:text-base text-[var(--color-ink-muted)] leading-relaxed max-w-2xl">
                      Alle Preise gelten bei Abholung im Raum Hurghada. Für
                      Hotels in <em className="not-italic text-[var(--color-ink)]">Sahl Hasheesh, Makadi Bay, Soma Bay und El Gouna</em>{" "}
                      kommt ein Transfer-Zuschlag von €10 pro Person dazu.
                      Genauen Preis inkl. Abholung bekommt ihr in der
                      WhatsApp-Bestätigung.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ===================================================================
            FULL CATALOG — kompakte Liste aller 17 Touren, gruppiert nach Welt
            =================================================================== */}
        <section
          id="katalog"
          className="relative bg-[var(--color-paper-deep)] py-28 md:py-36 overflow-hidden"
        >
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
              <div className="md:col-span-5">
                <RevealOnScroll>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-ember)] font-medium mb-6">
                    — Vollständiger Katalog
                  </div>
                  <h2 className="font-display text-5xl md:text-7xl font-medium text-[var(--color-ink)] leading-[0.95] tracking-[-0.02em] text-balance">
                    Alle Touren
                    <br />
                    <em className="italic font-normal text-[var(--color-ember)]">
                      auf einen Blick.
                    </em>
                  </h2>
                </RevealOnScroll>
              </div>
              <div className="md:col-span-6 md:col-start-7 flex items-end">
                <RevealOnScroll delay={0.15}>
                  <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed max-w-md">
                    Siebzehn Touren, vier Welten, ein Ansprechpartner. Klickt
                    eine an und wir bestätigen Verfügbarkeit, Abholung und
                    Endpreis direkt per WhatsApp.
                  </p>
                </RevealOnScroll>
              </div>
            </div>

            {/* Kategorien-Gruppen */}
            <div className="space-y-20 md:space-y-28">
              {categories.map((cat) => {
                const catTours = tours.filter((t) => t.category === cat.key);
                if (catTours.length === 0) return null;
                return (
                  <div key={cat.key}>
                    <RevealOnScroll>
                      <div className="flex items-baseline gap-5 mb-10 md:mb-12 pb-5 border-b border-[var(--color-ink-line)]/60">
                        <div className="font-display text-3xl md:text-4xl font-medium text-[var(--color-ink)] tracking-[-0.02em]">
                          {cat.label}
                        </div>
                        <div className="nums text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                          {catTours.length.toString().padStart(2, "0")} Touren
                        </div>
                      </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                      {catTours.map((tour, i) => (
                        <RevealOnScroll key={tour.slug} delay={i * 0.04}>
                          <a
                            href={whatsappLink(
                              `Hallo, ich hätte Fragen zur Tour "${tour.title}". Könnt ihr mir mehr Infos schicken?`,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block h-full p-6 md:p-7 rounded-[1.5rem] bg-[var(--color-paper)] ring-1 ring-[var(--color-ink)]/[0.06] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:ring-[var(--color-ember)]/30 hover:shadow-[0_30px_60px_-30px_rgba(24,52,84,0.25)] cursor-pointer"
                          >
                            {/* Title + Price row */}
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h3 className="font-display text-xl md:text-[22px] font-semibold text-[var(--color-ink)] leading-[1.15] tracking-[-0.015em] flex-1">
                                {tour.title}
                              </h3>
                              <div className="flex-shrink-0 text-right">
                                {tour.priceFrom !== undefined ? (
                                  <div className="flex items-baseline gap-1 nums">
                                    <span className="text-[10px] text-[var(--color-ink-subtle)] uppercase tracking-wider">
                                      ab
                                    </span>
                                    <span className="font-display text-lg font-semibold text-[var(--color-ember)] leading-none">
                                      €{tour.priceFrom}
                                    </span>
                                  </div>
                                ) : (
                                  <span className="text-[10px] font-medium text-[var(--color-ember)] uppercase tracking-wider leading-none">
                                    auf Anfrage
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Duration */}
                            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-subtle)] nums mb-5">
                              {tour.duration}
                            </div>

                            {/* Highlights as bullet list */}
                            <ul className="space-y-1.5">
                              {tour.highlights.map((h) => (
                                <li
                                  key={h}
                                  className="text-[13px] text-[var(--color-ink-muted)] leading-snug flex items-start gap-2"
                                >
                                  <span className="text-[var(--color-ember)] mt-1.5 flex-shrink-0">·</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Hover arrow */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-0 transition-opacity" aria-hidden="true" />
                          </a>
                        </RevealOnScroll>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            PROMISES — editorial 2-column: sticky headline + numbered list
            =================================================================== */}
        <section
          id="vertrauen"
          className="relative bg-[var(--color-paper-deep)] py-28 md:py-40 overflow-hidden"
        >
          <div
            className="absolute -right-40 -top-20 w-[700px] h-[700px] rounded-full opacity-60 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--color-ember-soft) 0%, transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              {/* Sticky headline */}
              <div className="md:col-span-5">
                <div className="md:sticky md:top-32">
                  <RevealOnScroll>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-ember)] font-medium mb-6">
                      — Warum Gäste uns vertrauen
                    </div>
                    <h2 className="font-display text-5xl md:text-7xl font-medium text-[var(--color-ink)] leading-[0.95] tracking-[-0.02em] text-balance mb-8">
                      Keine
                      <br />
                      Überraschungen.
                      <br />
                      <em className="italic font-normal text-[var(--color-ember)]">
                        Nur Erinnerungen.
                      </em>
                    </h2>
                    <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed max-w-md">
                      Sechs Versprechen, die wir seit dem ersten Tag halten. Ohne
                      Kleingedrucktes.
                    </p>
                  </RevealOnScroll>
                </div>
              </div>

              {/* Numbered promises list */}
              <div className="md:col-span-7">
                <div className="divide-y divide-[var(--color-ink-line)]/60 border-t border-[var(--color-ink-line)]/60">
                  {promises.map((p, i) => {
                    const Icon = p.icon;
                    return (
                      <RevealOnScroll key={p.title} delay={i * 0.06}>
                        <div className="group py-8 md:py-10 flex items-start gap-6 md:gap-8">
                          <div className="nums text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-subtle)] pt-2 w-8 flex-shrink-0">
                            0{i + 1}
                          </div>
                          <div className="w-12 h-12 rounded-full bg-[var(--color-paper)] border border-[var(--color-ink-line)] flex items-center justify-center text-[var(--color-ember)] flex-shrink-0 transition-all duration-500 group-hover:bg-[var(--color-ember)] group-hover:text-[var(--color-paper)] group-hover:border-[var(--color-ember)] group-hover:-rotate-12">
                            <Icon size={20} weight="regular" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display text-2xl md:text-3xl font-medium text-[var(--color-ink)] leading-[1.15] tracking-[-0.015em] mb-2">
                              {p.title}
                            </h3>
                            <p className="text-[15px] text-[var(--color-ink-muted)] leading-relaxed max-w-lg">
                              {p.copy}
                            </p>
                          </div>
                        </div>
                      </RevealOnScroll>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            CONTACT CTA — editorial split with framed image
            =================================================================== */}
        <section
          id="kontakt"
          className="relative bg-[var(--color-paper)] py-28 md:py-40 overflow-hidden"
        >
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
              <div className="md:col-span-7 order-2 md:order-1">
                <RevealOnScroll>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-ember)] font-medium mb-6">
                    — Bereit für euer Abenteuer?
                  </div>
                  <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-[var(--color-ink)] leading-[0.92] tracking-[-0.02em] text-balance mb-8">
                    Sagt uns,
                    <br />
                    was ihr erleben
                    <br />
                    <em className="italic font-normal text-[var(--color-ember)]">
                      wollt.
                    </em>
                  </h2>
                  <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed max-w-lg mb-10 text-balance">
                    Ob ihr schon wisst welche Tour, oder Beratung braucht —
                    schreibt uns auf WhatsApp. Wir antworten meist in wenigen
                    Minuten, sieben Tage die Woche.
                  </p>
                  <a
                    href={whatsappLink(
                      "Hallo, ich plane meinen Urlaub in Hurghada. Könnt ihr mich bei der Auswahl der Touren beraten?",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] hover:bg-[var(--color-ember)] text-[var(--color-paper)] hover:text-[var(--color-ink)] px-8 py-5 text-base font-medium shadow-[0_25px_70px_-25px_rgba(24,52,84,0.5)] transition-all duration-500 hover:-translate-y-[2px] active:translate-y-0 cursor-pointer"
                  >
                    <WhatsappLogo size={20} weight="fill" />
                    Schreiben auf WhatsApp
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-500 group-hover:rotate-45"
                    />
                  </a>
                  <div className="mt-6 text-sm text-[var(--color-ink-subtle)] nums">
                    Antwort in unter 5 Minuten · {site.whatsapp.display}
                  </div>
                </RevealOnScroll>
              </div>

              {/* Double-Bezel framed image */}
              <div className="md:col-span-5 order-1 md:order-2">
                <RevealOnScroll delay={0.2}>
                  <div className="relative p-2 rounded-[2.5rem] bg-[var(--color-ink)]/5 ring-1 ring-[var(--color-ink)]/5">
                    <div className="relative aspect-[4/5] rounded-[calc(2.5rem-0.5rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                      <Image
                        src={CONTACT_IMAGE}
                        alt="Sonnenuntergang in der Wüste"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/50 via-transparent to-transparent" />
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
