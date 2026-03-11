/**
 * Brand Statement section: two-column layout (left text, right optional media).
 * Set BRAND_STATEMENT_IMAGE to a path or URL when available; when empty, the right column remains as reserved space.
 */
const BRAND_STATEMENT_IMAGE: string | undefined = undefined;

export function BrandIntroSection() {
  return (
    <section
      aria-labelledby="brand-introduction-heading"
      className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12"
    >
      {/* Left column: text block */}
      <div className="flex flex-col justify-center space-y-4">
        <p className="text-sm font-medium tracking-wide text-zinc-500">
          Yaklaşımımız
        </p>
        <h2
          id="brand-introduction-heading"
          className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
        >
          Kahveyi yalnızca kavurma aşamasında değil, yeşil çekirdekten itibaren
          ele alan, kontrollü sıvı fermantasyona dayalı bir üretim yaklaşımı.
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-zinc-600">
          <p>
            Kontrollü sıvı fermantasyon, çekirdeğin yapısını koruyarak daha
            dengeli ve yumuşak içimli profiller oluşturmayı hedefler. Süreçte
            sıcaklık, süre ve oksijen seviyesi dikkatle yönetilir.
          </p>
          <p>
            Kimyasal katkı maddesi veya yapay aroma kullanılmaz. Doğal meyve ve
            bitki kaynaklı bileşenler fermantasyon ortamını destekleyebilir.
            Amaç, çekirdeğin doğal karakterini koruyarak daha temiz ve tutarlı
            bir fincan deneyimi elde etmektir.
          </p>
        </div>
      </div>

      {/* Right column: optional media slot or reserved empty space */}
      <div className="relative min-h-[200px] w-full lg:min-h-[280px]">
        {BRAND_STATEMENT_IMAGE ? (
          <div className="h-full w-full overflow-hidden rounded-lg bg-zinc-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BRAND_STATEMENT_IMAGE}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div
            className="h-full w-full rounded-lg border border-zinc-100 bg-zinc-50/50"
            aria-hidden
          />
        )}
      </div>
    </section>
  );
}
