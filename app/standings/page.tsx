import Link from "next/link";
import UserPortal from "@/app/components/userPortal/userPortal";
import { IoChevronBack } from "react-icons/io5";
import type { Form, StandingsPageRow, LeagueScorer, LeagueAssist, LeagueCard } from "@/lib/types/ui";

const leagues = [
  { label: "PL", name: "La Liga"    },
  { label: "SA", name: "Serie A"    },
  { label: "BL", name: "Bundesliga" },
];

const standings: StandingsPageRow[] = [
  { pos: 1,  club: "Arsenal",       code: "ARS", p: 27, w: 18, d: 6, l: 3,  gd: +31, pts: 60, form: ["W","W","W","W","W"], zone: "champions"  },
  { pos: 2,  club: "Man City",      code: "MCI", p: 27, w: 17, d: 6, l: 4,  gd: +27, pts: 57, form: ["L","W","W","W","W"], zone: "champions"  },
  { pos: 3,  club: "Liverpool",     code: "LIV", p: 27, w: 16, d: 7, l: 4,  gd: +24, pts: 55, form: ["W","D","W","W","W"], zone: "champions"  },
  { pos: 4,  club: "Aston Villa",   code: "AVL", p: 27, w: 14, d: 6, l: 7,  gd: +15, pts: 48, form: ["W","L","W","D","W"], zone: "champions"  },
  { pos: 5,  club: "Chelsea",       code: "CHE", p: 27, w: 12, d: 9, l: 6,  gd: +11, pts: 45, form: ["W","W","D","W","L"], zone: "europa"     },
  { pos: 6,  club: "Newcastle",     code: "NEW", p: 27, w: 12, d: 7, l: 8,  gd: +9,  pts: 43, form: ["D","W","W","L","W"], zone: "europa"     },
  { pos: 7,  club: "Tottenham",     code: "TOT", p: 27, w: 11, d: 7, l: 9,  gd: +5,  pts: 40, form: ["L","W","D","W","L"]                     },
  { pos: 18, club: "Sheffield Utd", code: "SHU", p: 27, w: 4,  d: 5, l: 18, gd: -32, pts: 17, form: ["L","L","W","L","L"], zone: "relegation" },
  { pos: 19, club: "Burnley",       code: "BUR", p: 27, w: 4,  d: 4, l: 19, gd: -35, pts: 16, form: ["L","L","L","W","L"], zone: "relegation" },
  { pos: 20, club: "Luton Town",    code: "LUT", p: 27, w: 3,  d: 6, l: 18, gd: -30, pts: 15, form: ["L","L","D","L","L"], zone: "relegation" },
];

const topScorers: LeagueScorer[] = [
  { name: "E. Haaland",   club: "MCI", goals: 19 },
  { name: "H. Kane",      club: "BAY", goals: 17 },
  { name: "B. Saka",      club: "ARS", goals: 14 },
];

const topAssists: LeagueAssist[] = [
  { name: "K. De Bruyne", club: "MCI", assists: 13 },
  { name: "M. Ødegaard",  club: "ARS", assists: 11 },
  { name: "C. Palmer",    club: "CHE", assists: 10 },
];

const mostCards: LeagueCard[] = [
  { name: "M. Caicedo", club: "CHE", cards: 9, color: "yellow" },
  { name: "D. Rice",    club: "ARS", cards: 8, color: "yellow" },
];

const formColor: Record<Form, string> = {
  W: "bg-pitch-accent",
  D: "bg-pitch-muted/50",
  L: "bg-pitch-live",
};

const zoneBar: Record<NonNullable<StandingsPageRow["zone"]>, string> = {
  champions:  "bg-pitch-accent",
  europa:     "bg-pitch-gold",
  relegation: "bg-pitch-live",
};

