import Link from "next/link";

const links = [
  { label: "Live",      href: "/live"      },
  { label: "Fixtures",  href: "/match/1"   },
  { label: "Leagues",   href: "/leagues"   },
  { label: "Standings", href: "/standings" },
  { label: "News",      href: "/news"      },
];

export default function Navbar() {
  return (
    <nav className="px-4">
      <ul className="flex">
        {links.map(({ label, href }) => (
          <li key={label} className="px-5">
            <Link
              href={href}
              className="text-pitch-muted hover:text-pitch-text transition-colors text-sm font-medium"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
