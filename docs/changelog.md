# Changelog

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
