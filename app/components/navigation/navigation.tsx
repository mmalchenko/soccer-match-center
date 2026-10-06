export default function Navbar() {
  const links = [
    { label: "Live",      href: "/live" },
    { label: "Fixtures",  href: "/fixtures" },
    { label: "Leagues",   href: "/leagues" },
    { label: "Standings", href: "/standings" },
    { label: "News",      href: "/news" },
  ];

  return (
    <nav className="px-4">
      <ul className="flex">
        {links.map(({ label, href }) => (
          <li key={label} className="px-5">
            <a
              href={href}
              className="text-pitch-muted hover:text-pitch-text transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
