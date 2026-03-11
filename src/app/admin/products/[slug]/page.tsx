import { notFound } from "next/navigation";
import { ProductForm, type ProductFormInitial } from "../../../../components/admin/ProductForm";
import { getCoffeeBySlug } from "../../../../data/coffees";

type AdminEditProductPageProps = {
  params: {
    slug: string;
  };
};

export default function AdminEditProductPage({
  params,
}: AdminEditProductPageProps) {
  const product = getCoffeeBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  const initial: ProductFormInitial = {
    name: product.name,
    slug: product.slug,
    heroImage: product.heroImage,
    galleryImages: product.galleryImages ?? [],
    buyLink: product.buyLink,
    isPublished: product.isPublished ?? false,
    dynamicFields: product.dynamicFields ?? [],
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Admin
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Ürünü düzenle
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600">
            Bu sayfa, mevcut bir ürünü yönetim paneli mantığıyla düzenlemek için
            ilk prototip formudur. Değişiklikler yalnızca yerel state içinde
            tutulur, henüz kaydedilmez.
          </p>
        </header>

        <ProductForm initial={initial} />
      </div>
    </main>
  );
}

