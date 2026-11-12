import { matchStats as stats } from "@/lib/data/match";

export default function MatchStats() {
  return (
    <div className="pitch-card rounded-lg-plus p-5 space-y-4">
      <h3 className="card-heading">Match Statistics</h3>

      <div className="flex flex-col gap-4">
        {stats.map(({ label, home, away }) => {
          const total = home + away;
          const homePct = Math.round((home / total) * 100);
          const awayPct = 100 - homePct;
          return (
            <div key={label} className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="stat-value text-sm w-8">{home}</span>
                <span className="section-label">{label}</span>
                <span className="stat-value text-sm w-8 text-right">{away}</span>
              </div>
              <div className="flex h-1.5 rounded-full overflow-hidden bg-pitch-border">
                <div className="bg-pitch-accent transition-all duration-500" style={{ width: `${homePct}%` }} />
                <div className="bg-pitch-gold transition-all duration-500" style={{ width: `${awayPct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
