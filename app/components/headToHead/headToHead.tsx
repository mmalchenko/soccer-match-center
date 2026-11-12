import { h2hResults as results, h2hSummary as summary } from "@/lib/data/match";

export default function HeadToHead() {
  return (
    <div className="pitch-card rounded-lg-plus p-5 space-y-4">
      <h3 className="card-heading">Head-to-Head — Last 5</h3>

      <div className="flex flex-col gap-2">
        {results.map(({ date, result, winner }) => (
          <div
            key={date}
            className="flex items-center justify-between py-1.5 border-b border-pitch-border last:border-0"
          >
            <span className="stat-meta w-20 shrink-0">{date}</span>
            <span
              className={`text-sm font-semibold text-right ${
                winner === "home"
                  ? "text-pitch-accent"
                  : winner === "away"
                    ? "text-pitch-gold"
                    : "text-pitch-text"
              }`}
            >
              {result}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-pitch-border text-center">
        <div className="space-y-0.5">
          <p className="stat-value text-xl text-pitch-accent">{summary.home}</p>
          <p className="section-label">Arsenal wins</p>
        </div>
        <div className="space-y-0.5">
          <p className="stat-value text-xl">{summary.draws}</p>
          <p className="section-label">Draws</p>
        </div>
        <div className="space-y-0.5">
          <p className="stat-value text-xl text-pitch-gold">{summary.away}</p>
          <p className="section-label">Chelsea wins</p>
        </div>
      </div>
    </div>
  );
}