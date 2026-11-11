import Link from "next/link";
import { getStandings } from "@/lib/api/football";

// Premier League 2024/25 — league ID 39
const LEAGUE_ID = 39;
const SEASON = 2024;

export default async function LeagueTable() {
  const standings = await getStandings(LEAGUE_ID, SEASON);
  const rows = standings.slice(0, 5);

  return (
    <div className="pitch-glass rounded-lg-plus p-5 space-y-4">
      <h3 className="text-sm font-bold font-display text-pitch-text">
        Premier League — Table
      </h3>

      <div className="flex flex-col gap-2">
        {rows.length > 0 ? rows.map(({ rank, team, all, points }) => (
          <div key={team.id} className="flex items-center gap-3 text-sm">
            <span className="w-4 font-mono text-xs text-pitch-muted shrink-0">{rank}</span>
            <span className="flex-1 text-pitch-text font-medium">{team.name}</span>
            <span className="w-6 text-right font-mono text-xs text-pitch-muted">{all.played}</span>
            <span className="w-6 text-right font-mono text-sm font-bold text-pitch-text">{points}</span>
          </div>
        )) : (
          // Fallback static rows if API unavailable
          [
            { rank: 1, name: "Arsenal",     played: 18, pts: 44 },
            { rank: 2, name: "Man City",    played: 15, pts: 42 },
            { rank: 3, name: "Liverpool",   played: 14, pts: 41 },
            { rank: 4, name: "Chelsea",     played: 9,  pts: 36 },
            { rank: 5, name: "Aston Villa", played: 7,  pts: 33 },
          ].map(({ rank, name, played, pts }) => (
            <div key={rank} className="flex items-center gap-3 text-sm">
              <span className="w-4 font-mono text-xs text-pitch-muted shrink-0">{rank}</span>
              <span className="flex-1 text-pitch-text font-medium">{name}</span>
              <span className="w-6 text-right font-mono text-xs text-pitch-muted">{played}</span>
              <span className="w-6 text-right font-mono text-sm font-bold text-pitch-text">{pts}</span>
            </div>
          ))
        )}
      </div>

      <Link href="/standings" className="inline-flex items-center gap-1 text-xs font-semibold text-pitch-accent hover:text-pitch-accent/80 transition-colors">
        View full table →
      </Link>
    </div>
  );
}
