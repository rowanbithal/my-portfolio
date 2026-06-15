import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/toolbox", label: "Toolbox" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Nav({ siteName }: { siteName: string }) {
  return (
    <header className="flex items-center justify-between border-b border-(--color-line) py-6">
      <Link
        href="/"
        className="group relative font-serif text-lg font-semibold tracking-tight"
      >
        {siteName}
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-250 group-hover:w-full"
        />
      </Link>
      <nav className="flex gap-5 font-mono text-sm text-(--color-muted)">
        {links.slice(1).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-(--color-accent)"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
