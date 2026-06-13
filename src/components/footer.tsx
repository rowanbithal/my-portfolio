const social = [
  { href: "https://github.com/yourusername", label: "GitHub" },
  { href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { href: "mailto:you@example.com", label: "Email" },
];

export function Footer({ siteName }: { siteName: string }) {
  return (
    <footer className="flex flex-col gap-2 border-t border-(--color-line) py-8 text-sm text-(--color-muted) sm:flex-row sm:items-center sm:justify-between">
      <span>
        © {new Date().getFullYear()} {siteName}
      </span>
      <div className="flex gap-4 font-mono">
        {social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="transition-colors hover:text-(--color-accent)"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
