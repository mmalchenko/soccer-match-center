import type { MatchEvent, StatRow, H2HResult, Player } from "@/lib/types/ui";

/* Match events */
export const matchEvents: MatchEvent[] = [
  {
    minute: 78,
    type: "goal",
    team: "home",
    description: "B. Saka (Arsenal), assist Ødegaard",
  },
  {
    minute: 64,
    type: "yellow",
    team: "away",
    description: "M. Caicedo (Chelsea)",
  },
  {
    minute: 58,
    type: "sub",
    team: "home",
    description: "Trossard on for Havertz (Arsenal)",
  },
  {
    minute: 41,
    type: "goal",
    team: "away",
    description: "C. Palmer (Chelsea), penalty",
  },
  { minute: 23, type: "goal", team: "home", description: "G. Jesus (Arsenal)" },
];

/* Match statistics */
export const matchStats: StatRow[] = [
  { label: "Possession", home: 65, away: 35 },
  { label: "Total Shots", home: 14, away: 8 },
  { label: "Shots on Target", home: 6, away: 3 },
  { label: "Corners", home: 5, away: 2 },
  { label: "Fouls", home: 8, away: 11 },
];

/* Head to head */
export const h2hResults: H2HResult[] = [
  { date: "Apr 2026", result: "Chelsea 0–2 Arsenal", winner: "home" },
  { date: "Nov 2025", result: "Arsenal 1–1 Chelsea", winner: "draw" },
  { date: "May 2025", result: "Chelsea 2–3 Arsenal", winner: "home" },
  { date: "Dec 2024", result: "Arsenal 3–0 Chelsea", winner: "home" },
  { date: "Apr 2024", result: "Chelsea 1–1 Arsenal", winner: "draw" },
];

export const h2hSummary = { home: 3, draws: 1, away: 1 };

/* Formation / lineups */
export const homePlayers: Player[] = [
  { number: 1, name: "Raya", x: 8, y: 50 },
  { number: 3, name: "Zinchenko", x: 20, y: 80 },
  { number: 4, name: "Gabriel", x: 20, y: 63 },
  { number: 6, name: "Saliba", x: 20, y: 37 },
  { number: 2, name: "Timber", x: 20, y: 20 },
  { number: 8, name: "Ødegaard", x: 37, y: 60 },
  { number: 5, name: "Rice", x: 37, y: 40 },
  { number: 7, name: "Saka", x: 37, y: 75 },
  { number: 9, name: "Jesus", x: 50, y: 50 },
  { number: 11, name: "Martinelli", x: 50, y: 28 },
  { number: 14, name: "Trossard", x: 50, y: 72 },
];

export const awayPlayers: Player[] = [
  { number: 1, name: "Sánchez", x: 92, y: 50 },
  { number: 4, name: "Colwill", x: 80, y: 68 },
  { number: 6, name: "Silva", x: 80, y: 50 },
  { number: 2, name: "James", x: 80, y: 20 },
  { number: 97, name: "Enzo", x: 80, y: 35 },
  { number: 5, name: "Caicedo", x: 65, y: 42 },
  { number: 20, name: "Mudryk", x: 65, y: 58 },
  { number: 30, name: "Palmer", x: 60, y: 28 },
  { number: 7, name: "Sterling", x: 72, y: 72 },
  { number: 25, name: "Caçarola", x: 80, y: 82 },
  { number: 22, name: "N/A", x: 65, y: 68 },
];

/* Odds */
export const mainOdds = [
  { label: "1", value: "1.85" },
  { label: "X", value: "3.60" },
  { label: "2", value: "4.20" },
];

/* Win prediction */
export const predictionHints = [
  { label: "Advice", value: "Arsenal or Draw" },
  { label: "Goals O/U 2.5", value: "Over 64%" },
  { label: "BTTS", value: "Yes 58%" },
];

export const predictionPct = { home: 54, draw: 21, away: 25 };

/* Top scorers (sidebar widget) */
export const topScorers = [
  { name: "E. Haaland", club: "Man City", goals: 19, pct: 100 },
  { name: "H. Kane", club: "Bayern", goals: 17, pct: 89 },
  { name: "B. Saka", club: "Arsenal", goals: 14, pct: 74 },
];

/* Trending news */
export const trendingItems = [
  "Arseal close in on top spot after derby win",
  "Haaland closes gap in Golden Boot race",
  "Champions League draw: what it means for the last 16",
];