import Link from "next/link";
import { notFound } from "next/navigation";
import { getCoffeeBySlug, getCoffeeSlugs } from "../../../data/coffees";

type CoffeePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const slugs = getCoffeeSlugs();

  return slugs.map((slug) => ({ slug }));
}

export default function CoffeeDetailPage({ params }: CoffeePageProps) {
  const coffee = getCoffeeBySlug(params.slug);

  if (!coffee) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:py-20">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Coffee detail
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {coffee.name}
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600">
            {coffee.shortDescription}
          </p>
        </header>

        {/* Overview */}
        <section
          aria-labelledby="coffee-overview-heading"
          className="space-y-4 border-t border-zinc-200 pt-8"
        >
          <h2
            id="coffee-overview-heading"
            className="text-base font-semibold tracking-tight"
          >
            Overview
          </h2>
          <dl className="space-y-2 text-sm text-zinc-700">
            <div className="flex gap-2">
              <dt className="w-32 text-zinc-500">Origin</dt>
              <dd>{coffee.origin}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-32 text-zinc-500">Roast level</dt>
              <dd className="capitalize">{coffee.roastLevel}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-32 text-zinc-500">Anaerobic</dt>
              <dd>{coffee.anaerobic ? "Yes" : "No"}</dd>
            </div>
          </dl>
        </section>

        {/* Process */}
        <section
          aria-labelledby="coffee-process-heading"
          className="space-y-3 border-t border-zinc-200 pt-8"
        >
          <h2
            id="coffee-process-heading"
            className="text-base font-semibold tracking-tight"
          >
            Process
          </h2>
          <p className="text-sm text-zinc-700">
            <span className="font-medium text-zinc-800">Process type:</span>{" "}
            {coffee.processType}
          </p>
          <p className="text-sm text-zinc-700">
            <span className="font-medium text-zinc-800">Fermentation style:</span>{" "}
            {coffee.fermentationStyle}
          </p>
          <dl className="space-y-1 text-xs text-zinc-700">
            <div className="flex gap-2">
              <dt className="w-36 text-zinc-500">Chemical additives</dt>
              <dd>{coffee.chemicalAdditiveFree ? "None" : "See notes"}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-36 text-zinc-500">Artificial aroma</dt>
              <dd>{coffee.artificialAromaFree ? "None" : "See notes"}</dd>
            </div>
          </dl>
          {coffee.extractsUsed && coffee.extractsUsed.length > 0 && (
            <p className="text-xs text-zinc-600">
              <span className="font-medium text-zinc-700">Natural extracts:</span>{" "}
              {coffee.extractsUsed.join(", ")}
            </p>
          )}
          {coffee.microorganism && (
            <p className="text-xs text-zinc-600">
              <span className="font-medium text-zinc-700">Microorganism:</span>{" "}
              {coffee.microorganism}
            </p>
          )}
        </section>

        {/* Flavor profile */}
        <section
          aria-labelledby="coffee-flavor-heading"
          className="space-y-3 border-t border-zinc-200 pt-8"
        >
          <h2
            id="coffee-flavor-heading"
            className="text-base font-semibold tracking-tight"
          >
            Flavor profile
          </h2>
          <div className="space-y-2 text-xs text-zinc-700">
            <div>
              <p className="font-medium text-zinc-800">Flavor notes</p>
              <ul className="mt-1 flex flex-wrap gap-2">
                {coffee.flavorNotes.map((note) => (
                  <li
                    key={note}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>
            {coffee.textureNotes && coffee.textureNotes.length > 0 && (
              <div>
                <p className="font-medium text-zinc-800">Texture</p>
                <p className="mt-1 text-zinc-700">
                  {coffee.textureNotes.join(", ")}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Functional / quality notes */}
        <section
          aria-labelledby="coffee-functional-heading"
          className="space-y-3 border-t border-zinc-200 pt-8"
        >
          <h2
            id="coffee-functional-heading"
            className="text-base font-semibold tracking-tight"
          >
            Functional & quality notes
          </h2>
          <ul className="space-y-1 text-xs text-zinc-700">
            {coffee.caffeineNote && <li>{coffee.caffeineNote}</li>}
            {coffee.antioxidantNote && <li>{coffee.antioxidantNote}</li>}
            {coffee.digestionNote && <li>{coffee.digestionNote}</li>}
            {coffee.prebioticNote && <li>{coffee.prebioticNote}</li>}
            {coffee.consistencyNote && <li>{coffee.consistencyNote}</li>}
            {coffee.moldAflatoxinNote && <li>{coffee.moldAflatoxinNote}</li>}
          </ul>
          {coffee.sustainabilityNotes && coffee.sustainabilityNotes.length > 0 && (
            <div className="space-y-1 text-xs text-zinc-700">
              <p className="font-medium text-zinc-800">Sustainability</p>
              <ul className="list-disc pl-5">
                {coffee.sustainabilityNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Brewing suggestions */}
        <section
          aria-labelledby="coffee-brewing-heading"
          className="space-y-3 border-t border-zinc-200 pt-8"
        >
          <h2
            id="coffee-brewing-heading"
            className="text-base font-semibold tracking-tight"
          >
            Brewing suggestions
          </h2>
          <p className="text-sm text-zinc-700">
            Built to work well with the following methods:
          </p>
          <ul className="flex flex-wrap gap-2 text-xs text-zinc-700">
            {coffee.brewMethods.map((method) => (
              <li
                key={method}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1"
              >
                {method}
              </li>
            ))}
          </ul>
          {coffee.customizableFermentation && (
            <p className="text-xs text-zinc-600">
              This profile can be tuned in future fermentation runs for specific
              brewing setups.
            </p>
          )}
        </section>

        <div className="border-t border-zinc-200 pt-6">
          <Link
            href="/coffees"
            className="text-xs font-medium text-zinc-700 underline underline-offset-4"
          >
            Back to coffees
          </Link>
        </div>
      </div>
    </main>
  );
}

