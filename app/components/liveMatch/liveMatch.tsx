import Image from "next/image";
import { getTeamById } from "@/lib/api/football";

export default async function LiveMatch() {
  const [homeTeam, awayTeam] = await Promise.all([
    getTeamById(25),
    getTeamById(11),
  ]);

  return (
    <>
      <div className="flex items-baseline gap-4">
        <h2 className="page-heading md:text-3xl">Live Now</h2>
        <span className="text-[13px] tracking-wide text-pitch-muted">6 matches in play</span>
      </div>

      <div className="pitch-glass rounded-xl-plus p-7">
        <header className="flex justify-between items-center">
          <h3 className="section-label">Premier League · Emirates Stadium</h3>
          <span className="inline-flex items-center gap-1.5 bg-pitch-live text-white text-xs font-bold pl-2.5 pr-3.5 py-1 rounded-full shadow-live">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="inline-flex size-1.5 rounded-full bg-white" />
            </span>
            78&apos;
          </span>
        </header>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6 py-2">
          {homeTeam && (
            <div className="flex items-center gap-2 md:gap-3 justify-end">
              <span className="text-sm md:text-base font-semibold text-pitch-text text-right">{homeTeam.name}</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pitch-accent/15 flex items-center justify-center overflow-hidden shrink-0">
                <Image src={homeTeam.logo} alt={homeTeam.name} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              </div>
            </div>
          )}

          <div className="text-5xl md:text-6xl lg:text-[76px] font-extrabold font-display text-pitch-text leading-none text-center whitespace-nowrap">
            2 — 1
          </div>

          {awayTeam && (
            <div className="flex items-center gap-2 md:gap-3 justify-start">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pitch-gold/15 flex items-center justify-center overflow-hidden shrink-0">
                <Image src={awayTeam.logo} alt={awayTeam.name} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              </div>
              <span className="text-sm md:text-base font-semibold text-pitch-text">{awayTeam.name}</span>
            </div>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between">
            <span className="section-label">Possession</span>
            <span className="section-label">65% · 35%</span>
          </div>
          <div className="flex h-1.5 rounded-full overflow-hidden bg-pitch-border">
            <div className="bg-pitch-accent transition-all duration-300" style={{ width: "65%" }} />
            <div className="bg-pitch-gold transition-all duration-300" style={{ width: "35%" }} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-2.5 text-center mt-4">
          {[
            { label: "Shots on Target", value: "6 – 3" },
            { label: "Corners",         value: "5 – 2" },
            { label: "Cards",           value: "1 – 2" },
          ].map(({ label, value }) => (
            <div key={label} className="space-y-0.5">
              <p className="section-label">{label}</p>
              <p className="stat-value text-sm md:text-base">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
