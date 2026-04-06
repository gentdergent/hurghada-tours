import Link from "next/link";
import { WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { site, whatsappLink } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-paper-deep)] border-t border-[var(--color-ink-line)]/50">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-[var(--color-ember)] flex items-center justify-center text-[var(--color-paper)] font-serif text-xl font-semibold">
                H
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-[var(--color-ink)] leading-none tracking-tight">
                  {site.brandName}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-subtle)] mt-1">
                  Red Sea · Egypt
                </div>
              </div>
            </div>
            <p className="font-display text-2xl text-[var(--color-ink-muted)] leading-snug max-w-md text-balance">
              Wir buchen nicht weiter. Wir kennen jeden Kapitän, jeden Guide,
              jede Straße.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-subtle)] mb-5">
              Navigation
            </div>
            <ul className="space-y-3 text-sm text-[var(--color-ink-muted)]">
              <li>
                <Link
                  href="#touren"
                  className="hover:text-[var(--color-ember)] transition-colors"
                >
                  Touren
                </Link>
              </li>
              <li>
                <Link
                  href="#erlebnisse"
                  className="hover:text-[var(--color-ember)] transition-colors"
                >
                  Erlebnisse
                </Link>
              </li>
              <li>
                <Link
                  href="#vertrauen"
                  className="hover:text-[var(--color-ember)] transition-colors"
                >
                  Vertrauen
                </Link>
              </li>
              <li>
                <Link
                  href="#kontakt"
                  className="hover:text-[var(--color-ember)] transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-subtle)] mb-5">
              Direkt erreichbar
            </div>
            <ul className="space-y-3 text-sm text-[var(--color-ink-muted)]">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[var(--color-ember)] transition-colors nums"
                >
                  <WhatsappLogo size={16} weight="regular" />
                  {site.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 hover:text-[var(--color-ember)] transition-colors"
                >
                  <EnvelopeSimple size={16} weight="regular" />
                  {site.email}
                </a>
              </li>
              <li className="text-[var(--color-ink-subtle)] text-xs pt-2">
                Antworten meist unter 5 Minuten
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {site.languages.map((lang) => (
                <span
                  key={lang}
                  className="text-[10px] px-2.5 py-1 rounded-full border border-[var(--color-ink-line)] text-[var(--color-ink-muted)]"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-ink-line)]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--color-ink-subtle)]">
          <div className="nums">
            © {new Date().getFullYear()} {site.brandName}. Alle Rechte
            vorbehalten.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[var(--color-ember)] transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-ember)] transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
