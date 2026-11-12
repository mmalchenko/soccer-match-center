import MatchCard, { MatchCardData } from "../matchCard/matchCard";

const matches: MatchCardData[] = [
  {
    league: "La Liga",
    status: "live",
    minute: "54'",
    homeTeam: { code: "RMA", name: "Real Madrid" },
    awayTeam: { code: "BAR", name: "Barcelona" },
    homeScore: 1,
    awayScore: 1,
  },
  {
    league: "Premier League",
    status: "live",
    minute: "90+3'",
    homeTeam: { code: "MCI", name: "Man City" },
    awayTeam: { code: "LIV", name: "Liverpool" },
    homeScore: 2,
    awayScore: 2,
  },
  {
    league: "Bundesliga",
    status: "ft",
    homeTeam: { code: "BAY", name: "Bayern" },
    awayTeam: { code: "BVB", name: "Dortmund" },
    homeScore: 3,
    awayScore: 0,
  },
  {
    league: "Ligue 1",
    status: "ft",
    homeTeam: { code: "PSG", name: "PSG" },
    awayTeam: { code: "OM", name: "Marseille" },
    homeScore: 4,
    awayScore: 1,
  },
  {
    league: "Serie A",
    status: "upcoming",
    kickoff: "Kickoff 20:46",
    homeTeam: { code: "INT", name: "Inter" },
    awayTeam: { code: "MIL", name: "AC Milan" },
  },
  {
    league: "Champions League",
    status: "upcoming",
    kickoff: "Kickoff 21:00",
    homeTeam: { code: "POR", name: "Porto" },
    awayTeam: { code: "AJA", name: "Ajax" },
  },
];

export default function MatchGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {matches.map((match, i) => (
        <MatchCard key={i} match={match} />
      ))}
    </div>
  );
}