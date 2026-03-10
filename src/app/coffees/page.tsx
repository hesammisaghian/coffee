import Link from "next/link";
import { coffees } from "../../data/coffees";

export default function CoffeesPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:py-20">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Kahveler
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600">
            Bu sayfa, markanın kontrollü sıvı fermantasyon yaklaşımıyla hazırlanmış
            kahvelerine genel bir bakış sunar. Satın alma akışı henüz aktif değildir;
            amaç profilleri ve yaklaşımı tanıtmaktır.
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
            Ürünler
          </h2>
          <ul className="space-y-4">
            {coffees.map((coffee) => (
              <li
                key={coffee.slug}
                className="rounded-lg border border-zinc-200 bg-white px-4 py-3"
              >
                <Link href={`/coffees/${coffee.slug}`}>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                      {coffee.name}
                    </h3>
                    {coffee.shortDescription && (
                      <p className="text-xs text-zinc-600">
                        {coffee.shortDescription}
                      </p>
                    )}
                    {coffee.flavorNotes.length > 0 && (
                      <p className="text-xs text-zinc-600">
                        <span className="font-medium text-zinc-700">
                          Tat notaları:
                        </span>{" "}
                        {coffee.flavorNotes.join(", ")}
                      </p>
                    )}
                    {coffee.packageSizes &&
                      coffee.packageSizes.length > 0 && (
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
      </div>
    </main>
  );
}
