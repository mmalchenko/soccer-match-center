import MatchCard from "../matchCard/matchCard";
import { getLiveFixtures } from "@/lib/api/football";
import type { MatchCardData } from "@/lib/types/ui";
import { liveMatches as fallback } from "@/lib/data/matches";

function fixtureToCard(f: Awaited<ReturnType<typeof getLiveFixtures>>[number]): MatchCardData {
  const { short, elapsed } = f.fixture.status;
  const isLive = short === "1H" || short === "2H" || short === "ET" || short === "HT";
  const isFt   = short === "FT" || short === "AET" || short === "PEN";

  return {
    id:      String(f.fixture.id),
    league:  f.league.name,
    status:  isLive ? "live" : isFt ? "ft" : "upcoming",
    minute:  isLive && elapsed ? `${elapsed}'` : undefined,
    kickoff: !isLive && !isFt ? new Date(f.fixture.date).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) : undefined,
    homeTeam: { code: f.teams.home.name.slice(0, 3).toUpperCase(), name: f.teams.home.name },
    awayTeam: { code: f.teams.away.name.slice(0, 3).toUpperCase(), name: f.teams.away.name },
    homeScore: f.goals.home ?? undefined,
    awayScore: f.goals.away ?? undefined,
  };
}

export default async function MatchGrid() {
  const liveFixtures = await getLiveFixtures();
  const matches: MatchCardData[] = liveFixtures.length > 0
    ? liveFixtures.slice(0, 6).map(fixtureToCard)
    : fallback;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {matches.map((match, i) => (
        <MatchCard key={match.id ?? i} match={match} />
      ))}
    </div>
  );
}
