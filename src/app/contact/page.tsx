export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:py-20">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            İletişim
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600">
            Kontrollü sıvı fermantasyon ve katkısız üretim etrafında kurulan bu kahve
            markasıyla ilgili tüm sorularınız ve talepleriniz için buradasınız.
          </p>
        </header>

        <section
          aria-labelledby="contact-intent-heading"
          className="space-y-3 border-t border-zinc-200 pt-8"
        >
          <h2
            id="contact-intent-heading"
            className="text-base font-semibold tracking-tight"
          >
            Neler için bizimle iletişime geçebilirsiniz?
          </h2>
          <ul className="max-w-2xl list-disc space-y-1 pl-5 text-sm text-zinc-600">
            <li>Erken dönem veya küçük ölçekli sipariş talepleri.</li>
            <li>İçerik, marka veya ürün geliştirme odağında işbirliği fikirleri.</li>
            <li>Coffee shop veya toptan satış için ön görüşme talepleri.</li>
            <li>Ürünler, süreç, fermantasyon yaklaşımı ve kalite standartları hakkında sorular.</li>
          </ul>
          <p className="max-w-2xl text-xs text-zinc-500">
            Şu anda tüm talepler manuel olarak değerlendiriliyor; yanıt süreleri talep
            yoğunluğuna ve proje türüne göre değişebilir.
          </p>
        </section>
      </div>
    </main>
  );
}
