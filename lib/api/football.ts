const BASE_URL = "https://v3.football.api-sports.io";

function getHeaders(): HeadersInit {
  return { "x-apisports-key": process.env.API_SPORTS_KEY ?? "" };
}

async function apiFetch<T>(path: string, params: Record<string, string | number> = {}): Promise<T[]> {
  const qs = new URLSearchParams(
    Object.entries(params).map(([k, v]) => [k, String(v)])
  ).toString();
  const url = `${BASE_URL}/${path}${qs ? `?${qs}` : ""}`;
  const res = await fetch(url, { method: "GET", headers: getHeaders(), next: { revalidate: 120 } });
  if (!res.ok) {
    console.error(`[football API] ${path} → ${res.status} ${res.statusText}`);
    return [];
  }
  const json: { response: T[] } = await res.json();
  return json.response;
}

/* ─── Teams ──────────────────────────────────────────────────── */

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export async function getTeamById(id: number): Promise<Team | null> {
  const rows = await apiFetch<{ team: Team }>("teams", { id });
  return rows[0]?.team ?? null;
}

/* ─── Standings ──────────────────────────────────────────────── */

export interface StandingTeam {
  id: number;
  name: string;
  logo: string;
}

export interface StandingRow {
  rank: number;
  team: StandingTeam;
  points: number;
  goalsDiff: number;
  form: string;           // e.g. "WWDLW"
  description: string | null;
  all: { played: number; win: number; draw: number; lose: number };
}

interface StandingsApiEntry {
  league: {
    standings: StandingRow[][];
  };
}

export async function getStandings(leagueId: number, season: number): Promise<StandingRow[]> {
  const rows = await apiFetch<StandingsApiEntry>("standings", { league: leagueId, season });
  return rows[0]?.league.standings[0] ?? [];
}

/* ─── Fixtures ───────────────────────────────────────────────── */

export interface FixtureTeam {
  id: number;
  name: string;
  logo: string;
}

export interface Fixture {
  fixture: {
    id: number;
    date: string;        // ISO 8601
    status: { short: string };
  };
  league: {
    id: number;
    name: string;
    country: string;
  };
  teams: {
    home: FixtureTeam;
    away: FixtureTeam;
  };
  goals: {
    home: number | null;
    away: number | null;
  };
}

/** Next N upcoming fixtures for a league/season */
export async function getUpcomingFixtures(leagueId: number, season: number, count = 10): Promise<Fixture[]> {
  return apiFetch<Fixture>("fixtures", { league: leagueId, season, next: count });
}

/** Live fixtures across all leagues */
export async function getLiveFixtures(): Promise<Fixture[]> {
  return apiFetch<Fixture>("fixtures", { live: "all" });
}
