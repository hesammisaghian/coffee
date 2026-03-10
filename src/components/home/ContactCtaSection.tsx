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
        Contact for orders and questions
      </h2>
      <p className="max-w-2xl text-sm text-zinc-600">
        Until a full contact page is built, visitors can use this entry point to start a
        conversation about orders, collaborations, or questions about the coffees.
      </p>
      <div>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-zinc-50"
        >
          Go to contact page
        </Link>
      </div>
    </section>
  );
}
