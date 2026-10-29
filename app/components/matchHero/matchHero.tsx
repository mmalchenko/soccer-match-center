export default function MatchHero() {
  return (
    <div className="pitch-glass rounded-xl-plus p-6 md:p-8">
      {/* Live badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-1.5 bg-pitch-live text-white text-xs font-bold pl-2.5 pr-3.5 py-1 rounded-full shadow-live">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="inline-flex size-1.5 rounded-full bg-white" />
          </span>
          LIVE · 78&apos;
        </span>
      </div>

      {/* Teams + score */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
        {/* Home */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-pitch-accent/15 flex items-center justify-center">
            <span className="text-base font-bold font-display text-pitch-accent">ARS</span>
          </div>
          <span className="text-sm md:text-base font-semibold text-pitch-text text-center">Arsenal</span>
        </div>

        {/* Score */}
        <div className="text-5xl md:text-6xl lg:text-[76px] font-extrabold font-display text-pitch-text leading-none text-center whitespace-nowrap">
          2 — 1
        </div>

        {/* Away */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-pitch-gold/15 flex items-center justify-center">
            <span className="text-base font-bold font-display text-pitch-gold">CHE</span>
          </div>
          <span className="text-sm md:text-base font-semibold text-pitch-text text-center">Chelsea</span>
        </div>
      </div>

      {/* Venue / attendance / ref */}
      <div className="flex justify-center gap-6 mt-6 text-xs text-pitch-muted">
        <span>Emirates Stadium, London</span>
        <span>Att. 60,272</span>
        <span>Ref. M. Oliver</span>
      </div>
    </div>
  );
}
