export default function WinPrediction() {
  const home = 54;
  const draw = 21;
  const away = 25;

  const hints = [
    { label: "Advice",     value: "Arsenal or Draw" },
    { label: "Goals O/U 2.5", value: "Over 64%" },
    { label: "BTTS",       value: "Yes 58%" },
  ];

  return (
    <div className="pitch-glass rounded-lg-plus p-5 space-y-4">
      <h3 className="text-sm font-bold font-display text-pitch-text">Win Prediction</h3>

      {/* Tri-bar */}
      <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
        <div className="bg-pitch-accent rounded-l-full transition-all duration-500" style={{ width: `${home}%` }} />
        <div className="bg-pitch-muted/40 transition-all duration-500" style={{ width: `${draw}%` }} />
        <div className="bg-pitch-gold rounded-r-full transition-all duration-500" style={{ width: `${away}%` }} />
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs font-semibold">
        <span className="text-pitch-accent">Arsenal {home}%</span>
        <span className="text-pitch-muted">Draw {draw}%</span>
        <span className="text-pitch-gold">Chelsea {away}%</span>
      </div>

      {/* Hints row */}
      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-pitch-border">
        {hints.map(({ label, value }) => (
          <div key={label} className="text-center space-y-0.5">
            <p className="text-[10px] uppercase tracking-wide text-pitch-muted">{label}</p>
            <p className="text-xs font-semibold text-pitch-text">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
