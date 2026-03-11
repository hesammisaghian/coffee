export function BrandIntroSection() {
  return (
    <section
      aria-labelledby="brand-introduction-heading"
      className="space-y-3"
    >
      <h2
        id="brand-introduction-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Yaklaşımımız
      </h2>

      <p className="max-w-2xl text-sm text-zinc-600">
        Bu proje, kahveyi yalnızca kavurma aşamasında değil,
        yeşil çekirdekten itibaren ele alan bir üretim yaklaşımına dayanır.
        Kontrollü sıvı fermantasyon, çekirdeğin yapısını koruyarak
        daha dengeli ve daha yumuşak içimli profiller oluşturmayı hedefler.
      </p>

      <p className="max-w-2xl text-sm text-zinc-600">
        Süreçte kimyasal katkı maddesi veya yapay aroma kullanılmaz.
        Doğal meyve ve bitki kaynaklı bileşenler fermantasyon ortamını
        destekleyebilir. Amaç, çekirdeğin doğal karakterini koruyarak
        daha temiz ve tutarlı bir fincan deneyimi elde etmektir.
      </p>
    </section>
  );
}