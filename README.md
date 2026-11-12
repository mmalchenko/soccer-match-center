# Kickwire — Soccer Match Center

A football dashboard built with Next.js 16, React 19, and Tailwind CSS v4. Covers live scores, standings, fixtures, and match detail pages with real data from API-Football v3.

## Tech Stack
- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript 5
- **Styling** — Tailwind CSS v4 with `@utility` and `@theme inline`
- **Data** — API-Football v3 (api-sports.io)
- **Fonts** — IBM Plex Sans, IBM Plex Mono, Bricolage Grotesque, Fraunces

## Getting Started
**1. Clone and install**

```bash
git clone https://github.com/mmalchenko/soccer-match-center.git
cd soccer-match-center
npm install
```

**2. Add your API key**
Create `.env.local` in the project root:

```
API_SPORTS_KEY=your_api_key_here
```

Get a free key at [api-sports.io](https://api-sports.io). Free tier: 100 requests/day.

**3. Start the dev server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages
| Route | Description |
|---|---|
| `/` | Home — live match hero, match grid, upcoming fixtures, sidebar |
| `/match/[id]` | Match detail — score, formation, stats, events, H2H, odds |
| `/standings` | League table with form indicators and zone colors |
| `/fixtures` | Upcoming fixtures grouped by date |

## Project Structure
app/
  components/
    header/             Site header — logo, nav, search, avatar
    liveMatch/          Hero match card with live score and stats (API)
    matchGrid/          Grid of live/finished/upcoming match cards (API)
    matchCard/          Reusable compact match card, links to match detail
    upcomingFixtures/   Upcoming fixtures list (API)
    leagueTable/        Premier League table widget (API)
    topScorers/         Top scorers widget
    trending/           Trending news links
    matchHero/          Match detail hero with score and live badge
    formationPitch/     SVG pitch with player positions
    matchStats/         Stat comparison bars
    matchEvents/        Goal / card / sub timeline
    headToHead/         Last 5 H2H results
    winPrediction/      Win probability tri-bar
    liveOdds/           1/X/2 odds display
    sidebar/            Right-column widget container
  fixtures/             /fixtures page
  standings/            /standings page
  match/[id]/           Match detail page
  globals.css           Tailwind v4 imports, design tokens, base reset
  dark.theme.css        @utility classes (pitch-glass, card-heading, etc.)
  light.theme.css       Editorial light theme utilities

lib/
  api/
    football.ts         All API-Football v3 fetch functions
  types/
    api.ts              API response interfaces (Team, Fixture, StandingRow)
    ui.ts               Component types (MatchCardData, MatchEvent, Player)
  data/
    match.ts            Static fallback data for match detail
    matches.ts          Static fallback data for match grid
    standings.ts        Static fallback data for standings sidebar
    fixtures.ts         Static fallback data for fixtures page

## API Endpoints
| Function | Endpoint | Used by |
|---|---|---|
| `getStandings` | `GET /standings` | Standings page, LeagueTable widget |
| `getUpcomingFixtures` | `GET /fixtures?next=` | UpcomingFixtures widget |
| `getLiveFixtures` | `GET /fixtures?live=all` | MatchGrid (30s ISR) |
| `getFixtureById` | `GET /fixtures?id=` | LiveMatch hero |
| `getFixtureStatistics` | `GET /fixtures/statistics` | LiveMatch stats bar |

All requests use Next.js ISR. Live data revalidates every 3600 seconds. Components fall back to static data when the API is unavailable.

## Design System
Tailwind CSS v4 — no `tailwind.config.js` (v4 does not use it). Tokens are defined as CSS custom properties in `globals.css` and registered via `@theme inline`. Reusable patterns are extracted into `@utility` classes in `dark.theme.css`.

Two themes are defined:
- **Pitch Dark** (default) — dark green/charcoal with accent `#35E27A`
- **Editorial Light** — warm cream palette (tokens ready, switcher not yet implemented)