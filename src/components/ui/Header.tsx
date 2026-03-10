import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/coffees", label: "Coffees" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold tracking-tight text-zinc-900">
          Coffee
        </div>

        <nav aria-label="Primary" className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
