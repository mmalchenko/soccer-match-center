import type { Metadata } from "next";
import Link from "next/link";
import UserPortal from "@/app/components/userPortal/userPortal";
import { IoChevronBack } from "react-icons/io5";
import { getStandings } from "@/lib/api/football";
import {
  topScorers,
  topAssists,
  mostCards,
  leagues,
} from "@/lib/data/standings";

export const metadata: Metadata = {
  title: "Standings — KICKWIRE",
};

const LEAGUE_ID = 39;
const SEASON = 2024;

const zoneFromDescription: Record<
  string,
  "champions" | "europa" | "relegation"
> = {
  "UEFA Champions League": "champions",
  "UEFA Europa League": "europa",
  Relegation: "relegation",
  "Relegation - Play-offs": "relegation",
};

const zoneBar = {
  champions: "bg-pitch-accent",
  europa: "bg-pitch-gold",
  relegation: "bg-pitch-live",
} as const;

const formColor: Record<string, string> = {
  W: "bg-pitch-accent",
  D: "bg-pitch-muted/50",
  L: "bg-pitch-live",
};

export default async function StandingsPage() {
  const rows = await getStandings(LEAGUE_ID, SEASON);

  return (
    <div className="min-h-screen bg-pitch-bg">
      <header className="flex items-center justify-between px-5 lg:px-10 py-3 border-b border-pitch-border">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-pitch-surface hover:bg-pitch-surface-2 transition-colors text-pitch-muted hover:text-pitch-text"
          >
            <IoChevronBack className="text-sm" />
          </Link>
          <Link
            href="/"
            className="font-display font-bold text-lg text-pitch-text tracking-tight"
          >
            KICKWIRE
          </Link>
          <span className="hidden md:block text-sm text-pitch-muted">
            Standings
          </span>
        </div>
        <UserPortal />
      </header>

      <main className="px-5 py-6 lg:px-10 lg:py-8 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 max-w-[1100] mx-auto">
        <section className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="pitch-inset text-xs font-bold text-pitch-accent px-2 py-1 rounded">
                PL
              </span>
              <h1 className="page-heading md:text-2xl">
                Premier League — 2024/25
              </h1>
            </div>
            <div className="flex gap-2">
              {leagues.map(({ label, name }) => (
                <button
                  key={label}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors
                  ${
                    label === "PL"
                      ? "bg-pitch-text text-pitch-bg border-pitch-text"
                      : "border-pitch-border text-pitch-muted hover:text-pitch-text"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="pitch-card rounded-lg-plus overflow-hidden">
            {/* Column headers */}
            <div className="grid grid-cols-[24px_1fr_32px_32px_32px_32px_40px_40px_90px] gap-x-2 px-4 py-2 border-b border-pitch-border">
              {["#", "Club", "P", "W", "D", "L", "GD", "PTS", "Form"].map(
                (h) => (
                  <span
                    key={h}
                    className="section-label text-center first:text-left last:text-right"
                  >
                    {h}
                  </span>
                ),
              )}
            </div>

            {rows.map((row, i) => {
              const zone = row.description
                ? (zoneFromDescription[row.description] ?? undefined)
                : undefined;
              const prev = rows[i - 1];
              const prevZone = prev?.description
                ? (zoneFromDescription[prev.description] ?? undefined)
                : undefined;
              const showDivider =
                i > 0 && prevZone !== zone && (prevZone || zone);
              const formChars = (row.form ?? "").split("").slice(-5);

              return (
                <div key={row.rank}>
                  {showDivider && (
                    <div className="border-t border-dashed border-pitch-border/60 mx-4" />
                  )}
                  <div className="grid grid-cols-[24px_1fr_32px_32px_32px_32px_40px_40px_90px] gap-x-2 px-4 py-3 items-center hover:bg-pitch-surface/50 transition-colors relative">
                    {zone && (
                      <div
                        className={`absolute left-0 top-2 bottom-2 w-0.5 rounded-full ${zoneBar[zone]}`}
                      />
                    )}
                    <span className="stat-meta">{row.rank}</span>
                    <span className="text-sm font-semibold text-pitch-text">
                      {row.team.name}
                    </span>
                    {[
                      row.all.played,
                      row.all.win,
                      row.all.draw,
                      row.all.lose,
                    ].map((val, j) => (
                      <span key={j} className="stat-meta text-center">
                        {val}
                      </span>
                    ))}
                    <span
                      className={`stat-meta text-center ${row.goalsDiff > 0 ? "text-pitch-accent" : row.goalsDiff < 0 ? "text-pitch-live" : ""}`}
                    >
                      {row.goalsDiff > 0 ? `+${row.goalsDiff}` : row.goalsDiff}
                    </span>
                    <span className="stat-value text-sm text-center">
                      {row.points}
                    </span>
                    <div className="flex gap-1 justify-end">
                      {formChars.map((f, j) => (
                        <span
                          key={j}
                          className={`${formColor[f] ?? "bg-pitch-muted/30"} w-4 h-4 rounded-sm`}
                          title={f}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Fallback if API unavailable */}
            {rows.length === 0 && (
              <p className="px-4 py-6 text-sm text-pitch-muted text-center">
                Standings unavailable right now.
              </p>
            )}

            <div className="flex gap-6 px-4 py-3 border-t border-pitch-border">
              {[
                { color: "bg-pitch-accent", label: "Champions League" },
                { color: "bg-pitch-gold", label: "Europa League" },
                { color: "bg-pitch-live", label: "Relegation" },
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
          <div className="pitch-glass rounded-lg-plus p-5 space-y-3">
            <h3 className="card-heading">Top Scorers</h3>
            {topScorers.map(({ name, club, goals }, i) => (
              <div
                key={name}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <span className="text-pitch-text font-medium">
                    {i + 1}. {name}
                  </span>
                  <span className="text-xs text-pitch-muted"> · {club}</span>
                </div>
                <span className="stat-value text-sm text-pitch-accent">
                  {goals}
                </span>
              </div>
            ))}
          </div>

          <div className="pitch-glass rounded-lg-plus p-5 space-y-3">
            <h3 className="card-heading">Top Assists</h3>
            {topAssists.map(({ name, club, assists }, i) => (
              <div
                key={name}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <span className="text-pitch-text font-medium">
                    {i + 1}. {name}
                  </span>
                  <span className="text-xs text-pitch-muted"> · {club}</span>
                </div>
                <span className="stat-value text-sm text-pitch-accent">
                  {assists}
                </span>
              </div>
            ))}
          </div>

          <div className="pitch-glass rounded-lg-plus p-5 space-y-3">
            <h3 className="card-heading">Most Cards</h3>
            {mostCards.map(({ name, club, cards, color }, i) => (
              <div
                key={name}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <span className="text-pitch-text font-medium">
                    {i + 1}. {name}
                  </span>
                  <span className="text-xs text-pitch-muted"> · {club}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-3.5 h-4 rounded-sm ${color === "yellow" ? "bg-pitch-gold" : "bg-pitch-live"}`}
                  />
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