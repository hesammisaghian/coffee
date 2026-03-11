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
        Üretim süreci
      </h2>

      <div className="max-w-2xl space-y-3 text-sm text-zinc-600">
        <p>
          Üretim yaklaşımı, yeşil kahve çekirdeğinin kontrollü sıvı
          fermantasyon ortamında işlenmesine dayanır. Süreç boyunca
          sıcaklık, süre ve oksijen seviyesi dikkatle kontrol edilir.
          Böylece çekirdeğin doğal yapısı korunurken daha dengeli
          ve daha temiz bir fincan profili elde edilmesi amaçlanır.
        </p>

        <ol className="space-y-2">

          <li>
            <span className="font-medium text-zinc-800">
              1. Yeşil kahve seçimi.
            </span>{" "}
            Sürece dahil edilen çekirdekler; bölge, depolama koşulları,
            nem oranı ve olası küf veya aflatoksin riskleri açısından
            incelenir. Takip edilebilir ve sağlıklı lotlar tercih edilir.
          </li>

          <li>
            <span className="font-medium text-zinc-800">
              2. Kontrollü sıvı fermantasyon.
            </span>{" "}
            Çekirdekler tanımlı parametrelere sahip bir sıvı ortamda
            fermantasyona alınır. Doğal meyve ve bitki kaynaklı
            bileşenler bu süreci destekleyebilir; kimyasal katkı
            veya yapay aroma kullanılmaz.
          </li>

          <li>
            <span className="font-medium text-zinc-800">
              3. Düşük oksijen / anaerobik faz.
            </span>{" "}
            Fermantasyon sürecinde oksijen seviyesi sınırlı tutulur.
            Bu aşamada sıcaklık ve süre kontrolü, istenmeyen
            keskinliklerin ve kusurların oluşmasını sınırlamayı
            hedefler.
          </li>

          <li>
            <span className="font-medium text-zinc-800">
              4. Kurutma, kavurma ve fincan değerlendirmesi.
            </span>{" "}
            Fermantasyon sonrası çekirdekler kurutulur, kavurma
            profiline göre işlenir ve her lot fincan dengesini
            değerlendirmek için tadım süreçlerinden geçirilir.
          </li>

        </ol>

        <p>
          Bu yaklaşımın amacı; daha dengeli, daha yumuşak içimli ve
          mümkün olduğunca tutarlı fincan profilleri elde etmektir.
        </p>
      </div>
    </section>
  );
}