// Tour catalog — echte Daten vom Operator (Amo Magdy, April 2026).
// Preise in EUR pro Person. "auf Anfrage" für Private Overnight + Transfers,
// da diese von Personenzahl/Strecke abhängen.
//
// Photography: Wikimedia Commons URLs. Verified stable, real Egypt locations.

export type TourCategory =
  | "diving"
  | "sea"
  | "cultural"
  | "desert"
  | "multi-day"
  | "transfers";

export type Tour = {
  slug: string;
  title: string;
  category: TourCategory;
  categoryLabel: string;
  duration: string;
  /** EUR pro Person. Fehlt bei Touren mit "Preis auf Anfrage". */
  priceFrom?: number;
  summary: string;
  highlights: string[];
  /** Absolute image URL (Wikimedia Commons). */
  image: string;
  featured?: boolean;
};

export const categoryLabels: Record<TourCategory, string> = {
  diving: "Unterwasser",
  sea: "Rotes Meer",
  cultural: "Kultur",
  desert: "Wüste",
  "multi-day": "Mehrtagesreisen",
  transfers: "Transfers",
};

export const categories: {
  key: TourCategory;
  label: string;
  blurb: string;
}[] = [
  {
    key: "sea",
    label: "Rotes Meer",
    blurb: "Bootstouren zu Riffen, Inseln und Delfin-Hotspots.",
  },
  {
    key: "diving",
    label: "Unterwasser",
    blurb: "Tauchkurse, Schnuppertauchen, PADI-Lizenz mit zertifizierten Instructoren.",
  },
  {
    key: "cultural",
    label: "Kultur",
    blurb: "Tagestouren nach Luxor und Cairo mit deutschsprachigem Guide.",
  },
  {
    key: "desert",
    label: "Wüste",
    blurb: "Quad, Jeep, Pferd, Kamel — und Sternenhimmel am Abend.",
  },
  {
    key: "multi-day",
    label: "Mehrtagesreisen",
    blurb: "Übernachtungstouren nach Luxor inkl. Heißluftballon bei Sonnenaufgang.",
  },
  {
    key: "transfers",
    label: "Transfers",
    blurb: "Flughafen, Hotel, ganz Ägypten — verlässliche Abholung mit AC-Fahrzeug.",
  },
];

// Wikimedia Commons direct thumbnail URLs — verified 200 OK.
const IMG = {
  redSeaHurghada:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Red_Sea_in_Hurghada_2023-07-08.jpg/1920px-Red_Sea_in_Hurghada_2023-07-08.jpg",
  hurghadaMarina:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Hotel_beach_with_a_small_marina_in_Hurghada.jpg/1920px-Hotel_beach_with_a_small_marina_in_Hurghada.jpg",
  ramsesKarnak:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Statue_of_Ramesses_II_in_Karnak_Temple_in_Luxor_Egypt.JPG/1920px-Statue_of_Ramesses_II_in_Karnak_Temple_in_Luxor_Egypt.JPG",
  sphinxPyramids:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Sphinx_and_pyramids_of_Giza_panorama.jpg/1920px-Sphinx_and_pyramids_of_Giza_panorama.jpg",
  allGizahPyramids:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1920px-All_Gizah_Pyramids.jpg",
  dakhlaDunes:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sand_dunes%2C_Libyan_Desert%2C_Dakhla_Oasis%2C_Egypt.jpg/1920px-Sand_dunes%2C_Libyan_Desert%2C_Dakhla_Oasis%2C_Egypt.jpg",
  ergChebbiSunset:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Erg_Chebbi_sunset.jpg/1920px-Erg_Chebbi_sunset.jpg",
  dolphinHurghada:
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Dolphin_hurghada.jpg",
  redSeaCoral:
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Red_soft_coral_at_Fanous_East_Reef%2C_Red_Sea%2C_Egypt_-SCUBA_-UNDERWATER_-PICTURES_%286536740157%29.jpg",
} as const;

export const HERO_IMAGE = IMG.redSeaHurghada;
export const CONTACT_IMAGE = IMG.ergChebbiSunset;

