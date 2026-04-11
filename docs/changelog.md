# Changelog

### 2026-04-11 (Gent, Session 2)
- Highlight-Touren neu kuratiert: 5 Touren (Orange Bay, Wüstensafari, Luxor, Cairo, Daily Dive) ersetzen die bisherigen 6 im Featured-Block. Privates Speedboot entfernt aus Featured (bleibt im Vollkatalog).
- Reihenfolge der Highlights explizit gesteuert via neue `FEATURED_ORDER` Konstante statt Array-Position.
- Featured-Grid umgebaut: vom asymmetrischen 6-Card-Zig-Zag auf kompaktes 3+2 Raster (3×col-span-2 oben, 2×col-span-3 unten).
- TourCard kompakter: Aspect Ratio von 3/4 resp. 4/5 auf 5/4 resp. 4/3 (flacher), Title von text-3xl md:text-4xl auf text-2xl md:text-3xl, Summary mit 3-Zeilen Line-Clamp, kleinerer CTA-Button.
- Featured-Section Padding gestrafft (py-28/40 → py-20/28, mb-16/24 → mb-12/16).

### 2026-04-11 (Gent)
- Echter Kunden-Katalog von Amo Magdy integriert: 17 Touren mit echten Preisen ersetzen die 8 Research-Platzhalter.
- Neue Kategorie `transfers` ergänzt (Airport, Hurghada-intern, Egypt-weit) — `TourCategory` Type erweitert.
- `priceFrom` Feld optional gemacht — 4 Touren ohne Festpreis (Luxor Overnight + 3 Transfer-Varianten) zeigen "Preis auf Anfrage" statt `ab €0`.
- Cairo-per-Flug Tour (€247) gestrichen — Kunde bietet nur Cairo per Bus an.
- Echte WhatsApp-Nummer eingebaut: +20 100 934 3013 (vorher Platzhalter).
- Stats-Korrektur: "47 Touren im Programm" → "17" (echte Katalog-Größe).
- Transfer-Zuschlag-Hinweis als sichtbarer Disclaimer: +€10/Person für Sahl Hasheesh, Makadi, Soma Bay, El Gouna.
- Neue Sektion "Vollständiger Katalog" auf One-Pager: alle 17 Touren als kompakte Bullet-Cards (Titel, Preis, Dauer, 3 Highlights) gruppiert nach Welt — kein Fließtext, weil Besucher 17 lange Beschreibungen nicht lesen.
- TourCard-Komponente: Preis-Fallback "Preis auf Anfrage" wenn `priceFrom === undefined`.
- Pre-existing Lint-Error in `RevealOnScroll.tsx` behoben (intentional post-mount setState mit `eslint-disable-next-line react-hooks/set-state-in-effect`).
