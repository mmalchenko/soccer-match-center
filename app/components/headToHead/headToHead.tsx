interface H2HResult {
  date: string;
  result: string;
  winner: "home" | "away" | "draw";
}

const results: H2HResult[] = [
  { date: "Apr 2026", result: "Chelsea 0–2 Arsenal",  winner: "home"  },
  { date: "Nov 2025", result: "Arsenal 1–1 Chelsea",  winner: "draw"  },
  { date: "May 2025", result: "Chelsea 2–3 Arsenal",  winner: "home"  },
  { date: "Dec 2024", result: "Arsenal 3–0 Chelsea",  winner: "home"  },
  { date: "Apr 2024", result: "Chelsea 1–1 Arsenal",  winner: "draw"  },
];

const summary = { home: 3, draws: 1, away: 1 };

export default function HeadToHead() {
  return (
    <div className="pitch-card rounded-lg-plus p-5 space-y-4">
      <h3 className="text-sm font-bold font-display text-pitch-text">Head-to-Head — Last 5</h3>

      <div className="flex flex-col gap-2">
        {results.map(({ date, result, winner }) => (
          <div key={date} className="flex items-center justify-between py-1.5 border-b border-pitch-border last:border-0">
            <span className="text-xs text-pitch-muted w-20 shrink-0">{date}</span>
            <span className={`text-sm font-semibold text-right ${
              winner === "home" ? "text-pitch-accent" :
              winner === "away" ? "text-pitch-gold" :
              "text-pitch-text"
            }`}>
              {result}
            </span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-pitch-border text-center">
        <div className="space-y-0.5">
          <p className="font-mono text-xl font-bold text-pitch-accent">{summary.home}</p>
          <p className="text-[10px] uppercase tracking-wide text-pitch-muted">Arsenal wins</p>
        </div>
        <div className="space-y-0.5">
          <p className="font-mono text-xl font-bold text-pitch-text">{summary.draws}</p>
          <p className="text-[10px] uppercase tracking-wide text-pitch-muted">Draws</p>
        </div>
        <div className="space-y-0.5">
          <p className="font-mono text-xl font-bold text-pitch-gold">{summary.away}</p>
          <p className="text-[10px] uppercase tracking-wide text-pitch-muted">Chelsea wins</p>
        </div>
      </div>
    </div>
  );
}
