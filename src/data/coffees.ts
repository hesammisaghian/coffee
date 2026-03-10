export type Coffee = {
  slug: string;
  name: string;
  shortDescription: string;
  origin: string;
  roastLevel: "light" | "medium" | "dark";
  processType: string;
  fermentationStyle: string;
  anaerobic: boolean;
  chemicalAdditiveFree: boolean;
  artificialAromaFree: boolean;
  extractsUsed?: string[];
  microorganism?: string;
  flavorNotes: string[];
  textureNotes?: string[];
  caffeineNote?: string;
  antioxidantNote?: string;
  digestionNote?: string;
  prebioticNote?: string;
  consistencyNote?: string;
  sustainabilityNotes?: string[];
  moldAflatoxinNote?: string;
  brewMethods: string[];
  customizableFermentation?: boolean;
  heroImage: string;
  galleryImages: string[];
};

export const coffees: Coffee[] = [
  {
    slug: "citrus-wash-anaerobic-filter",
    name: "Citrus Wash Anaerobic Filter",
    shortDescription:
      "A controlled liquid fermentation filter coffee with bright citrus and clean sweetness.",
    origin: "Sidama, Ethiopia",
    roastLevel: "light",
    processType: "washed with controlled liquid fermentation",
    fermentationStyle: "closed-tank, low-oxygen, fruit-assisted",
    anaerobic: true,
    chemicalAdditiveFree: true,
    artificialAromaFree: true,
    extractsUsed: ["lemon peel infusion", "orange blossom water"],
    microorganism: "selected lactic acid cultures from previous batches",
    flavorNotes: ["lemon zest", "white peach", "orange blossom"],
    textureNotes: ["silky", "light", "clean finish"],
    caffeineNote: "Moderate caffeine, designed for clarity over intensity.",
    antioxidantNote: "Fermentation is tuned to preserve bright, stable acidity.",
    digestionNote: "Clean profile aimed at low bitterness and low stomach load.",
    prebioticNote:
      "Fermentation is tuned for stability, not for aggressive prebiotic effects.",
    consistencyNote:
      "Built for repeatable extractions with tight fermentation windows.",
    sustainabilityNotes: [
      "Reduced water use versus classic multi-stage washing.",
      "Fermentation liquid is re-used and filtered across batches.",
    ],
    moldAflatoxinNote:
      "Lots are screened for mold and off-notes before and after fermentation.",
    brewMethods: ["V60", "Kalita", "batch brewer"],
    customizableFermentation: false,
    heroImage: "/images/coffees/citrus-wash-anaerobic-filter-hero.jpg",
    galleryImages: [
      "/images/coffees/citrus-wash-anaerobic-filter-1.jpg",
      "/images/coffees/citrus-wash-anaerobic-filter-2.jpg",
    ],
  },
  {
    slug: "red-fruit-anaerobic-espresso",
    name: "Red Fruit Anaerobic Espresso",
    shortDescription:
      "An anaerobic espresso built around controlled liquid fermentation and red-fruit clarity.",
    origin: "Huila, Colombia",
    roastLevel: "medium",
    processType: "anaerobic controlled liquid fermentation",
    fermentationStyle: "sealed stainless tank, fruit-assisted",
    anaerobic: true,
    chemicalAdditiveFree: true,
    artificialAromaFree: true,
    extractsUsed: ["hibiscus reduction", "red grape skin extract"],
    microorganism:
      "house lactic and yeast culture maintained across fermentation cycles",
    flavorNotes: ["ripe strawberry", "red grape", "cocoa nib"],
    textureNotes: ["dense", "coating", "lingering finish"],
    caffeineNote: "Higher perceived intensity, tuned for short milk drinks.",
    antioxidantNote:
      "Extended contact time is kept within safe windows for a stable cup.",
    digestionNote:
      "Fermentation aims to reduce harsh bitterness common in darker espresso roasts.",
    prebioticNote:
      "Not positioned as a health product; focus is on clarity and consistency.",
    consistencyNote:
      "Profile is locked to be repeatable across roasts and harvests where possible.",
    sustainabilityNotes: [
      "Fermentation liquid is tracked and filtered between runs.",
      "Batches are cupped for off-flavors tied to poor storage or contamination.",
    ],
    moldAflatoxinNote:
      "Lots are rejected if storage or moisture history is uncertain.",
    brewMethods: ["espresso", "aeropress", "moka pot"],
    customizableFermentation: false,
    heroImage: "/images/coffees/red-fruit-anaerobic-espresso-hero.jpg",
    galleryImages: [
      "/images/coffees/red-fruit-anaerobic-espresso-1.jpg",
      "/images/coffees/red-fruit-anaerobic-espresso-2.jpg",
    ],
  },
  {
    slug: "low-impact-night-brew",
    name: "Low Impact Night Brew",
    shortDescription:
      "A later-day coffee built around softer acidity, controlled fermentation, and gentle digestion.",
    origin: "Guatemala & Mexico",
    roastLevel: "medium",
    processType: "hybrid washed / liquid fermentation",
    fermentationStyle: "closed-tank, short-contact, low-oxygen",
    anaerobic: true,
    chemicalAdditiveFree: true,
    artificialAromaFree: true,
    extractsUsed: ["chicory root infusion"],
    microorganism: "selected lactic culture with low acetic expression",
    flavorNotes: ["milk chocolate", "roasted hazelnut", "subtle dried fig"],
    textureNotes: ["round", "soft", "low bitterness"],
    caffeineNote: "Designed to feel gentler in the evening, not decaf.",
    antioxidantNote:
      "Balanced profile with focus on stability rather than extreme extraction.",
    digestionNote:
      "Built for low sharpness and a smoother experience for sensitive drinkers.",
    prebioticNote:
      "Uses chicory infusion as a subtle prebiotic support without dominating flavor.",
    consistencyNote:
      "Tank timings and temperature are logged for repeatable outcomes.",
    sustainabilityNotes: [
      "Fermentation liquid use is monitored to reduce waste.",
      "Roasts are profiled to avoid unnecessary energy use.",
    ],
    moldAflatoxinNote:
      "Lots are tested and green storage is controlled for moisture and airflow.",
    brewMethods: ["French press", "V60", "cold brew"],
    customizableFermentation: true,
    heroImage: "/images/coffees/low-impact-night-brew-hero.jpg",
    galleryImages: [
      "/images/coffees/low-impact-night-brew-1.jpg",
      "/images/coffees/low-impact-night-brew-2.jpg",
    ],
  },
];

export function getCoffeeBySlug(slug: string): Coffee | undefined {
  return coffees.find((coffee) => coffee.slug === slug);
}

export function getCoffeeSlugs(): string[] {
  return coffees.map((coffee) => coffee.slug);
}

