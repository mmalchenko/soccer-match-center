/* Teams */
export interface Team {
  id: number;
  name: string;
  logo: string;
}

/* Standings */
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

export interface StandingsApiEntry {
  league: {
    standings: StandingRow[][];
  };
}

/* Fixtures */
export interface FixtureTeam {
  id: number;
  name: string;
  logo: string;
}

export interface Fixture {
  fixture: {
    id: number;
    date: string;
    status: { short: string; elapsed: number | null };
  };
  league: {
    id: number;
    name: string;
    country: string;
    round: string;
  };
  teams: {
    home: FixtureTeam & { winner: boolean | null };
    away: FixtureTeam & { winner: boolean | null };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: { home: number | null; away: number | null };
    fulltime: { home: number | null; away: number | null };
  };
}

/* Fixture statistics */
export interface FixtureStat {
  type: string;
  value: number | string | null;
}

export interface FixtureStatistics {
  team: FixtureTeam;
  statistics: FixtureStat[];
}