export const tours: Tour[] = [
  // ========================= ROTES MEER =========================
  {
    slug: "orange-bay",
    title: "Orange Bay",
    category: "sea",
    categoryLabel: "Rotes Meer",
    duration: "Ganztags",
    priceFrom: 30,
    summary:
      "Ein ganzer Tag auf dem Roten Meer mit zwei Schnorchelstopps an lebendigen Riffen und zwei Stunden am weißen Sandstrand der Orange Bay. Mittagsbuffet an Bord, Ausrüstung inklusive.",
    highlights: [
      "Zwei Schnorchelstopps an Korallenriffen",
      "Zwei Stunden am Strand der Orange Bay",
      "Lunch an Bord, Equipment & Transfer",
    ],
    image: IMG.hurghadaMarina,
    featured: true,
  },
  {
    slug: "paradise-island",
    title: "Paradise Island",
    category: "sea",
    categoryLabel: "Rotes Meer",
    duration: "Ganztags",
    priceFrom: 60,
    summary:
      "Die ruhigere Schwester der Orange Bay. Weniger Boote, dieselben Riffe, dieselben zwei Stunden am Traumstrand. Zwei Schnorchelstopps, Mittagsbuffet an Bord, Equipment und Hotel-Abholung inklusive.",
    highlights: [
      "Weniger überlaufen als Orange Bay",
      "Zwei Schnorchelstopps an Riffen",
      "Zwei Stunden Strand, Lunch & Transfer",
    ],
    image: IMG.redSeaHurghada,
  },
  {
    slug: "hula-hula",
    title: "Hula Hula Insel",
    category: "sea",
    categoryLabel: "Rotes Meer",
    duration: "Ganztags",
    priceFrom: 30,
    summary:
      "Kleiner, lebhafter, perfekt für Familien. Zwei Schnorchelstopps an unberührten Korallenriffen, zwei Stunden Strandzeit, Mittagsbuffet an Bord. Equipment und Transfer inklusive.",
    highlights: [
      "Zwei Schnorchelstopps an Riffen",
      "Zwei Stunden Strandzeit",
      "Lunch, Equipment & Hotel-Abholung",
    ],
    image: IMG.redSeaCoral,
  },
  {
    slug: "sea-scope",
    title: "Sea Scope Semi-U-Boot",
    category: "sea",
    categoryLabel: "Rotes Meer",
    duration: "Halbtags · 3 Stunden",
    priceFrom: 25,
    summary:
      "Perfekt für Kinder und Nichtschwimmer: im Semi-U-Boot bis unter die Wasseroberfläche. 45 Minuten Panorama-Fenster auf Korallen und Fische, 45 Minuten Schnorcheln, 45 Minuten an Deck. Transfer inklusive.",
    highlights: [
      "Echte Panorama-Fenster unter Wasser",
      "Familienfreundlich, ab 3 Jahren",
      "Schnorcheln und Deck-Zeit inklusive",
    ],
    image: IMG.dolphinHurghada,
  },
  {
    slug: "nefretari-cruise",
    title: "Nefretari Cruise",
    category: "sea",
    categoryLabel: "Rotes Meer",
    duration: "Ganztags",
    priceFrom: 80,
    summary:
      "Unser Premium-Tagestrip. 45 Minuten unter Segeln, 45 Minuten Schnorcheln, 45 Minuten am Pharao-Fotopunkt, 45 Minuten im Panorama-Unterseeboot. Lunch oder Dinner an Bord, Transfer inklusive.",
    highlights: [
      "Echte Segelphase auf dem Roten Meer",
      "Schnorcheln + Panorama-Unterseeboot",
      "Lunch oder Dinner an Bord",
    ],
    image: IMG.hurghadaMarina,
  },
  {
    slug: "private-speedboat",
    title: "Privates Speedboot",
    category: "sea",
    categoryLabel: "Rotes Meer",
    duration: "3 Stunden",
    priceFrom: 120,
    summary:
      "Drei Stunden privates Speedboot, nur für euch. Routen nach Absprache — Giftun-Inseln, versteckte Riffe, Sonnenuntergangs-Trip. Ideal für Paare, kleine Gruppen oder Familien mit eigenem Zeitplan.",
    highlights: [
      "Komplett privates Speedboot",
      "Route flexibel nach Wunsch",
      "Perfekt für Paare und kleine Gruppen",
    ],
    image: IMG.redSeaHurghada,
  },

  // ========================= UNTERWASSER =========================
  {
    slug: "daily-dive",
    title: "Daily Dive — 2 Tauchgänge",
    category: "diving",
    categoryLabel: "Unterwasser",
    duration: "Ganztags",
    priceFrom: 45,
    summary:
      "Zwei geführte Tauchgänge an den besten Riffen rund um Hurghada. Mit zertifizierten Instructoren, komplette Ausrüstung, Lunch an Bord, Transfer inklusive. Für zertifizierte Taucher.",
    highlights: [
      "Zwei Tauchgänge an Top-Riffen",
      "Komplette Ausrüstung inklusive",
      "Lunch an Bord & Transfer",
    ],
    image: IMG.redSeaCoral,
    featured: true,
  },
  {
    slug: "padi-open-water",
    title: "PADI Open Water Course",
    category: "diving",
    categoryLabel: "Unterwasser",
    duration: "3 Tage",
    priceFrom: 370,
    summary:
      "Dreitägiger PADI-Kurs zum Open Water Diver. Jeden Tag zwei Tauchgänge, Theorie und Praxis, komplette Ausrüstung, Dive Book und internationale Lizenz. Lunch und Transfers an allen drei Tagen.",
    highlights: [
      "Internationale PADI-Lizenz",
      "3 Tage × 2 Tauchgänge",
      "Dive Book, Lizenz, Equipment & Transfer",
    ],
    image: IMG.redSeaCoral,
  },

  // ========================= WÜSTE =========================
  {
    slug: "desert-safari",
    title: "Wüstensafari — das volle Programm",
    category: "desert",
    categoryLabel: "Wüste",
    duration: "Nachmittag/Abend",
    priceFrom: 30,
    summary:
      "Der Klassiker: mit dem Jeep in die arabische Wüste, 15 Minuten Quad, Spider-Car, Besuch eines Beduinen-Dorfs, Kamelritt in der Abenddämmerung, Dinner und Show unter dem Sternenhimmel.",
    highlights: [
      "Jeep + Quad + Spider-Car in einem Trip",
      "Beduinen-Dorf & Kamelritt",
      "Dinner und Show unter Sternen",
    ],
    image: IMG.dakhlaDunes,
    featured: true,
  },
  {
    slug: "quad-trip",
    title: "Quad-Trip — 2 Stunden Wüste",
    category: "desert",
    categoryLabel: "Wüste",
    duration: "Halbtags · 2 Stunden Quad",
    priceFrom: 30,
    summary:
      "Wer die lange Variante will: zwei volle Stunden Quad-Bike durch die Dünen und Wadis hinter Hurghada. Transfer und Briefing inklusive. Kein Vorwissen nötig.",
    highlights: [
      "Zwei Stunden reine Quad-Zeit",
      "Dünen und Wadis hinter Hurghada",
      "Briefing und Transfer inklusive",
    ],
    image: IMG.dakhlaDunes,
  },
  {
    slug: "horse-riding",
    title: "Pferdereiten — Wüste und Meer",
    category: "desert",
    categoryLabel: "Wüste",
    duration: "Halbtags · 2 Stunden",
    priceFrom: 30,
    summary:
      "Eine Stunde durch die Wüste hinter der Küste, eine Stunde am Strand mit den Hufen im Wasser. Für Anfänger wie Fortgeschrittene, Führung durch den Reitstall inklusive.",
    highlights: [
      "1 Stunde Wüste + 1 Stunde Meer",
      "Für Anfänger geeignet",
      "Geführte Tour, Transfer inklusive",
    ],
    image: IMG.ergChebbiSunset,
  },

  // ========================= KULTUR =========================
  {
    slug: "luxor-overday",
    title: "Luxor — Tal der Könige",
    category: "cultural",
    categoryLabel: "Kultur",
    duration: "Tagestour",
    priceFrom: 85,
    summary:
      "Im klimatisierten Reisebus ins Tal der Könige, zum Hatschepsut-Tempel, zu den Memnon-Kolossen und nach Karnak. Mit deutschsprachigem Guide, Lunch und allen Eintritten. Auch privat buchbar.",
    highlights: [
      "Karnak, Tal der Könige, Hatschepsut, Memnon",
      "Deutschsprachiger Guide & alle Eintritte",
      "Gruppe oder privat (max. 8 Pax im Minivan)",
    ],
    image: IMG.ramsesKarnak,
    featured: true,
  },
  {
    slug: "luxor-overnight",
    title: "Luxor Private — 2 Tage mit Heißluftballon",
    category: "multi-day",
    categoryLabel: "Mehrtagesreisen",
    duration: "2 Tage · 1 Übernachtung",
    summary:
      "Die ruhige Variante: privater Wagen, eigener Guide, Tal der Könige, Hatschepsut, Karnak, Luxor-Tempel bei Nacht. Übernachtung im Hotel, am zweiten Morgen Heißluftballon bei Sonnenaufgang über dem Nil.",
    highlights: [
      "Heißluftballon bei Sonnenaufgang",
      "Privater Guide & AC-Wagen",
      "Hotel, Frühstück, alle Eintritte — Preis auf Anfrage",
    ],
    image: IMG.allGizahPyramids,
  },
  {
    slug: "cairo-overday",
    title: "Cairo — Pyramiden & Grand Egyptian Museum",
    category: "cultural",
    categoryLabel: "Kultur",
    duration: "Tagestour",
    priceFrom: 120,
    summary:
      "Im klimatisierten Reisebus nach Kairo: das neue Grand Egyptian Museum in Giza, die Pyramiden, die Sphinx. Mit deutschsprachigem Guide, Lunch und allen Eintritten. Auch privat buchbar.",
    highlights: [
      "Grand Egyptian Museum (neu seit 2025)",
      "Pyramiden von Gizeh & Sphinx",
      "Gruppe oder privat (max. 8 Pax im Minivan)",
    ],
    image: IMG.sphinxPyramids,
    featured: true,
  },

  // ========================= TRANSFERS =========================
  {
    slug: "airport-transfer",
    title: "Flughafen-Transfer",
    category: "transfers",
    categoryLabel: "Transfers",
    duration: "Nach Bedarf",
    summary:
      "Zuverlässige Abholung zwischen Hurghada International Airport und eurem Hotel — in beide Richtungen. Klimatisiertes Fahrzeug, Fahrer wartet am Gate mit Namensschild.",
    highlights: [
      "Fahrer am Gate mit Namensschild",
      "AC-Fahrzeug, beide Richtungen",
      "Preis nach Strecke — auf Anfrage",
    ],
    image: IMG.hurghadaMarina,
  },
  {
    slug: "hurghada-transfer",
    title: "Transfer innerhalb Hurghada",
    category: "transfers",
    categoryLabel: "Transfers",
    duration: "Nach Bedarf",
    summary:
      "Kurze Strecken innerhalb Hurghada — Hotel zu Hotel, Restaurant, Marina, Einkaufszentrum. Klimatisiertes Fahrzeug, deutschsprachige Koordination per WhatsApp.",
    highlights: [
      "Flexibel per WhatsApp bestellbar",
      "AC-Fahrzeug & deutschsprachiger Kontakt",
      "Preis nach Strecke — auf Anfrage",
    ],
    image: IMG.hurghadaMarina,
  },
  {
    slug: "egypt-transfer",
    title: "Transfers in ganz Ägypten",
    category: "transfers",
    categoryLabel: "Transfers",
    duration: "Nach Bedarf",
    summary:
      "Längere Strecken: Hurghada → Luxor, Hurghada → Kairo, Hurghada → Marsa Alam, oder andere Ziele in Ägypten. Klimatisiertes Fahrzeug, erfahrener Fahrer, alles per WhatsApp planbar.",
    highlights: [
      "Luxor, Kairo, Marsa Alam & mehr",
      "Erfahrener Fahrer, AC-Fahrzeug",
      "Preis nach Strecke — auf Anfrage",
    ],
    image: IMG.hurghadaMarina,
  },
];

// Explizite Reihenfolge der Highlights auf der Landing (nicht Array-Reihenfolge):
// Orange Bay → Wüstensafari → Luxor → Cairo → Daily Dive.
const FEATURED_ORDER = [
  "orange-bay",
  "desert-safari",
  "luxor-overday",
  "cairo-overday",
  "daily-dive",
] as const;

export const featuredTours = FEATURED_ORDER.map(
  (slug) => tours.find((t) => t.slug === slug)!,
);

export function getToursByCategory(category: TourCategory): Tour[] {
  return tours.filter((t) => t.category === category);
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
