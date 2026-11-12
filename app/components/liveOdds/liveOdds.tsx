import { mainOdds as main } from "@/lib/data/match";

export default function LiveOdds() {
  return (
    <div className="pitch-glass rounded-lg-plus p-5 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="card-heading">Live Odds</h3>
        <span className="text-[10px] font-bold text-pitch-accent border border-pitch-accent/30 px-2 py-0.5 rounded">
          Bet365
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {main.map(({ label, value }) => (
          <div key={label} className="pitch-inset rounded-md-plus p-3 text-center space-y-1">
            <p className="section-label">{label}</p>
            <p className="stat-value text-lg">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-xs text-pitch-muted pt-1 border-t border-pitch-border">
        <span>Over 2.5 <span className="stat-value text-xs">1.70</span></span>
        <span>Both teams to score <span className="stat-value text-xs">1.65</span></span>
      </div>
    </div>
  );
}
