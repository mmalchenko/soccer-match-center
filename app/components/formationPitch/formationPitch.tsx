interface Player {
  number: number;
  name: string;
  x: number; // 0–100 percentage across pitch
  y: number; // 0–100 percentage down pitch
}

const homePlayers: Player[] = [
  { number: 1,  name: "Raya",       x: 8,  y: 50 },
  { number: 3,  name: "Zinchenko",  x: 20, y: 80 },
  { number: 4,  name: "Gabriel",    x: 20, y: 63 },
  { number: 6,  name: "Saliba",     x: 20, y: 37 },
  { number: 2,  name: "Timber",     x: 20, y: 20 },
  { number: 8,  name: "Ødegaard",   x: 37, y: 60 },
  { number: 5,  name: "Rice",       x: 37, y: 40 },
  { number: 7,  name: "Saka",       x: 37, y: 75 },
  { number: 9,  name: "Jesus",      x: 50, y: 50 },
  { number: 11, name: "Martinelli", x: 50, y: 28 },
  { number: 14, name: "Trossard",   x: 50, y: 72 },
];

const awayPlayers: Player[] = [
  { number: 1,  name: "Sánchez",    x: 92, y: 50 },
  { number: 4,  name: "Colwill",    x: 80, y: 68 },
  { number: 6,  name: "Silva",      x: 80, y: 50 },
  { number: 2,  name: "James",      x: 80, y: 20 },
  { number: 97, name: "Enzo",       x: 80, y: 35 },
  { number: 5,  name: "Caicedo",    x: 65, y: 42 },
  { number: 20, name: "Mudryk",     x: 65, y: 58 },
  { number: 30, name: "Palmer",     x: 60, y: 28 },
  { number: 7,  name: "Sterling",   x: 72, y: 72 },
  { number: 25, name: "Caçarola",   x: 80, y: 82 },
  { number: 22, name: "N/A",        x: 65, y: 68 },
];

function PlayerDot({ player, side }: { player: Player; side: "home" | "away" }) {
  const color = side === "home" ? "bg-pitch-accent text-pitch-bg" : "bg-pitch-gold text-pitch-bg";
  return (
    <div
      className="absolute flex flex-col items-center gap-0.5 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${player.x}%`, top: `${player.y}%` }}
    >
      <div className={`${color} w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0`}>
        {player.number}
      </div>
      <span className="text-[9px] text-white/80 font-medium whitespace-nowrap leading-none">
        {player.name}
      </span>
    </div>
  );
}

export default function FormationPitch() {
  return (
    <div className="pitch-card rounded-lg-plus overflow-hidden">
      {/* Formation labels */}
      <div className="flex justify-between px-4 pt-3 pb-1">
        <span className="text-[10px] font-semibold text-pitch-muted">Arsenal · 4·3·3</span>
        <span className="text-[10px] font-semibold text-pitch-muted">Chelsea · 4·2·3·1</span>
      </div>

      {/* Pitch */}
      <div
        className="relative w-full mx-auto"
        style={{ aspectRatio: "16/9", background: "linear-gradient(to right, #1a3d25, #1e4a2d, #1a3d25)" }}
      >
        {/* Pitch markings */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Outer border */}
          <rect x="2" y="2" width="96" height="96" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Centre line */}
          <line x1="50" y1="2" x2="50" y2="98" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Centre circle */}
          <circle cx="50" cy="50" r="10" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Centre dot */}
          <circle cx="50" cy="50" r="0.8" fill="rgba(255,255,255,0.25)" />
          {/* Home penalty area */}
          <rect x="2" y="26" width="16" height="48" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Home 6-yard box */}
          <rect x="2" y="38" width="6" height="24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Away penalty area */}
          <rect x="82" y="26" width="16" height="48" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Away 6-yard box */}
          <rect x="92" y="38" width="6" height="24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        </svg>

        {/* Players */}
        {homePlayers.map((p) => <PlayerDot key={`h-${p.number}`} player={p} side="home" />)}
        {awayPlayers.map((p) => <PlayerDot key={`a-${p.number}`} player={p} side="away" />)}
      </div>
    </div>
  );
}
