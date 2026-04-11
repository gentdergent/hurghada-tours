# Handoff — Hurghada Tours
Letzte Session: 2026-04-11 (Gent)

## Was wurde gemacht
- Real-Catalog-Integration: 17 Touren von Amo Magdy ersetzen Research-Platzhalter
- Neue Kategorie `transfers` + "auf Anfrage" Preis-Fallback
- Vollständiger Katalog als kompakte Bullet-Card-Sektion (alle 17 sichtbar, kein Fließtext)
- WhatsApp-Nummer auf echte +20 100 934 3013
- `gent/feedback-fixes` → dev → main gemerged (PR #1), Production live über Coolify

## Was ist offen
- Operator-Bestätigung: Screenshot/Loom an Amo Magdy schicken
- Stats-Zahlen (11.482 / 4.9 / 2.347) sind erfunden — vor öffentlichem Launch ersetzen oder entfernen
- Impressum/Datenschutz noch `#`-Links — braucht Firmendaten
- `docs/project.yaml` zeigt status `pausiert` — sollte `aktiv` werden

## Landminen
- **NIE `gh pr merge --delete-branch` bei dev→main PRs verwenden.** Der "Source-Branch" eines dev→main PRs ist `dev`, und Coolify Staging trackt ihn permanent. Wurde in dieser Session aus Versehen gelöscht und sofort wiederhergestellt — Eintrag in `~/vault/journal.md`.
- Stats-Zahlen sind §5 UWG-relevant bei öffentlichem Launch.

## Naechster Schritt
Loom/Screenshot der Live-Production-URL an Amo Magdy senden und Content-Approval abholen, bevor weitere Polish-Arbeit reingeht.
