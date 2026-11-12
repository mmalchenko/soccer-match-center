import { topScorers as scorers } from "@/lib/data/match";

export default function TopScorers() {
  return (
    <div className="pitch-glass rounded-lg-plus p-5 space-y-4">
      <h3 className="card-heading">Top Scorers</h3>

      <div className="flex flex-col gap-4">
        {scorers.map(({ name, club, goals, pct }) => (
          <div key={name} className="space-y-1.5">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-sm font-semibold text-pitch-text">{name}</span>
                <span className="text-xs text-pitch-muted"> · {club}</span>
              </div>
              <span className="stat-value text-sm">{goals}</span>
            </div>
            <div className="h-1 rounded-full overflow-hidden bg-pitch-border">
              <div className="h-full bg-pitch-accent rounded-full transition-all duration-300" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
