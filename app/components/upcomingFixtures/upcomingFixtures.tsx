const fixtures = [
  { day: "Thu", time: "19:30", home: "Tottenham", away: "Newcastle", league: "Premier League" },
  { day: "Fri", time: "21:00", home: "Atlético Madrid", away: "Sevilla", league: "La Liga" },
  { day: "Sat", time: "18:00", home: "Juventus", away: "Napoli", league: "Serie A" },
];

export default function UpcomingFixtures() {
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold font-display text-pitch-text">
        Upcoming Fixtures
      </h2>

      <div className="flex flex-col">
        {fixtures.map(({ day, time, home, away, league }, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-4 border-b border-pitch-border last:border-0"
          >
            {/* Time */}
            <div className="w-20 shrink-0">
              <span className="font-mono text-xs text-pitch-muted">
                {day} {time}
              </span>
            </div>

            {/* Match */}
            <div className="flex-1 text-sm font-semibold text-pitch-text">
              {home} vs {away}
            </div>

            {/* League */}
            <div className="hidden md:block w-36 text-right">
              <span className="text-xs text-pitch-muted">{league}</span>
            </div>

            {/* Remind me */}
            <div className="ml-6 shrink-0">
              <button className="pitch-btn-ghost text-xs font-medium px-3 py-1.5 rounded-md-plus hover:text-pitch-text transition-colors">
                Remind me
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
