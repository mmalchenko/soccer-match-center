import Link from "next/link";
import { getStandings } from "@/lib/api/football";

const LEAGUE_ID = 39;
const SEASON = 2024;

export default async function LeagueTable() {
  const standings = await getStandings(LEAGUE_ID, SEASON);
  const rows = standings.slice(0, 5);

  const fallback = [
    { rank: 1, name: "Arsenal", played: 18, pts: 44 },
    { rank: 2, name: "Man City", played: 15, pts: 42 },
    { rank: 3, name: "Liverpool", played: 14, pts: 41 },
    { rank: 4, name: "Chelsea", played: 9, pts: 36 },
    { rank: 5, name: "Aston Villa", played: 7, pts: 33 },
  ];

  return (
    <div className="pitch-glass rounded-lg-plus p-5 space-y-4">
      <h3 className="card-heading">Premier League — Table</h3>

      <div className="flex flex-col gap-2">
        {rows.length > 0
          ? rows.map(({ rank, team, all, points }) => (
              <div key={team.id} className="flex items-center gap-3">
                <span className="stat-meta w-4 shrink-0">{rank}</span>
                <span className="flex-1 text-sm font-medium text-pitch-text">
                  {team.name}
                </span>
                <span className="stat-meta w-6 text-right">{all.played}</span>
                <span className="stat-value text-sm w-6 text-right">
                  {points}
                </span>
              </div>
            ))
          : fallback.map(({ rank, name, played, pts }) => (
              <div key={rank} className="flex items-center gap-3">
                <span className="stat-meta w-4 shrink-0">{rank}</span>
                <span className="flex-1 text-sm font-medium text-pitch-text">
                  {name}
                </span>
                <span className="stat-meta w-6 text-right">{played}</span>
                <span className="stat-value text-sm w-6 text-right">{pts}</span>
              </div>
            ))}
      </div>

      <Link
        href="/standings"
        className="inline-flex items-center gap-1 text-xs font-semibold text-pitch-accent hover:text-pitch-accent/80 transition-colors"
      >
        View full table →
      </Link>
    </div>
  );
}