import Image from "next/image";
import { getFixtureById, getFixtureStatistics } from "@/lib/api/football";

// ToDo: Replace with a dynamic fixture ID once live fixture selection is implemented
const FIXTURE_ID = 1297536;

function getStat(
  stats: Awaited<ReturnType<typeof getFixtureStatistics>>,
  teamIndex: 0 | 1,
  type: string,
): string | number {
  const val = stats[teamIndex]?.statistics.find((s) => s.type === type)?.value;
  return val ?? 0;
}

export default async function LiveMatch() {
  const [fixture, stats] = await Promise.all([
    getFixtureById(FIXTURE_ID),
    getFixtureStatistics(FIXTURE_ID),
  ]);

  const homeTeam = fixture?.teams.home;
  const awayTeam = fixture?.teams.away;
  const homeGoals = fixture?.goals.home ?? 0;
  const awayGoals = fixture?.goals.away ?? 0;
  const elapsed = fixture?.fixture.status.elapsed ?? null;
  const isLive =
    fixture?.fixture.status.short === "1H" ||
    fixture?.fixture.status.short === "2H" ||
    fixture?.fixture.status.short === "ET";

  const homePoss =
    Number(String(getStat(stats, 0, "Ball Possession")).replace("%", "")) || 65;
  const awayPoss = 100 - homePoss;
  const homeShots = getStat(stats, 0, "Shots on Goal");
  const awayShots = getStat(stats, 1, "Shots on Goal");
  const homeCorners = getStat(stats, 0, "Corner Kicks");
  const awayCorners = getStat(stats, 1, "Corner Kicks");
  const homeCards = getStat(stats, 0, "Yellow Cards");
  const awayCards = getStat(stats, 1, "Yellow Cards");

  return (
    <>
      <div className="flex items-baseline gap-4">
        <h2 className="page-heading md:text-3xl">Live Now</h2>
        <span className="text-[13px] tracking-wide text-pitch-muted">
          6 matches in play
        </span>
      </div>

      <div className="pitch-glass rounded-xl-plus p-7">
        <header className="flex justify-between items-center">
          <h3 className="section-label">
            {fixture?.league.name ?? "Premier League"} ·{" "}
            {fixture?.league.round ?? ""}
          </h3>
          {isLive && elapsed ? (
            <span className="inline-flex items-center gap-1.5 bg-pitch-live text-white text-xs font-bold pl-2.5 pr-3.5 py-1 rounded-full shadow-live">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="inline-flex size-1.5 rounded-full bg-white" />
              </span>
              {elapsed}&apos;
            </span>
          ) : (
            <span className="pitch-ft-badge text-[10px] font-semibold px-2 py-0.5 rounded-full">
              {fixture?.fixture.status.short ?? "FT"}
            </span>
          )}
        </header>

        <div className="grid items-center gap-3 md:gap-6 py-2">
          {homeTeam && (
            <div className="flex items-center gap-2 md:gap-3 justify-end">
              <span className="text-sm md:text-base font-semibold text-pitch-text text-right">
                {homeTeam.name}
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pitch-accent/15 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={homeTeam.logo}
                  alt={homeTeam.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
            </div>
          )}

          <div className="text-5xl md:text-6xl lg:text-[76px] font-extrabold font-display text-pitch-text leading-none text-center whitespace-nowrap">
            {homeGoals} — {awayGoals}
          </div>

          {awayTeam && (
            <div className="flex items-center gap-2 md:gap-3 justify-start">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pitch-gold/15 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={awayTeam.logo}
                  alt={awayTeam.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
              <span className="text-sm md:text-base font-semibold text-pitch-text">
                {awayTeam.name}
              </span>
            </div>
          )}
        </div>

        {/* Possession bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <span className="section-label">Possession</span>
            <span className="section-label">
              {homePoss}% · {awayPoss}%
            </span>
          </div>
          <div className="flex h-1.5 rounded-full overflow-hidden bg-pitch-border">
            <div
              className="bg-pitch-accent transition-all duration-300"
              style={{ width: `${homePoss}%` }}
            />
            <div
              className="bg-pitch-gold transition-all duration-300"
              style={{ width: `${awayPoss}%` }}
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 md:gap-2.5 text-center mt-4">
          {[
            { label: "Shots on Target", home: homeShots, away: awayShots },
            { label: "Corners", home: homeCorners, away: awayCorners },
            { label: "Cards", home: homeCards, away: awayCards },
          ].map(({ label, home, away }) => (
            <div key={label} className="space-y-0.5">
              <p className="section-label">{label}</p>
              <p className="stat-value text-sm md:text-base">
                {home} – {away}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}