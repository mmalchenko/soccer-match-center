/* MatchCard */
export type MatchStatus = "live" | "ft" | "upcoming";

export interface MatchCardData {
  id?: string;
  league: string;
  homeTeam: { code: string; name: string };
  awayTeam: { code: string; name: string };
  status: MatchStatus;
  minute?: string;
  homeScore?: number;
  awayScore?: number;
  kickoff?: string;
}

/* MatchEvents */
export type EventType = "goal" | "yellow" | "red" | "sub";

export interface MatchEvent {
  minute: number;
  type: EventType;
  team: "home" | "away";
  description: string;
}

/* MatchStats */
export interface StatRow {
  label: string;
  home: number;
  away: number;
}

/* MatchTabs */
export const TABS = ["Summary", "Lineups", "Stats", "Head-to-Head"] as const;
export type Tab = (typeof TABS)[number];

export interface MatchTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

/* FormationPitch */
export interface Player {
  number: number;
  name: string;
  x: number;
  y: number;
}

/* HeadToHead */
export interface H2HResult {
  date: string;
  result: string;
  winner: "home" | "away" | "draw";
}

/* Standings page */
export type Form = "W" | "D" | "L";

export interface StandingsPageRow {
  pos: number;
  club: string;
  code: string;
  p: number;
  w: number;
  d: number;
  l: number;
  gd: number;
  pts: number;
  form: Form[];
  zone?: "champions" | "europa" | "relegation";
}

export interface LeagueScorer {
  name: string;
  club: string;
  goals: number;
}

export interface LeagueAssist {
  name: string;
  club: string;
  assists: number;
}

export interface LeagueCard {
  name: string;
  club: string;
  cards: number;
  color: "yellow" | "red";
}