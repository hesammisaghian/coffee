export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16 sm:py-20">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Contact
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600">
            This page will later provide clear information on how to get in touch for
            orders, questions, and potential wholesale inquiries.
          </p>
        </header>

        <section
          aria-labelledby="contact-flow-placeholder-heading"
          className="space-y-2 border-t border-zinc-200 pt-8"
        >
          <h2
            id="contact-flow-placeholder-heading"
            className="text-base font-semibold tracking-tight"
          >
            Contact & order flow (placeholder)
          </h2>
          <p className="max-w-2xl text-sm text-zinc-600">
            A future contact flow will live here, including simple ways to reach the
            brand about purchasing coffee and asking questions. No form is implemented
            yet at this stage.
          </p>
        </section>
      </div>
    </main>
  );
}
