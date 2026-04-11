# Handoff — Hurghada Tours
Letzte Session: 2026-04-11 (Gent)

## Was wurde gemacht
- Highlight-Block von 6 auf 5 Touren reduziert: Orange Bay, Wüstensafari, Luxor, Cairo, Daily Dive (Reihenfolge via `FEATURED_ORDER` in `lib/tours.ts`)
- Featured-Grid umgebaut auf kompaktes 3+2 Layout (keine riesige Signature-Karte mehr)
- TourCard flacher und kleiner: aspect 4/3 resp. 5/4, Title text-2xl md:text-3xl, Summary 3-Zeilen clamp
- Section-Padding gestrafft
- Via PR #3 (dev → main) nach Production gemerged, Coolify deployed

## Was ist offen
- **Stats-Zahlen §5 UWG:** 11.482 Kunden / 4.9 Rating / 2.347 Touren sind weiterhin erfunden — vor öffentlichem Launch raus oder durch echte Werte ersetzen
- Impressum/Datenschutz-Links im Footer sind weiterhin `#` — braucht Firmendaten von Amo
- `docs/project.yaml` steht weiterhin auf `pausiert`, sollte `aktiv`
- Loom/Screenshot der Live-URL an Amo zur Content-Approval

## Landminen
- **NIE `gh pr merge --delete-branch` bei dev→main PRs.** Source-Branch ist `dev`, Coolify Staging trackt ihn. Eintrag in `~/vault/journal.md` von 2026-04-11 Session 2.
- HMR blockiert Cross-Origin fuer `habit`-Host (`allowedDevOrigins` fehlt in `next.config.ts`). Kein Blocker — Full-Reload funktioniert — aber HMR-Updates kommen nicht durch wenn ueber `http://habit:PORT` entwickelt wird.
- Stale baubeleg-app `next-server` haelt dauerhaft Port 3000 (PID aus anderer Session) — hurghada laeuft lokal automatisch auf Port 3001.

## Naechster Schritt
Stats-Zahlen aus dem Hero raus (oder durch "Neueroeffnung 2026" ersetzen) — in `app/page.tsx` um Zeile 139-155 (`site.stats.map`) und `site.stats` in `lib/config.ts`.
