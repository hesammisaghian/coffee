import Link from "next/link";

export function ContactCtaSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="space-y-4 border-t border-zinc-200 pt-8"
    >
      <h2
        id="contact-heading"
        className="text-xl font-semibold tracking-tight"
      >
        İletişim ve işbirliği
      </h2>
      <p className="max-w-2xl text-sm text-zinc-600">
        Süreç, ürünler veya potansiyel işbirlikleri hakkında konuşmak isterseniz, bizimle
        buradan iletişime geçebilirsiniz. Şu an için sipariş ve proje talepleri manuel
        olarak yönetiliyor.
      </p>
      <div>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-zinc-50"
        >
          İletişim sayfasına git
        </Link>
      </div>
    </section>
  );
}
