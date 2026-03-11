import Link from "next/link";
import { coffees } from "../../../data/coffees";

export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Admin
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">
              Ürünler
            </h1>
          </div>
          <Link
            href="/admin/products/new"
            className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
          >
            Yeni ürün ekle
          </Link>
        </header>

        <section className="rounded-lg border border-zinc-200 bg-white">
          <div className="border-b border-zinc-200 px-4 py-3">
            <h2 className="text-sm font-medium text-zinc-800">
              Mevcut ürünler (yerel veri)
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-200 text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                    İsim
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Slug
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Yayın
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Hero
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Buy link
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Dinamik alan
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Durum
                  </th>
                  <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wide text-zinc-500">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                {coffees.map((coffee) => (
                  <tr key={coffee.slug}>
                    <td className="px-4 py-2 text-zinc-800">{coffee.name}</td>
                    <td className="px-4 py-2 text-xs text-zinc-500">
                      {coffee.slug}
                    </td>
                    <td className="px-4 py-2 text-xs text-zinc-700">
                      {coffee.isPublished ? "Yayında" : "Taslak"}
                    </td>
                    <td className="px-4 py-2 text-xs text-zinc-700">
                      {coffee.heroImage ? "Tanımlı" : "Yok"}
                    </td>
                    <td className="px-4 py-2 text-xs text-zinc-700">
                      {coffee.buyLink ? "Var" : "Yok"}
                    </td>
                    <td className="px-4 py-2 text-xs text-zinc-700">
                      {(coffee.dynamicFields && coffee.dynamicFields.length) || 0}
                    </td>
                    <td className="px-4 py-2 text-xs text-zinc-700">
                      {coffee.name &&
                      coffee.slug &&
                      coffee.heroImage &&
                      coffee.buyLink
                        ? "Temel yapı hazır"
                        : "Temel bilgiler eksik"}
                    </td>
                    <td className="px-4 py-2 text-right">
                      <Link
                        href={`/admin/products/${coffee.slug}`}
                        className="inline-flex items-center rounded-md border border-zinc-200 px-2 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
                      >
                        Düzenle
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

