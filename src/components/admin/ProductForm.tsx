"use client";

import { useMemo, useState } from "react";

type DynamicFieldInput = {
  id: string;
  label: string;
  rawValue: string;
  visible: boolean;
  order: number;
  valueMode: "single" | "multiple";
};

export type ProductFormInitial = {
  name?: string;
  slug?: string;
  shortDescription?: string;
  packageSizes?: string[];
  heroImage?: string;
  galleryImages?: string[];
  buyLink?: string;
  isPublished?: boolean;
  dynamicFields?: {
    id: string;
    label: string;
    value: string | string[];
    visible: boolean;
    order: number;
  }[];
};

type ProductFormProps = {
  initial?: ProductFormInitial;
};

function slugify(input: string): string {
  const map: Record<string, string> = {
    ü: "u",
    Ü: "u",
    ö: "o",
    Ö: "o",
    ı: "i",
    İ: "i",
    ş: "s",
    Ş: "s",
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
  };

  const replaced = input
    .split("")
    .map((ch) => map[ch] ?? ch)
    .join("")
    .toLowerCase();

  return replaced
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ProductForm({ initial }: ProductFormProps) {
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<string[]>([]);

  const [name, setName] = useState(initial?.name ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState<boolean>(
    Boolean(initial?.slug)
  );
  const [heroImage, setHeroImage] = useState(initial?.heroImage ?? "");
  const [buyLink, setBuyLink] = useState(initial?.buyLink ?? "");
  const [isPublished, setIsPublished] = useState(initial?.isPublished ?? false);

  const [galleryInput, setGalleryInput] = useState("");
  const [galleryImages, setGalleryImages] = useState<string[]>(
    initial?.galleryImages ?? []
  );

  const [dynamicFields, setDynamicFields] = useState<DynamicFieldInput[]>(
    () =>
      (initial?.dynamicFields ?? []).map((field) => ({
        id: field.id,
        label: field.label,
        rawValue: Array.isArray(field.value)
          ? field.value.join("\n")
          : field.value ?? "",
        visible: field.visible,
        order: field.order,
        valueMode: Array.isArray(field.value) ? "multiple" : "single",
      }))
  );

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
        valueMode: "single",
      },
    ]);
  };

  const handleUpdateField = (
    id: string,
    patch: Partial<Omit<DynamicFieldInput, "id">>
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

      if (field.valueMode === "multiple") {
        value = trimmed
          .split("\n")
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

  const readiness = useMemo(() => {
    const missing: string[] = [];

    const hasName = Boolean(name && name.trim());
    const hasSlug = Boolean(slug && slug.trim());
    const hasShortDescription = Boolean(
      initial?.shortDescription && initial.shortDescription.trim()
    );
    const hasPackageSizes = Boolean(
      initial?.packageSizes && initial.packageSizes.length > 0
    );
    const hasHeroImage = Boolean(heroImage && heroImage.trim());
    const hasBuyLink = Boolean(buyLink && buyLink.trim());

    if (!hasShortDescription) {
      missing.push("Kısa açıklama eksik");
    }
    if (!hasPackageSizes) {
      missing.push("Paket boyutu eksik");
    }
    if (!hasHeroImage) {
      missing.push("Hero görsel eksik");
    }
    if (!hasBuyLink) {
      missing.push("Buy link eksik");
    }

    const isReady =
      hasName &&
      hasSlug &&
      hasShortDescription &&
      hasPackageSizes &&
      hasHeroImage &&
      hasBuyLink;

    return { isReady, missing };
  }, [name, slug, heroImage, buyLink, initial?.shortDescription, initial?.packageSizes]);

  const handleNameChange = (value: string) => {
    setName(value);

    // Yeni ürün için, slug elle düzenlenmediyse isme göre otomatik üret.
    if (!slugManuallyEdited && !initial?.slug) {
      const next = slugify(value);
      setSlug(next);
    }
  };

  const handleSave = () => {
    const validationErrors: string[] = [];

    if (!name.trim()) {
      validationErrors.push("Ürün adı boş bırakılamaz.");
    }
    if (!slug.trim()) {
      validationErrors.push("Slug boş bırakılamaz.");
    }

    dynamicFields.forEach((field, index) => {
      const label = field.label.trim();
      const raw = field.rawValue.trim();
      if (!label) {
        validationErrors.push(
          `Dinamik alan #${index + 1} için label boş bırakılamaz.`
        );
      }

      if (field.valueMode === "single") {
        if (!raw) {
          validationErrors.push(
            `Dinamik alan "${label || `#${index + 1}`}" için değer boş bırakılamaz.`
          );
        }
      } else {
        const lines = raw
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        if (lines.length === 0) {
          validationErrors.push(
            `Dinamik alan "${label || `#${index + 1}`}" için en az bir satır değer girilmelidir.`
          );
        }
      }
    });

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSaveStatus("error");
      return;
    }

    setErrors([]);
    setSaveStatus("saving");

    // Yerel-only mock kaydetme: konsola yaz ve başarı durumu göster.
    console.log("Mock admin product save payload:", previewPayload);

    setSaveStatus("success");
  };

  return (
    <div className="flex flex-col gap-8">
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
              onChange={(e) => handleNameChange(e.target.value)}
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
              onChange={(e) => {
                setSlug(e.target.value);
                setSlugManuallyEdited(true);
              }}
              className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
            />
            <p className="text-[11px] text-zinc-500">
              Slug, ürün adından otomatik üretilebilir; isterseniz burada elle
              düzenleyebilirsiniz.
            </p>
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
          Şimdilik yalnızca görsel yolu (path) giriliyor. Yükleme ve gerçek dosya
          yönetimi daha sonra eklenecek.
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
              Menşei, demleme yöntemi, aroma, özel not gibi metin tabanlı alanlar
              ekleyebilirsiniz.
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
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-medium text-zinc-600">
                        Değer modu
                      </span>
                      <div className="flex items-center gap-3 text-xs text-zinc-700">
                        <label className="inline-flex items-center gap-1">
                          <input
                            type="radio"
                            name={`mode-${field.id}`}
                            checked={field.valueMode === "single"}
                            onChange={() =>
                              handleUpdateField(field.id, {
                                valueMode: "single",
                              })
                            }
                            className="h-3 w-3 border-zinc-300 text-zinc-900"
                          />
                          <span>Tek değer</span>
                        </label>
                        <label className="inline-flex items-center gap-1">
                          <input
                            type="radio"
                            name={`mode-${field.id}`}
                            checked={field.valueMode === "multiple"}
                            onChange={() =>
                              handleUpdateField(field.id, {
                                valueMode: "multiple",
                              })
                            }
                            className="h-3 w-3 border-zinc-300 text-zinc-900"
                          />
                          <span>Çoklu değer</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-zinc-600">
                        Değer
                      </label>
                      {field.valueMode === "single" ? (
                        <input
                          type="text"
                          value={field.rawValue}
                          onChange={(e) =>
                            handleUpdateField(field.id, {
                              rawValue: e.target.value,
                            })
                          }
                          placeholder="Tek satır metin"
                          className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
                        />
                      ) : (
                        <textarea
                          value={field.rawValue}
                          onChange={(e) =>
                            handleUpdateField(field.id, {
                              rawValue: e.target.value,
                            })
                          }
                          placeholder={"Her satıra bir değer yazın\nÖrn:\nFındık\nÇikolata\nMeyvemsi"}
                          className="min-h-[90px] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-400"
                        />
                      )}
                      <p className="text-[10px] text-zinc-500">
                        Tek değer: tek satır metin. Çoklu değer: her satır ayrı
                        bir öğe olarak yorumlanır.
                      </p>
                    </div>
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
        <h2 className="text-sm font-semibold text-zinc-800">JSON önizleme</h2>
        <p className="mt-1 text-xs text-zinc-500">
          Bu blok, ileride API&apos;ye veya veritabanına gönderilecek ürün nesnesinin
          kabaca nasıl görüneceğini gösterir.
        </p>
        <pre className="mt-4 max-h-80 overflow-auto rounded-md bg-zinc-900 p-4 text-xs text-zinc-100">
          {JSON.stringify(previewPayload, null, 2)}
        </pre>
      </section>

      {/* Kaydet alanı */}
      <section className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 sm:p-6">
        {/* Yayın hazırlığı özeti */}
        <div className="space-y-1 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
          <p className="text-xs font-semibold text-zinc-800">
            Yayın durumu:{" "}
            <span className="font-normal">
              {readiness.isReady ? "Yayına hazır" : "Eksikler var"}
            </span>
          </p>
          {!readiness.isReady && (
            <p className="text-[11px] text-zinc-500">
              {readiness.missing.length > 0
                ? readiness.missing.join(" • ")
                : "Bu ürünün yayına hazır olması için bazı temel alanların doldurulması gerekiyor."}
            </p>
          )}
          {isPublished && !readiness.isReady && (
            <p className="text-[11px] font-medium text-amber-700">
              Bu ürün &quot;Yayında&quot; olarak işaretlendi, ancak hâlâ eksik
              bilgiler içeriyor. Lütfen listeyi gözden geçirin.
            </p>
          )}
        </div>

        {errors.length > 0 && (
          <div className="space-y-1 rounded-md border border-red-200 bg-red-50 px-3 py-2">
            <p className="text-xs font-semibold text-red-700">
              Formda düzeltmeniz gereken alanlar var:
            </p>
            <ul className="list-disc space-y-0.5 pl-4 text-xs text-red-700">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {saveStatus === "success" && errors.length === 0 && (
          <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
            Taslak kayıt simülasyonu başarılı. Veri yalnızca yerel olarak işlendi,
            herhangi bir sunucuya gönderilmedi.
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {saveStatus === "saving" ? "Kaydediliyor..." : "Kaydet"}
          </button>
          <p className="text-[11px] text-zinc-500">
            Bu form şu anda yalnızca yerel bir yönetim prototipi. Kaydet butonu
            gerçek bir veritabanına yazmaz.
          </p>
        </div>
      </section>
    </div>
  );
}

