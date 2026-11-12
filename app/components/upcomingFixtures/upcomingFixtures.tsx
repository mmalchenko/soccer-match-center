import { getUpcomingFixtures } from "@/lib/api/football";

const LEAGUE_ID = 39;
const SEASON = 2024;

function formatDate(isoDate: string): string {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export default async function UpcomingFixtures() {
  const fixtures = await getUpcomingFixtures(LEAGUE_ID, SEASON, 5);

  const fallback = [
    {
      day: "Thu",
      time: "19:30",
      home: "Tottenham",
      away: "Newcastle",
      league: "Premier League",
    },
    {
      day: "Fri",
      time: "21:00",
      home: "Atlético Madrid",
      away: "Sevilla",
      league: "La Liga",
    },
    {
      day: "Sat",
      time: "18:00",
      home: "Juventus",
      away: "Napoli",
      league: "Serie A",
    },
  ];

  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold font-display text-pitch-text">
        Upcoming Fixtures
      </h2>

      <div className="flex flex-col">
        {fixtures.length > 0
          ? fixtures.map(({ fixture, teams, league }) => (
              <div
                key={fixture.id}
                className="flex items-center justify-between py-4 border-b border-pitch-border last:border-0"
              >
                <div className="w-20 shrink-0">
                  <span className="font-mono text-xs text-pitch-muted">
                    {formatDate(fixture.date)}
                  </span>
                </div>
                <div className="flex-1 text-sm font-semibold text-pitch-text">
                  {teams.home.name} vs {teams.away.name}
                </div>
                <div className="hidden md:block w-36 text-right">
                  <span className="text-xs text-pitch-muted">
                    {league.name}
                  </span>
                </div>
                <div className="ml-6 shrink-0">
                  <button className="pitch-btn-ghost text-xs font-medium px-3 py-1.5 rounded-md-plus hover:text-pitch-text transition-colors">
                    Remind me
                  </button>
                </div>
              </div>
            ))
          : fallback.map(({ day, time, home, away, league }, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 border-b border-pitch-border last:border-0"
              >
                <div className="w-20 shrink-0">
                  <span className="font-mono text-xs text-pitch-muted">
                    {day} {time}
                  </span>
                </div>
                <div className="flex-1 text-sm font-semibold text-pitch-text">
                  {home} vs {away}
                </div>
                <div className="hidden md:block w-36 text-right">
                  <span className="text-xs text-pitch-muted">{league}</span>
                </div>
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