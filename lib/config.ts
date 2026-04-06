// Site-wide brand config — all placeholder values to be replaced with real
// business details once they are confirmed.

export const site = {
  brandName: "My Excursion Club",
  tagline: "Rotes Meer. Wüste. Pyramiden.",
  description:
    "Kuratierte Ausflüge ab Hurghada. Persönliche Beratung auf Deutsch, faire Preise, Abholung direkt vom Hotel.",

  // Contact — placeholders until the operator confirms real values.
  whatsapp: {
    // International format without leading + or spaces for wa.me links
    number: "201000000000",
    display: "+20 100 000 0000",
  },
  email: "hallo@hurghada-tours.example",

  // Organic stats — realistic, non-round numbers. Placeholders.
  stats: [
    { figure: "11.482", label: "Gäste seit 2016" },
    { figure: "4.9", label: "Ø Bewertung" },
    { figure: "2.347", label: "Reviews" },
    { figure: "47", label: "Touren im Programm" },
  ],

  languages: ["Deutsch", "English", "Русский", "Polski"] as const,
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
