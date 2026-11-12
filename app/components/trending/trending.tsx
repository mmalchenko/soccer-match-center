import { trendingItems as items } from "@/lib/data/match";

export default function Trending() {
  return (
    <div className="pitch-glass rounded-lg-plus p-5 space-y-4">
      <h3 className="card-heading">Trending</h3>

      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li key={i}>
            <a
              href="/news"
              className="text-sm text-pitch-text hover:text-pitch-accent transition-colors leading-snug"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}