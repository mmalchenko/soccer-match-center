import Link from "next/link";
import type { MatchStatus, MatchCardData } from "@/lib/types/ui";

export type { MatchStatus, MatchCardData };

export default function MatchCard({ match }: { match: MatchCardData }) {
  const { id, league, homeTeam, awayTeam, status, minute, homeScore, awayScore, kickoff } = match;

  return (
    <Link href={id ? `/match/${id}` : "/match/1"} className="block group">
      <div className="pitch-card rounded-lg-plus p-4 flex flex-col gap-3 group-hover:border-pitch-muted/40 transition-colors">

        <div className="flex justify-between items-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-pitch-muted">
            {league}
          </span>
          {status === "live" && (
            <span className="inline-flex items-center gap-1 bg-pitch-live text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-live">
              <span className="relative flex size-1">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="inline-flex size-1 rounded-full bg-white" />
              </span>
              {minute}
            </span>
          )}
          {status === "ft" && (
            <span className="pitch-ft-badge text-[10px] font-semibold px-2 py-0.5 rounded-full">FT</span>
          )}
          {status === "upcoming" && kickoff && (
            <span className="text-[10px] font-medium text-pitch-muted">{kickoff}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="pitch-inset text-[10px] font-bold text-pitch-muted px-1.5 py-0.5 rounded">
                {homeTeam.code}
              </span>
              <span className="text-sm font-medium text-pitch-text">{homeTeam.name}</span>
            </div>
            {status !== "upcoming" && (
              <span className="font-mono text-sm font-bold text-pitch-text">{homeScore}</span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="pitch-inset text-[10px] font-bold text-pitch-muted px-1.5 py-0.5 rounded">
                {awayTeam.code}
              </span>
              <span className="text-sm font-medium text-pitch-text">{awayTeam.name}</span>
            </div>
            {status !== "upcoming" && (
              <span className="font-mono text-sm font-bold text-pitch-text">{awayScore}</span>
            )}
          </div>
        </div>

      </div>
    </Link>
  );
}
