import type {
  Team,
  StandingRow,
  StandingsApiEntry,
  Fixture,
  FixtureStatistics,
} from "@/lib/types/api";

export type { Team, StandingRow, Fixture, FixtureStatistics };

const BASE_URL = "https://v3.football.api-sports.io";

function getHeaders(): HeadersInit {
  return { "x-apisports-key": process.env.API_SPORTS_KEY ?? "" };
}

async function apiFetch<T>(
  path: string,
  params: Record<string, string | number> = {},
  revalidate = 120,
): Promise<T[]> {
  const qs = new URLSearchParams(
    Object.entries(params).map(([k, v]) => [k, String(v)]),
  ).toString();
  const url = `${BASE_URL}/${path}${qs ? `?${qs}` : ""}`;
  const res = await fetch(url, {
    method: "GET",
    headers: getHeaders(),
    next: { revalidate },
  });
  if (!res.ok) {
    console.error(`[football API] ${path} → ${res.status} ${res.statusText}`);
    return [];
  }
  const json: { response: T[] } = await res.json();
  return json.response;
}

/* ─── Teams ──────────────────────────────────────────────────── */

export async function getTeamById(id: number): Promise<Team | null> {
  const rows = await apiFetch<{ team: Team }>("teams", { id });
  return rows[0]?.team ?? null;
}

/* ─── Standings ──────────────────────────────────────────────── */

export async function getStandings(
  leagueId: number,
  season: number,
): Promise<StandingRow[]> {
  const rows = await apiFetch<StandingsApiEntry>("standings", {
    league: leagueId,
    season,
  });
  return rows[0]?.league.standings[0] ?? [];
}

/* ─── Fixtures ───────────────────────────────────────────────── */

export async function getUpcomingFixtures(
  leagueId: number,
  season: number,
  count = 10,
): Promise<Fixture[]> {
  return apiFetch<Fixture>("fixtures", { league: leagueId, season, next: count });
}

export async function getLiveFixtures(): Promise<Fixture[]> {
  // Live fixtures change every 30s — short revalidate
  return apiFetch<Fixture>("fixtures", { live: "all" }, 30);
}

export async function getFixtureById(id: number): Promise<Fixture | null> {
  const rows = await apiFetch<Fixture>("fixtures", { id });
  return rows[0] ?? null;
}

/* ─── Fixture statistics ─────────────────────────────────────── */

export async function getFixtureStatistics(
  fixtureId: number,
): Promise<FixtureStatistics[]> {
  return apiFetch<FixtureStatistics>("fixtures/statistics", {
    fixture: fixtureId,
  });
}
