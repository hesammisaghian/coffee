import Link from "next/link";
import { coffees } from "../../data/coffees";

export function ProductsPlaceholderSection() {
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
        Featured coffees
      </h2>
      <p className="max-w-2xl text-sm text-zinc-600">
        A first look at a few coffees shaped by the same controlled liquid fermentation
        approach you read about above.
      </p>

      <ul className="grid gap-4 sm:grid-cols-1">
        {featured.map((coffee) => (
          <li
            key={coffee.slug}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-3"
          >
            <Link href={`/coffees/${coffee.slug}`}>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                    {coffee.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    {coffee.roastLevel} roast
                  </p>
                </div>
                <p className="text-xs text-zinc-600">
                  <span className="font-medium text-zinc-700">Origin:</span>{" "}
                  {coffee.origin}
                </p>
                <p className="text-xs text-zinc-600">{coffee.shortDescription}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
