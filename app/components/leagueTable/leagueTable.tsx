const rows = [
  { pos: 1, name: "Arsenal",    played: 18, pts: 44 },
  { pos: 2, name: "Man City",   played: 15, pts: 42 },
  { pos: 3, name: "Liverpool",  played: 14, pts: 41 },
  { pos: 4, name: "Chelsea",    played: 9,  pts: 36 },
  { pos: 5, name: "Aston Villa",played: 7,  pts: 33 },
];

export default function LeagueTable() {
  return (
    <div className="pitch-glass rounded-lg-plus p-5 space-y-4">
      <h3 className="text-sm font-bold font-display text-pitch-text">
        Premier League — Table
      </h3>

      <div className="flex flex-col gap-2">
        {rows.map(({ pos, name, played, pts }) => (
          <div key={pos} className="flex items-center gap-3 text-sm">
            <span className="w-4 text-xs font-mono text-pitch-muted shrink-0">{pos}</span>
            <span className="flex-1 text-pitch-text font-medium">{name}</span>
            <span className="w-6 text-right font-mono text-xs text-pitch-muted">{played}</span>
            <span className="w-6 text-right font-mono text-sm font-bold text-pitch-text">{pts}</span>
          </div>
        ))}
      </div>

      <a href="/standings" className="inline-flex items-center gap-1 text-xs font-semibold text-pitch-accent hover:text-pitch-accent/80 transition-colors">
        View full table →
      </a>
    </div>
  );
}
