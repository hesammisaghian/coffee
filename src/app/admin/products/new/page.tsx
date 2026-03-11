"use client";

import { useMemo, useState } from "react";

type AdminDynamicField = {
  id: string;
  label: string;
  rawValue: string;
  visible: boolean;
  order: number;
};

export default function AdminNewProductPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [buyLink, setBuyLink] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const [galleryInput, setGalleryInput] = useState("");
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const [dynamicFields, setDynamicFields] = useState<AdminDynamicField[]>([]);

  const handleAddGalleryImage = () => {
    const trimmed = galleryInput.trim();
    if (!trimmed) return;
    setGalleryImages((prev) => [...prev, trimmed]);
    setGalleryInput("");
  };

  const handleRemoveGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddField = () => {
    setDynamicFields((prev) => [
      ...prev,
      {
        id: `field-${Date.now()}-${prev.length}`,
        label: "",
        rawValue: "",
        visible: true,
        order: prev.length + 1,
      },
    ]);
  };

  const handleUpdateField = (
    id: string,
    patch: Partial<Omit<AdminDynamicField, "id">>
  ) => {
    setDynamicFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, ...patch } : field))
    );
  };

  const handleRemoveField = (id: string) => {
    setDynamicFields((prev) => prev.filter((field) => field.id !== id));
  };

  const previewPayload = useMemo(() => {
    const dynamicPayload = dynamicFields.map((field) => {
      const trimmed = field.rawValue.trim();
      let value: string | string[] = trimmed;

      if (trimmed.includes(",")) {
        value = trimmed
          .split(",")
          .map((part) => part.trim())
          .filter(Boolean);
      }

      return {
        id: field.id,
        label: field.label,
        value,
        visible: field.visible,
        order: field.order || 0,
      };
    });

    return {
      name,
      slug,
      heroImage,
      galleryImages,
      buyLink,
      isPublished,
      dynamicFields: dynamicPayload,
    };
  }, [name, slug, heroImage, galleryImages, buyLink, isPublished, dynamicFields]);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
        {/* Başlık */}
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Admin
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">Yeni ürün</h1>
          <p className="max-w-2xl text-sm text-zinc-600">
            Bu sayfa yalnızca gelecekteki yönetim paneli için bir iskelet. Veriler
            şu anda yalnızca yerel durum (state) içinde tutulur, kaydedilmez.
          </p>
        </header>

        {/* Sabit alanlar */}
        <section className="rounded-lg border border-zinc-200 bg-white p-4 sm:p-6">
          <h2 className="text-sm font-semibold text-zinc-800">Sabit alanlar</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-xs font-medium text-zinc-600">
                Ürün adı
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-medium text-zinc-600">
                Slug
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-medium text-zinc-600">
                Hero image yolu
              </label>
              <input
                type="text"
                value={heroImage}
                onChange={(e) => setHeroImage(e.target.value)}
                placeholder="/images/urun-hero.jpg"
                className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-medium text-zinc-600">
                Buy link (satın alma / yönlendirme linki)
              </label>
              <input
                type="text"
                value={buyLink}
                onChange={(e) => setBuyLink(e.target.value)}
                placeholder="https://..."
                className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input
              id="published"
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="h-4 w-4 rounded border-zinc-300 text-zinc-900"
            />
            <label
              htmlFor="published"
              className="text-xs font-medium text-zinc-700"
            >
              Yayında
            </label>
          </div>
        </section>

        {/* Galeri görselleri */}
        <section className="rounded-lg border border-zinc-200 bg-white p-4 sm:p-6">
          <h2 className="text-sm font-semibold text-zinc-800">Galeri görselleri</h2>
          <p className="mt-1 text-xs text-zinc-500">
            Şimdilik yalnızca görsel yolu (path) giriliyor. Yükleme ve gerçek
            dosya yönetimi daha sonra eklenecek.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              value={galleryInput}
              onChange={(e) => setGalleryInput(e.target.value)}
              placeholder="/images/urun-galeri-1.jpg"
              className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
            <button
              type="button"
              onClick={handleAddGalleryImage}
              className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Galeriye ekle
            </button>
          </div>
          {galleryImages.length > 0 && (
            <ul className="mt-4 space-y-2 text-xs text-zinc-700">
              {galleryImages.map((path, index) => (
                <li
                  key={`${path}-${index}`}
                  className="flex items-center justify-between rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2"
                >
                  <span className="truncate">{path}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveGalleryImage(index)}
                    className="ml-3 text-xs font-medium text-zinc-500 hover:text-zinc-800"
                  >
                    Kaldır
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Dinamik alanlar */}
        <section className="rounded-lg border border-zinc-200 bg-white p-4 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-semibold text-zinc-800">
                Dinamik alanlar
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Menşei, demleme yöntemi, aroma, özel not gibi metin tabanlı
                alanlar ekleyebilirsiniz.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddField}
              className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Alan ekle
            </button>
          </div>

          {dynamicFields.length > 0 ? (
            <div className="mt-4 space-y-4">
              {dynamicFields.map((field) => (
                <div
                  key={field.id}
                  className="rounded-md border border-zinc-200 bg-zinc-50 p-3 sm:p-4"
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-zinc-600">
                        Label
                      </label>
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) =>
                          handleUpdateField(field.id, {
                            label: e.target.value,
                          })
                        }
                        placeholder="Örn: Menşei"
                        className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-zinc-600">
                        Değer
                      </label>
                      <input
                        type="text"
                        value={field.rawValue}
                        onChange={(e) =>
                          handleUpdateField(field.id, {
                            rawValue: e.target.value,
                          })
                        }
                        placeholder="Tek değer veya virgülle ayrılmış liste"
                        className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
                      />
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <input
                        id={`visible-${field.id}`}
                        type="checkbox"
                        checked={field.visible}
                        onChange={(e) =>
                          handleUpdateField(field.id, {
                            visible: e.target.checked,
                          })
                        }
                        className="h-4 w-4 rounded border-zinc-300 text-zinc-900"
                      />
                      <label
                        htmlFor={`visible-${field.id}`}
                        className="text-xs font-medium text-zinc-700"
                      >
                        Yayında göster
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-xs font-medium text-zinc-600">
                        Sıra
                      </label>
                      <input
                        type="number"
                        value={field.order}
                        onChange={(e) =>
                          handleUpdateField(field.id, {
                            order: Number(e.target.value) || 0,
                          })
                        }
                        className="w-20 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-900 outline-none focus:border-zinc-400"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveField(field.id)}
                      className="ml-auto text-xs font-medium text-red-600 hover:text-red-700"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-xs text-zinc-500">
              Henüz bir dinamik alan eklenmedi. Başlamak için &quot;Alan ekle&quot;
              butonunu kullanın.
            </p>
          )}
        </section>

        {/* JSON önizleme */}
        <section className="rounded-lg border border-zinc-200 bg-white p-4 sm:p-6">
          <h2 className="text-sm font-semibold text-zinc-800">
            JSON önizleme
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Bu blok, ileride API&apos;ye veya veritabanına gönderilecek ürün
            nesnesinin kabaca nasıl görüneceğini gösterir.
          </p>
          <pre className="mt-4 max-h-80 overflow-auto rounded-md bg-zinc-900 p-4 text-xs text-zinc-100">
            {JSON.stringify(previewPayload, null, 2)}
          </pre>
        </section>
      </div>
    </main>
  );
}

