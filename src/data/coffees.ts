export type Coffee = {
  slug: string;
  name: string;
  shortDescription: string;
  flavorNotes: string[];
  origin?: string;
  process?: string;
  packageSizes?: string[];
};

export const coffees: Coffee[] = [
  {
    slug: "espresso",
    name: "Espresso",
    shortDescription:
      "Yoğun gövdeli, fındıksı kakao karakterine sahip espresso harmanı.",
    flavorNotes: ["Fındıksı kakao"],
    packageSizes: ["250 gr", "1 kg"],
  },
  {
    slug: "turk-kahvesi",
    name: "Türk Kahvesi",
    shortDescription:
      "Klasik Türk kahvesi formunda, bitter çikolata ve kavrulmuş fındık çağrışımlı bir profil.",
    flavorNotes: ["Bitter çikolata", "kakao", "kavrulmuş fındık"],
    packageSizes: ["250 gr", "1 kg"],
  },
  {
    slug: "rose-fermente-turk-kahvesi",
    name: "Rose Fermente Türk Kahvesi",
    shortDescription:
      "Gül notalarıyla desteklenmiş fermente Türk kahvesi yorumu.",
    flavorNotes: ["Gül"],
    packageSizes: ["250 gr"],
  },
  {
    slug: "strawberry-fermente-turk-kahvesi",
    name: "Strawberry Fermente Türk Kahvesi",
    shortDescription:
      "Çilek aromatiklerini öne çıkaran fermente Türk kahvesi yorumu.",
    flavorNotes: ["Çilek"],
    packageSizes: ["250 gr"],
  },
  {
    slug: "milk-chocolate-fermente-turk-kahvesi",
    name: "Milk Chocolate Fermente Türk Kahvesi",
    shortDescription:
      "Fındık ve çikolata çağrışımlarıyla daha yuvarlak bir fermente Türk kahvesi profili.",
    flavorNotes: ["Fındık", "çikolata"],
    packageSizes: ["250 gr"],
  },
  {
    slug: "red-forest-tart",
    name: "Red Forest Tart",
    shortDescription:
      "Kırmızı elma, kırmızı meyve ve fındık tonlarını bir araya getiren zengin bir profil.",
    flavorNotes: ["Kırmızı elma", "frenk üzümü", "fındık", "çikolata"],
    packageSizes: ["250 gr", "1 kg", "200 gr"],
  },
  {
    slug: "rubus",
    name: "Rubus",
    shortDescription:
      "Böğürtlen karakteri etrafında kurgulanmış, kırmızı meyve odaklı bir kahve.",
    flavorNotes: ["Böğürtlen"],
    packageSizes: ["250 gr", "1 kg", "200 gr"],
  },
  {
    slug: "ambrosia",
    name: "Ambrosia",
    shortDescription:
      "Mango ve çilek çağrışımları taşıyan, meyve yönü güçlü bir profil.",
    flavorNotes: ["Mango", "Çilek"],
    packageSizes: ["250 gr", "1 kg", "200 gr"],
  },
  {
    slug: "luna",
    name: "Luna",
    shortDescription:
      "Yaban mersini, çarkıfelek ve limon notalarını bir arada hissettiren aydınlık bir profil.",
    flavorNotes: ["Yaban mersini", "çarkıfelek", "limon"],
    packageSizes: ["250 gr", "1 kg", "200 gr"],
  },
  {
    slug: "purpurea",
    name: "Purpurea",
    shortDescription:
      "Yasemin ve bergamot dokunuşlarını böğürtlen ve frenk üzümüyle buluşturan kompleks bir profil.",
    flavorNotes: ["Yasemin", "bergamot", "böğürtlen", "frenk üzümü"],
    packageSizes: ["200 gr"],
  },
  {
    slug: "blue-velvet",
    name: "Blue Velvet",
    shortDescription:
      "Yaban mersini, şeftali, vanilya ve kakao notalarıyla kadifemsi bir tat profili.",
    flavorNotes: ["Yaban mersini", "şeftali", "vanilya", "kakao"],
    packageSizes: ["200 gr"],
  },
];

export function getCoffeeBySlug(slug: string): Coffee | undefined {
  return coffees.find((coffee) => coffee.slug === slug);
}

export function getCoffeeSlugs(): string[] {
  return coffees.map((coffee) => coffee.slug);
}

