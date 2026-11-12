"use client";

import type { MatchTabsProps, Tab } from "@/lib/types/ui";
import { TABS } from "@/lib/types/ui";

export type { Tab };

export default function MatchTabs({ activeTab, onTabChange }: MatchTabsProps) {
  return (
    <nav className="flex border-b border-pitch-border">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-5 py-3 text-sm font-medium transition-colors relative
            ${
              activeTab === tab
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
