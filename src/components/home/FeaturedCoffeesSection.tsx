import Link from "next/link";
import { coffees } from "../../data/coffees";

export function FeaturedCoffeesSection() {
  const featured = coffees.slice(0, 3);

  return (
    <section
      aria-labelledby="coffee-products-heading"
      className="space-y-4 border-t border-zinc-200 pt-8"
    >
      <h2
        id="coffee-products-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Öne çıkan kahveler
      </h2>

      <p className="max-w-2xl text-sm text-zinc-600">
        Kontrollü üretim yaklaşımını farklı profillerle gösteren ilk ürün seçkisi.
      </p>

      <ul className="grid gap-4 sm:grid-cols-1">
        {featured.map((coffee) => (
          <li
            key={coffee.slug}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-3"
          >
            <Link href={`/coffees/${coffee.slug}`} className="block">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                  {coffee.name}
                </h3>

                <p className="text-xs text-zinc-600">
                  {coffee.shortDescription}
                </p>

                {coffee.flavorNotes.length > 0 && (
                  <p className="text-xs text-zinc-600">
                    <span className="font-medium text-zinc-700">
                      Tat notaları:
                    </span>{" "}
                    {coffee.flavorNotes.join(", ")}
                  </p>
                )}

                {coffee.packageSizes && coffee.packageSizes.length > 0 && (
                  <p className="text-xs text-zinc-600">
                    <span className="font-medium text-zinc-700">
                      Paket boyutları:
                    </span>{" "}
                    {coffee.packageSizes.join(", ")}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}