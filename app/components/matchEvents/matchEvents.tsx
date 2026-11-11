import type { EventType, MatchEvent } from "@/lib/types/ui";

const events: MatchEvent[] = [
  { minute: 78, type: "goal",   team: "home", description: "B. Saka (Arsenal), assist Ødegaard" },
  { minute: 64, type: "yellow", team: "away", description: "M. Caicedo (Chelsea)" },
  { minute: 58, type: "sub",    team: "home", description: "Trossard on for Havertz (Arsenal)" },
  { minute: 41, type: "goal",   team: "away", description: "C. Palmer (Chelsea), penalty" },
  { minute: 23, type: "goal",   team: "home", description: "G. Jesus (Arsenal)" },
];

const icons: Record<EventType, { symbol: string; color: string }> = {
  goal:   { symbol: "⚽", color: "bg-pitch-accent" },
  yellow: { symbol: "🟨", color: "bg-pitch-gold" },
  red:    { symbol: "🟥", color: "bg-pitch-live" },
  sub:    { symbol: "↕",  color: "bg-pitch-muted/30" },
};

export default function MatchEvents() {
  return (
    <div className="pitch-card rounded-lg-plus p-5 space-y-4">
      <h3 className="card-heading">Match Events</h3>

      <div className="flex flex-col gap-3">
        {events.map(({ minute, type, description }, i) => {
          const { symbol, color } = icons[type];
          return (
            <div key={i} className="flex items-start gap-3">
              <span className="stat-meta w-8 shrink-0 pt-0.5">{minute}&apos;</span>
              <div className={`${color} w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5`}>
                {symbol}
              </div>
              <div className="text-sm text-pitch-text leading-snug">
                <span className="font-semibold capitalize">
                  {type === "sub" ? "Substitution" : type === "yellow" ? "Yellow Card" : "Goal"}
                </span>
                {" — "}
                {description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
