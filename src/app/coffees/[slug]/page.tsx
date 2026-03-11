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
            Ürün detay
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {coffee.name}
          </h1>
          {coffee.shortDescription && (
            <p className="max-w-2xl text-sm text-zinc-600">
              {coffee.shortDescription}
            </p>
          )}
        </header>

        {/* Genel bakış */}
        <section
          aria-labelledby="coffee-overview-heading"
          className="space-y-4 border-t border-zinc-200 pt-8"
        >
          <h2
            id="coffee-overview-heading"
            className="text-base font-semibold tracking-tight"
          >
            Genel bakış
          </h2>
          <dl className="space-y-2 text-sm text-zinc-700">
            {coffee.origin && (
              <div className="flex gap-2">
                <dt className="w-32 text-zinc-500">Menşei</dt>
                <dd>{coffee.origin}</dd>
              </div>
            )}
            {coffee.process && (
              <div className="flex gap-2">
                <dt className="w-32 text-zinc-500">Süreç</dt>
                <dd>{coffee.process}</dd>
              </div>
            )}
          </dl>
        </section>

        {/* Tat profili */}
        <section
          aria-labelledby="coffee-flavor-heading"
          className="space-y-3 border-t border-zinc-200 pt-8"
        >
          <h2
            id="coffee-flavor-heading"
            className="text-base font-semibold tracking-tight"
          >
            Tat profili
          </h2>
          {coffee.flavorNotes.length > 0 ? (
            <ul className="flex flex-wrap gap-2 text-xs text-zinc-700">
              {coffee.flavorNotes.map((note) => (
                <li
                  key={note}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1"
                >
                  {note}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-zinc-600">
              Bu kahve için tat notları henüz sisteme eklenmedi.
            </p>
          )}
        </section>

        {/* Üretim yaklaşımı */}
        <section
          aria-labelledby="coffee-process-heading"
          className="space-y-3 border-t border-zinc-200 pt-8"
        >
          <h2
            id="coffee-process-heading"
            className="text-base font-semibold tracking-tight"
          >
            Üretim yaklaşımı
          </h2>
          <p className="max-w-2xl text-sm text-zinc-700">
            Bu marka genel olarak, yeşil kahve çekirdeğini kontrollü sıvı fermantasyon
            ve düşük oksijen ortamı etrafında ele alır. Kimyasal katkı veya yapay aroma
            eklenmez; amaç daha yumuşak, okunabilir ve tutarlı bir fincan profili
            sunmaktır.
          </p>
        </section>

        {/* Paket seçenekleri */}
        <section
          aria-labelledby="coffee-packages-heading"
          className="space-y-3 border-t border-zinc-200 pt-8"
        >
          <h2
            id="coffee-packages-heading"
            className="text-base font-semibold tracking-tight"
          >
            Paket seçenekleri
          </h2>
          {coffee.packageSizes && coffee.packageSizes.length > 0 ? (
            <ul className="flex flex-wrap gap-2 text-xs text-zinc-700">
              {coffee.packageSizes.map((size) => (
                <li
                  key={size}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1"
                >
                  {size}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-zinc-600">
              Bu ürün için paket boyutu bilgileri henüz sisteme eklenmedi.
            </p>
          )}
        </section>

        {/* Dinamik alanlar (admin tanımlı) */}
        {coffee.dynamicFields &&
          coffee.dynamicFields
            .filter((f) => f.visible)
            .sort((a, b) => a.order - b.order)
            .map((field) => (
              <section
                key={field.id}
                aria-labelledby={`dynamic-${field.id}`}
                className="space-y-3 border-t border-zinc-200 pt-8"
              >
                <h2
                  id={`dynamic-${field.id}`}
                  className="text-base font-semibold tracking-tight"
                >
                  {field.label}
                </h2>
                {typeof field.value === "string" ? (
                  <p className="max-w-2xl text-sm text-zinc-700">
                    {field.value}
                  </p>
                ) : (
                  <ul className="flex flex-wrap gap-2 text-xs text-zinc-700">
                    {field.value.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-zinc-200 bg-white px-3 py-1"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

        <div className="border-t border-zinc-200 pt-6">
          <Link
            href="/coffees"
            className="text-xs font-medium text-zinc-700 underline underline-offset-4"
          >
            Kahvelere geri dön
          </Link>
        </div>
      </div>
    </main>
  );
}

