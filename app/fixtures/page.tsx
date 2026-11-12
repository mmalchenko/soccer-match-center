import type { Metadata } from "next";
import Header from "@/app/components/header/header";

export const metadata: Metadata = {
  title: "Fixtures — KICKWIRE",
};


const fixtures = [
  {
    date: "Thu, 8 Oct",
    matches: [
      {
        time: "19:30",
        home: "Tottenham",
        away: "Newcastle",
        league: "Premier League",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "20:00",
        home: "Real Madrid",
        away: "Sevilla",
        league: "La Liga",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "20:45",
        home: "PSG",
        away: "Lyon",
        league: "Ligue 1",
        homeScore: null,
        awayScore: null,
      },
    ],
  },
  {
    date: "Fri, 9 Oct",
    matches: [
      {
        time: "19:00",
        home: "Inter",
        away: "AC Milan",
        league: "Serie A",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "21:00",
        home: "Atlético Madrid",
        away: "Sevilla",
        league: "La Liga",
        homeScore: null,
        awayScore: null,
      },
    ],
  },
  {
    date: "Sat, 10 Oct",
    matches: [
      {
        time: "12:30",
        home: "Arsenal",
        away: "Bournemouth",
        league: "Premier League",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "15:00",
        home: "Chelsea",
        away: "Liverpool",
        league: "Premier League",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "15:00",
        home: "Bayern",
        away: "Dortmund",
        league: "Bundesliga",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "18:00",
        home: "Juventus",
        away: "Napoli",
        league: "Serie A",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "21:00",
        home: "Barcelona",
        away: "Real Madrid",
        league: "La Liga",
        homeScore: null,
        awayScore: null,
      },
    ],
  },
  {
    date: "Sun, 11 Oct",
    matches: [
      {
        time: "14:00",
        home: "Man City",
        away: "Man United",
        league: "Premier League",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "16:30",
        home: "Aston Villa",
        away: "Everton",
        league: "Premier League",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "17:05",
        home: "Porto",
        away: "Benfica",
        league: "Primeira Liga",
        homeScore: null,
        awayScore: null,
      },
    ],
  },
];

export default function FixturesPage() {
  return (
    <div className="min-h-screen bg-pitch-bg bg-pitch-glow">
      <Header />
      <main className="max-w-[860] mx-auto px-5 py-6 lg:px-10 lg:py-8 flex flex-col gap-8">
        {/* Page title */}
        <div className="flex items-baseline gap-4">
          <h1 className="page-heading md:text-3xl">Fixtures</h1>
          <span className="text-[13px] tracking-wide text-pitch-muted">
            Upcoming matches
          </span>
        </div>

        {/* Grouped by date */}
        {fixtures.map(({ date, matches }) => (
          <section key={date} className="flex flex-col gap-3">
            {/* Date heading */}
            <h2 className="section-label border-b border-pitch-border pb-2">
              {date}
            </h2>

            {/* Fixture rows */}
            <div className="flex flex-col">
              {matches.map(({ time, home, away, league }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3.5 border-b border-pitch-border last:border-0"
                >
                  {/* Time */}
                  <span className="stat-meta w-12 shrink-0">{time}</span>

                  {/* Teams */}
                  <div className="flex-1 flex items-center gap-2 text-sm font-semibold text-pitch-text">
                    <span>{home}</span>
                    <span className="text-pitch-muted font-normal text-xs">
                      vs
                    </span>
                    <span>{away}</span>
                  </div>

                  {/* League */}
                  <span className="hidden sm:block text-xs text-pitch-muted w-36 text-right">
                    {league}
                  </span>

                  {/* Remind me */}
                  <button className="pitch-btn-ghost text-xs font-medium px-3 py-1.5 rounded-md-plus hover:text-pitch-text transition-colors shrink-0">
                    Remind me
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}