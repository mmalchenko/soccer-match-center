/* ─── Teams ──────────────────────────────────────────────────── */

export interface Team {
  id: number;
  name: string;
  logo: string;
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
  form: string;
  description: string | null;
  all: { played: number; win: number; draw: number; lose: number };
}

/** Internal — not exported outside the API layer */
export interface StandingsApiEntry {
  league: {
    standings: StandingRow[][];
  };
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
    date: string;
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
