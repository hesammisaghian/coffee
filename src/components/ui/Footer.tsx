export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-4xl px-6 py-6">
        <p className="text-xs text-zinc-500">
          © {year} Coffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
