// Sample tour catalog — placeholder data, to be replaced with real tours once
// the operator provides them. Prices, durations, and descriptions follow
// market benchmarks from the research in docs/plans/v1.md.
//
// Photography: Wikimedia Commons URLs. Verified stable, real Egypt locations.

export type TourCategory =
  | "diving"
  | "sea"
  | "cultural"
  | "desert"
  | "multi-day";

export type Tour = {
  slug: string;
  title: string;
  category: TourCategory;
  categoryLabel: string;
  duration: string;
  priceFrom: number; // EUR
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
    blurb: "Tauchkurse, Schnupperkurse, U-Boot-Trips für Familien.",
  },
  {
    key: "cultural",
    label: "Kultur",
    blurb: "Tagestouren nach Luxor und Cairo mit eigenem Guide.",
  },
  {
    key: "desert",
    label: "Wüste",
    blurb: "Quad, Jeep, Kamel — und Sternenhimmel am Abend.",
  },
  {
    key: "multi-day",
    label: "Mehrtagesreisen",
    blurb: "Übernachtungstouren nach Luxor, Aswan und Kairo.",
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
  {
    slug: "orange-bay-paradise-island",
    title: "Orange Bay & Paradise Island",
    category: "sea",
    categoryLabel: "Rotes Meer",
    duration: "Ganztags · 9 Stunden",
    priceFrom: 38,
    summary:
      "Ein ganzer Tag auf dem Roten Meer. Zwei Schnorchelstopps an lebendigen Korallenriffen, Aufenthalt am weißen Sandstrand der Orange Bay, Mittagsbuffet an Bord.",
    highlights: [
      "Zwei Schnorchelstopps an Riffen",
      "Stunde am Strand von Paradise Island",
      "Mittagsbuffet, Getränke, Hotel-Abholung",
    ],
    image: IMG.hurghadaMarina,
    featured: true,
  },
  {
    slug: "luxor-tal-der-koenige",
    title: "Luxor — Tal der Könige",
    category: "cultural",
    categoryLabel: "Kultur",
    duration: "Tagestour · 17 Stunden",
    priceFrom: 94,
    summary:
      "Mit deutschsprachigem Ägyptologen ins Tal der Könige, zum Tempel der Hatschepsut und zu den Memnon-Kolossen. Mittagessen auf einem Nil-Boot.",
    highlights: [
      "Deutschsprachiger Ägyptologe",
      "Tal der Könige & Hatschepsut-Tempel",
      "Mittagessen auf dem Nil",
    ],
    image: IMG.ramsesKarnak,
    featured: true,
  },
  {
    slug: "tauch-schnupperkurs",
    title: "Tauch-Schnupperkurs",
    category: "diving",
    categoryLabel: "Unterwasser",
    duration: "Halbtags · 5 Stunden",
    priceFrom: 58,
    summary:
      "Erster Atemzug unter Wasser mit PADI-zertifizierten Instructoren. Theorie am Strand, erste Tauchgänge im geschützten Hausriff.",
    highlights: [
      "PADI-zertifizierte Instructoren",
      "Komplette Ausrüstung inklusive",
      "Kein Vorwissen nötig",
    ],
    image: IMG.redSeaCoral,
    featured: true,
  },
  {
    slug: "wuestensafari-quad",
    title: "Wüstensafari mit Quad",
    category: "desert",
    categoryLabel: "Wüste",
    duration: "Nachmittag · 5 Stunden",
    priceFrom: 29,
    summary:
      "Mit dem Quad in die arabische Wüste, Besuch eines Beduinendorfs, Kamelritt in der Abenddämmerung, Abendessen unter dem Sternenhimmel.",
    highlights: [
      "Quad-Tour durch die Dünen",
      "Beduinendorf & Kamelritt",
      "Abendessen unter Sternen",
    ],
    image: IMG.dakhlaDunes,
    featured: true,
  },
  {
    slug: "sindbad-unterseeboot",
    title: "Sindbad Unterseeboot",
    category: "sea",
    categoryLabel: "Rotes Meer",
    duration: "3 Stunden",
    priceFrom: 46,
    summary:
      "Im echten U-Boot 25 Meter tief ins Rote Meer — perfekt für Kinder und Nichtschwimmer. Bullaugen mit Blick auf Korallenriffe und Fischschwärme.",
    highlights: [
      "Echtes U-Boot, keine Glasbodenbarkasse",
      "Familienfreundlich ab 3 Jahren",
      "Hotel-Abholung inklusive",
    ],
    image: IMG.dolphinHurghada,
    featured: true,
  },
  {
    slug: "cairo-pyramiden-per-flug",
    title: "Cairo & Pyramiden per Flug",
    category: "cultural",
    categoryLabel: "Kultur",
    duration: "Tagestour · 16 Stunden",
    priceFrom: 247,
    summary:
      "Morgens in den Flieger nach Kairo. Besuch der Pyramiden von Gizeh, der Sphinx und des Ägyptischen Museums. Abends zurück in Hurghada.",
    highlights: [
      "Flüge Hurghada ↔ Kairo inklusive",
      "Pyramiden von Gizeh & Sphinx",
      "Ägyptisches Museum",
    ],
    image: IMG.sphinxPyramids,
    featured: true,
  },
  {
    slug: "luxor-zwei-tage",
    title: "Luxor — Zwei Tage, eine Übernachtung",
    category: "multi-day",
    categoryLabel: "Mehrtagesreisen",
    duration: "2 Tage · 1 Übernachtung",
    priceFrom: 189,
    summary:
      "Tal der Könige, Karnak-Tempel bei Sonnenuntergang, Luxor-Tempel illuminiert bei Nacht. Übernachtung in einem Vier-Sterne-Hotel direkt am Nil.",
    highlights: [
      "Tal der Könige & Karnak-Tempel",
      "Übernachtung im Vier-Sterne-Hotel",
      "Luxor-Tempel nachts illuminiert",
    ],
    image: IMG.allGizahPyramids,
  },
  {
    slug: "delfin-haus-schnorcheln",
    title: "Delfin-Haus Schnorcheltour",
    category: "sea",
    categoryLabel: "Rotes Meer",
    duration: "Ganztags · 8 Stunden",
    priceFrom: 43,
    summary:
      "Schwimmen mit wilden Delfinen in ihrem natürlichen Lebensraum, zwei Schnorchelstopps über unberührten Riffen, Mittagsbuffet an Bord.",
    highlights: [
      "Wilde Delfine in freier Natur",
      "Zwei Riff-Schnorchelstopps",
      "Mittagsbuffet und Getränke",
    ],
    image: IMG.dolphinHurghada,
  },
];

export const featuredTours = tours.filter((t) => t.featured);

export function getToursByCategory(category: TourCategory): Tour[] {
  return tours.filter((t) => t.category === category);
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