export default function StandingsPage() {
  return (
    <div className="min-h-screen bg-pitch-bg">

      <header className="flex items-center justify-between px-5 lg:px-10 py-3 border-b border-pitch-border">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center justify-center w-8 h-8 rounded-full bg-pitch-surface hover:bg-pitch-surface-2 transition-colors text-pitch-muted hover:text-pitch-text">
            <IoChevronBack className="text-sm" />
          </Link>
          <Link href="/" className="font-display font-bold text-lg text-pitch-text tracking-tight">
            KICKWIRE
          </Link>
          <span className="hidden md:block text-sm text-pitch-muted">Standings</span>
        </div>
        <UserPortal />
      </header>

      <main className="px-5 py-6 lg:px-10 lg:py-8 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 max-w-[1100px] mx-auto">

        <section className="flex flex-col gap-5">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="pitch-inset text-xs font-bold text-pitch-accent px-2 py-1 rounded">PL</span>
              <h1 className="page-heading md:text-2xl">Premier League — 2025/26</h1>
            </div>
            <div className="flex gap-2">
              {leagues.map(({ label, name }) => (
                <button key={label} className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors
                  ${label === "PL"
                    ? "bg-pitch-text text-pitch-bg border-pitch-text"
                    : "border-pitch-border text-pitch-muted hover:text-pitch-text"
                  }`}>
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="pitch-card rounded-lg-plus overflow-hidden">
            {/* Column headers */}
            <div className="grid grid-cols-[24px_1fr_32px_32px_32px_32px_40px_40px_90px] gap-x-2 px-4 py-2 border-b border-pitch-border">
              {["#", "Club", "P", "W", "D", "L", "GD", "PTS", "Form"].map((h) => (
                <span key={h} className="section-label text-center first:text-left last:text-right">{h}</span>
              ))}
            </div>

            {standings.map((row, i) => {
              const prev = standings[i - 1];
              const showDivider = prev && prev.zone !== row.zone && (prev.zone || row.zone);
              return (
                <div key={row.pos}>
                  {showDivider && <div className="border-t border-dashed border-pitch-border/60 mx-4" />}
                  <div className="grid grid-cols-[24px_1fr_32px_32px_32px_32px_40px_40px_90px] gap-x-2 px-4 py-3 items-center hover:bg-pitch-surface/50 transition-colors relative">
                    {row.zone && (
                      <div className={`absolute left-0 top-2 bottom-2 w-0.5 rounded-full ${zoneBar[row.zone]}`} />
                    )}
                    <span className="stat-meta">{row.pos}</span>
                    <span className="text-sm font-semibold text-pitch-text">{row.club}</span>
                    {[row.p, row.w, row.d, row.l].map((val, j) => (
                      <span key={j} className="stat-meta text-center">{val}</span>
                    ))}
                    <span className={`stat-meta text-center ${row.gd > 0 ? "text-pitch-accent" : row.gd < 0 ? "text-pitch-live" : ""}`}>
                      {row.gd > 0 ? `+${row.gd}` : row.gd}
                    </span>
                    <span className="stat-value text-sm text-center">{row.pts}</span>
                    <div className="flex gap-1 justify-end">
                      {row.form.map((f, j) => (
                        <span key={j} className={`${formColor[f]} w-4 h-4 rounded-sm`} title={f} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex gap-6 px-4 py-3 border-t border-pitch-border">
              {[
                { color: "bg-pitch-accent", label: "Champions League" },
                { color: "bg-pitch-gold",   label: "Europa League"    },
                { color: "bg-pitch-live",   label: "Relegation"       },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <span className={`${color} w-2 h-2 rounded-full`} />
                  <span className="text-[10px] text-pitch-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="flex flex-col gap-4">
          {/* Top Scorers */}
          <div className="pitch-glass rounded-lg-plus p-5 space-y-3">
            <h3 className="card-heading">Top Scorers</h3>
            {topScorers.map(({ name, club, goals }, i) => (
              <div key={name} className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-pitch-text font-medium">{i + 1}. {name}</span>
                  <span className="text-xs text-pitch-muted"> · {club}</span>
                </div>
                <span className="stat-value text-sm text-pitch-accent">{goals}</span>
              </div>
            ))}
          </div>

          {/* Top Assists */}
          <div className="pitch-glass rounded-lg-plus p-5 space-y-3">
            <h3 className="card-heading">Top Assists</h3>
            {topAssists.map(({ name, club, assists }, i) => (
              <div key={name} className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-pitch-text font-medium">{i + 1}. {name}</span>
                  <span className="text-xs text-pitch-muted"> · {club}</span>
                </div>
                <span className="stat-value text-sm text-pitch-accent">{assists}</span>
              </div>
            ))}
          </div>

          {/* Most Cards */}
          <div className="pitch-glass rounded-lg-plus p-5 space-y-3">
            <h3 className="card-heading">Most Cards</h3>
            {mostCards.map(({ name, club, cards, color }, i) => (
              <div key={name} className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-pitch-text font-medium">{i + 1}. {name}</span>
                  <span className="text-xs text-pitch-muted"> · {club}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-3.5 h-4 rounded-sm ${color === "yellow" ? "bg-pitch-gold" : "bg-pitch-live"}`} />
                  <span className="stat-value text-sm">{cards}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
