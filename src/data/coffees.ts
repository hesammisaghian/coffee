export type Coffee = {
  slug: string;
  name: string;
  shortDescription: string;
  roastLevel: "light" | "medium" | "dark";
  origin: string;
  notes: string[];
};

export const coffees: Coffee[] = [
  {
    slug: "dawn-light-filter",
    name: "Dawn Light Filter",
    shortDescription: "A bright, gentle filter roast for slow mornings.",
    roastLevel: "light",
    origin: "Ethiopia & Kenya",
    notes: ["citrus", "stone fruit", "floral"],
  },
  {
    slug: "midday-balance-espresso",
    name: "Midday Balance Espresso",
    shortDescription: "Balanced espresso designed for both straight shots and milk.",
    roastLevel: "medium",
    origin: "Brazil & Colombia",
    notes: ["caramel", "almond", "milk chocolate"],
  },
  {
    slug: "nightfall-slow-brew",
    name: "Nightfall Slow Brew",
    shortDescription: "A deeper roast for unhurried evenings and richer brews.",
    roastLevel: "dark",
    origin: "Guatemala",
    notes: ["dark chocolate", "spice", "toasted sugar"],
  },
];

