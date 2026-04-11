// Site-wide brand config — all placeholder values to be replaced with real
// business details once they are confirmed.

export const site = {
  brandName: "My Excursion Club",
  tagline: "Rotes Meer. Wüste. Pyramiden.",
  description:
    "Kuratierte Ausflüge ab Hurghada. Persönliche Beratung auf Deutsch, faire Preise, Abholung direkt vom Hotel.",

  // Contact — real values from operator (Amo Magdy).
  whatsapp: {
    // International format without leading + or spaces for wa.me links
    number: "201009343013",
    display: "+20 100 934 3013",
  },
  email: "hallo@hurghada-tours.example",

  // Stats — die ersten drei Zahlen sind bis zum Go-Live Platzhalter und
  // müssen vor öffentlichem Launch mit echten Werten ersetzt oder entfernt
  // werden (§5 UWG). "17 Touren" ist die echte Katalog-Größe.
  stats: [
    { figure: "11.482", label: "Gäste seit 2016" },
    { figure: "4.9", label: "Ø Bewertung" },
    { figure: "2.347", label: "Reviews" },
    { figure: "17", label: "Touren im Programm" },
  ],

  languages: ["Deutsch", "English", "Русский", "Polski"] as const,
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
