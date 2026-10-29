"use client";

const TABS = ["Summary", "Lineups", "Stats", "Head-to-Head"] as const;
type Tab = typeof TABS[number];

interface MatchTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export type { Tab };

export default function MatchTabs({ activeTab, onTabChange }: MatchTabsProps) {
  return (
    <nav className="flex border-b border-pitch-border">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-5 py-3 text-sm font-medium transition-colors relative
            ${activeTab === tab
              ? "text-pitch-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-pitch-accent after:rounded-full"
              : "text-pitch-muted hover:text-pitch-text"
            }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
