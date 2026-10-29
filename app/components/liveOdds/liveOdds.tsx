export default function LiveOdds() {
  const main = [
    { label: "1", value: "1.85" },
    { label: "X", value: "3.60" },
    { label: "2", value: "4.20" },
  ];

  return (
    <div className="pitch-glass rounded-lg-plus p-5 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold font-display text-pitch-text">Live Odds</h3>
        <span className="text-[10px] font-bold text-pitch-accent border border-pitch-accent/30 px-2 py-0.5 rounded">
          Bet365
        </span>
      </div>

      {/* 1 / X / 2 */}
      <div className="grid grid-cols-3 gap-2">
        {main.map(({ label, value }) => (
          <div key={label} className="pitch-inset rounded-md-plus p-3 text-center space-y-1">
            <p className="text-[10px] font-medium text-pitch-muted">{label}</p>
            <p className="font-mono text-lg font-bold text-pitch-text">{value}</p>
          </div>
        ))}
      </div>

      {/* Sub-odds */}
      <div className="flex justify-between text-xs text-pitch-muted pt-1 border-t border-pitch-border">
        <span>Over 2.5 <span className="font-mono font-bold text-pitch-text">1.70</span></span>
        <span>Both teams to score <span className="font-mono font-bold text-pitch-text">1.65</span></span>
      </div>
    </div>
  );
}
