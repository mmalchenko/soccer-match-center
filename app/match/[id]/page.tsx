import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Match Center — KICKWIRE",
};

import MatchHero from "@/app/components/matchHero/matchHero";
import WinPrediction from "@/app/components/winPrediction/winPrediction";
import LiveOdds from "@/app/components/liveOdds/liveOdds";
import FormationPitch from "@/app/components/formationPitch/formationPitch";
import MatchStats from "@/app/components/matchStats/matchStats";
import MatchEvents from "@/app/components/matchEvents/matchEvents";
import HeadToHead from "@/app/components/headToHead/headToHead";
import UserPortal from "@/app/components/userPortal/userPortal";
import { IoChevronBack } from "react-icons/io5";

export default function MatchPage() {
  return (
    <div className="min-h-screen bg-pitch-bg">
      {/* Match page header */}
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
          <div className="hidden md:flex items-center gap-1 text-xs text-pitch-muted">
            <span>Premier League</span>
            <span className="text-pitch-border mx-1">·</span>
            <span className="text-pitch-text font-medium">
              Arsenal vs Chelsea
            </span>
          </div>
        </div>
        <UserPortal />
      </header>

      <main className="max-w-[900] mx-auto px-5 py-6 lg:px-10 lg:py-8 flex flex-col gap-5">
        {/* Hero */}
        <MatchHero />

        {/* Tabs — static for now */}
        <nav className="flex border-b border-pitch-border">
          {["Summary", "Lineups", "Stats", "Head-to-Head"].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-3 text-sm font-medium transition-colors relative
                ${
                  tab === "Summary"
                    ? "text-pitch-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-pitch-accent after:rounded-full"
                    : "text-pitch-muted hover:text-pitch-text"
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Prediction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <WinPrediction />
          <LiveOdds />
        </div>

        {/* Formation pitch */}
        <FormationPitch />

        {/* Match stats */}
        <MatchStats />

        {/* Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MatchEvents />
          <HeadToHead />
        </div>
      </main>
    </div>
  );
}