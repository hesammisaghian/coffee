export function ProcessStorySection() {
  return (
    <section
      aria-labelledby="production-process-heading"
      className="space-y-4 border-t border-zinc-200 pt-8"
    >
      <h2
        id="production-process-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Üretim sürecimiz
      </h2>

      <div className="max-w-2xl space-y-3 text-sm text-zinc-600">
        <p>
          Marka, yeşil çekirdeğin sıvı fazda kontrollü fermantasyonu etrafında kuruludur.
          Kimyasal katkı ya da yapay aroma eklemeden, sürecin her adımı ölçülür ve
          kaydedilir.
        </p>

        <ol className="space-y-2">
          <li>
            <span className="font-medium text-zinc-800">
              1. Yeşil kahve seçimi.
            </span>{" "}
            Bölge, nem, depolama ve küf/aflatoksin riski için lotlar titizlikle
            taranır.
          </li>
          <li>
            <span className="font-medium text-zinc-800">
              2. Kontrollü sıvı fermantasyon.
            </span>{" "}
            Çekirdekler, doğal meyve ve bitki ekstreleriyle tanımlanmış bir sıvı
            ortama alınır; katkı maddesi kullanılmaz.
          </li>
          <li>
            <span className="font-medium text-zinc-800">
              3. Düşük oksijen / anaerobik faz.
            </span>{" "}
            Sıcaklık, süre ve oksijen seviyesi, istenmeyen asidite ve kusurları
            engelleyecek dar bir aralıkta tutulur.
          </li>
          <li>
            <span className="font-medium text-zinc-800">
              4. Kurutma, kavurma ve fincandaki sonuç.
            </span>{" "}
            Fermantasyon sonrası çekirdekler kurutulur, profilli kavrulur ve her lot,
            yumuşaklık, antioksidan hissi ve tutarlılık için kör tadımla kontrol edilir.
          </li>
        </ol>
      </div>
    </section>
  );
}
