"use client";

import { useRouter } from "next/navigation";
import { ProductForm } from "../../../../components/admin/ProductForm";
import { useAdminProducts } from "../../../../components/admin/AdminProductsProvider";

export default function AdminNewProductPage() {
  const router = useRouter();
  const { addProduct } = useAdminProducts();

  const handleSave = (payload: Parameters<typeof addProduct>[0]) => {
    addProduct(payload);
    router.push("/admin/products");
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Admin
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">Yeni ürün</h1>
          <p className="max-w-2xl text-sm text-zinc-600">
            Bu sayfa yalnızca gelecekteki yönetim paneli için bir iskelet. Kaydet
            ile ürün yerel listeye eklenir ve ürünler sayfasına yönlendirilirsiniz.
          </p>
        </header>

        <ProductForm onSave={handleSave} />
      </div>
    </main>
  );
}
