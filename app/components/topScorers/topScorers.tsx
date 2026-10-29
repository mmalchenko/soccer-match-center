const scorers = [
  { name: "E. Haaland", club: "Man City", goals: 19, pct: 100 },
  { name: "H. Kane",    club: "Bayern",   goals: 17, pct: 89  },
  { name: "B. Saka",    club: "Arsenal",  goals: 14, pct: 74  },
];

export default function TopScorers() {
  return (
    <div className="pitch-glass rounded-lg-plus p-5 space-y-4">
      <h3 className="text-sm font-bold font-display text-pitch-text">
        Top Scorers
      </h3>

      <div className="flex flex-col gap-4">
        {scorers.map(({ name, club, goals, pct }) => (
          <div key={name} className="space-y-1.5">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-sm font-semibold text-pitch-text">{name}</span>
                <span className="text-xs text-pitch-muted"> · {club}</span>
              </div>
              <span className="font-mono text-sm font-bold text-pitch-text">{goals}</span>
            </div>
            <div className="h-1 rounded-full overflow-hidden bg-pitch-border">
              <div
                className="h-full bg-pitch-accent rounded-full transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
