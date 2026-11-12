# Kickwire — Soccer Match Center

A football dashboard built with Next.js 16, React 19, and Tailwind CSS v4. Covers live scores, standings, fixtures, and match detail pages with real data from the API-Football v3 service.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (`@utility`, `@theme inline`) |
| Data | API-Football v3 (api-sports.io) |
| Fonts | IBM Plex Sans · IBM Plex Mono · Bricolage Grotesque · Fraunces (via `next/font/google`) |

---

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/mmalchenko/soccer-match-center.git
cd soccer-match-center
npm install
```

### 2. Add your API key

Create a `.env.local` file in the project root:

```
API_SPORTS_KEY=your_api_key_here
```

Get a free key at [api-sports.io](https://api-sports.io). The free tier allows 100 requests/day.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Pages

| Route | Description |
|---|---|
| `/` | Home dashboard — live match hero, match grid, upcoming fixtures, sidebar |
| `/match/[id]` | Match detail — score, formation, stats, events, H2H, odds, predictions |
| `/standings` | League table (Premier League 2024/25) with form, zones, and top stats |
| `/fixtures` | Upcoming fixtures grouped by date |

---

## Project Structure

```
app/
├── components/          # All UI components
│   ├── header/          # Site header with logo, nav, search, user avatar
│   ├── liveMatch/       # Hero match card — live score + stats from API
│   ├── matchGrid/       # 6-card grid of live/finished/upcoming matches
│   ├── matchCard/       # Reusable compact match card (links to match detail)
│   ├── upcomingFixtures/# Upcoming fixtures list (API-driven)
│   ├── leagueTable/     # Premier League table (API-driven)
│   ├── topScorers/      # Top scorers widget
│   ├── trending/        # Trending news links
│   ├── matchHero/       # Match detail hero with score and live badge
│   ├── formationPitch/  # SVG pitch with player positions
│   ├── matchStats/      # Stat comparison bars
│   ├── matchEvents/     # Goal / card / sub timeline
│   ├── headToHead/      # Last 5 H2H results
│   ├── winPrediction/   # Win probability tri-bar
│   ├── liveOdds/        # 1/X/2 odds display
│   └── sidebar/         # Right-column widget container
├── fixtures/            # /fixtures page
├── standings/           # /standings page
├── match/[id]/          # Match detail page
├── globals.css          # Tailwind v4 @import, design tokens, base reset
├── dark.theme.css       # @utility classes (pitch-glass, card-heading, etc.)
└── light.theme.css      # Editorial theme @utility classes

lib/
├── api/
│   └── football.ts      # All API-Football v3 fetch functions
├── types/
│   ├── api.ts           # API response interfaces (Team, Fixture, StandingRow…)
│   └── ui.ts            # Component/UI types (MatchCardData, MatchEvent…)
└── data/
    ├── match.ts          # Static fallback data for match detail page
    ├── matches.ts        # Static fallback data for match grid
    ├── standings.ts      # Static fallback data for standings sidebar
    └── fixtures.ts       # Static fallback data for fixtures page
```

---

## API Endpoints Used

| Function | Endpoint | Used by |
|---|---|---|
| `getTeamById` | `GET /teams?id=` | (legacy — superseded by fixture data) |
| `getStandings` | `GET /standings?league=&season=` | Standings page, LeagueTable widget |
| `getUpcomingFixtures` | `GET /fixtures?league=&season=&next=` | UpcomingFixtures widget |
| `getLiveFixtures` | `GET /fixtures?live=all` | MatchGrid (30s revalidate) |
| `getFixtureById` | `GET /fixtures?id=` | LiveMatch hero |
| `getFixtureStatistics` | `GET /fixtures/statistics?fixture=` | LiveMatch stats bar |

All requests use Next.js ISR (`next: { revalidate }`) — live data refreshes every 30 seconds, standings and fixtures every 120 seconds. Components fall back to static data when the API is unavailable (e.g. free-tier quota exceeded outside match days).

---

## Design System

The project uses Tailwind CSS v4 with a custom design token layer defined in CSS rather than `tailwind.config.js` (which is intentionally absent — v4 does not use it).

**Tokens** are declared as CSS custom properties in `globals.css` and registered in `@theme inline`.  
**Semantic utilities** are defined with `@utility` in `dark.theme.css` — e.g. `pitch-glass`, `pitch-card`, `card-heading`, `stat-value`, `section-label`.

The two themes are:
- **Pitch Dark** (default) — dark green/charcoal with accent green `#35E27A`
- **Editorial Light** — warm cream palette (tokens defined, switcher not yet implemented)

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `master` | Create Next App scaffold — untouched baseline |
| `dev` | Project init — components, theme, API layer |
| `home-page` | Main development branch — all current work |
| `match-detail` | Match detail page (merged into home-page) |
| `standings` | Standings page (merged into home-page) |
| `feat/tailwind-v4-migration` | Tailwind v3 → v4 migration (reference) |
