import { predictionPct as pct, predictionHints as hints } from "@/lib/data/match";

export default function WinPrediction() {
  return (
    <div className="pitch-glass rounded-lg-plus p-5 space-y-4">
      <h3 className="card-heading">Win Prediction</h3>

      <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
        <div className="bg-pitch-accent rounded-l-full transition-all duration-500" style={{ width: `${pct.home}%` }} />
        <div className="bg-pitch-muted/40 transition-all duration-500"             style={{ width: `${pct.draw}%` }} />
        <div className="bg-pitch-gold rounded-r-full transition-all duration-500"  style={{ width: `${pct.away}%` }} />
      </div>

      <div className="flex justify-between text-xs font-semibold">
        <span className="text-pitch-accent">Arsenal {pct.home}%</span>
        <span className="text-pitch-muted">Draw {pct.draw}%</span>
        <span className="text-pitch-gold">Chelsea {pct.away}%</span>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-pitch-border">
        {hints.map(({ label, value }) => (
          <div key={label} className="text-center space-y-0.5">
            <p className="section-label">{label}</p>
            <p className="text-xs font-semibold text-pitch-text">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
