import { coffees } from "../../data/coffees";

export default function CoffeesPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:py-20">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Coffees
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600">
            A first look at a small sample of coffees that will eventually shape the
            collection. This list is local and will evolve over time.
          </p>
        </header>

        <section
          aria-labelledby="coffee-list-heading"
          className="space-y-4 border-t border-zinc-200 pt-8"
        >
          <h2
            id="coffee-list-heading"
            className="text-base font-semibold tracking-tight"
          >
            Coffees in focus
          </h2>
          <ul className="space-y-4">
            {coffees.map((coffee) => (
              <li
                key={coffee.slug}
                className="rounded-lg border border-zinc-200 bg-white px-4 py-3"
              >
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
                    {coffee.shortDescription}
                  </p>
                  <p className="text-xs text-zinc-600">
                    <span className="font-medium text-zinc-700">Origin:</span>{" "}
                    {coffee.origin}
                  </p>
                  {coffee.notes.length > 0 && (
                    <p className="text-xs text-zinc-600">
                      <span className="font-medium text-zinc-700">Notes:</span>{" "}
                      {coffee.notes.join(", ")}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
