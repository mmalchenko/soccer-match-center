export interface FixtureMatch {
  time: string;
  home: string;
  away: string;
  league: string;
  homeScore: null;
  awayScore: null;
}

export interface FixtureDay {
  date: string;
  matches: FixtureMatch[];
}

export const fixtures: FixtureDay[] = [
  {
    date: "Thu, 8 Oct",
    matches: [
      {
        time: "19:30",
        home: "Tottenham",
        away: "Newcastle",
        league: "Premier League",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "20:00",
        home: "Real Madrid",
        away: "Sevilla",
        league: "La Liga",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "20:45",
        home: "PSG",
        away: "Lyon",
        league: "Ligue 1",
        homeScore: null,
        awayScore: null,
      },
    ],
  },
  {
    date: "Fri, 9 Oct",
    matches: [
      {
        time: "19:00",
        home: "Inter",
        away: "AC Milan",
        league: "Serie A",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "21:00",
        home: "Atlético Madrid",
        away: "Sevilla",
        league: "La Liga",
        homeScore: null,
        awayScore: null,
      },
    ],
  },
  {
    date: "Sat, 10 Oct",
    matches: [
      {
        time: "12:30",
        home: "Arsenal",
        away: "Bournemouth",
        league: "Premier League",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "15:00",
        home: "Chelsea",
        away: "Liverpool",
        league: "Premier League",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "15:00",
        home: "Bayern",
        away: "Dortmund",
        league: "Bundesliga",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "18:00",
        home: "Juventus",
        away: "Napoli",
        league: "Serie A",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "21:00",
        home: "Barcelona",
        away: "Real Madrid",
        league: "La Liga",
        homeScore: null,
        awayScore: null,
      },
    ],
  },
  {
    date: "Sun, 11 Oct",
    matches: [
      {
        time: "14:00",
        home: "Man City",
        away: "Man United",
        league: "Premier League",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "16:30",
        home: "Aston Villa",
        away: "Everton",
        league: "Premier League",
        homeScore: null,
        awayScore: null,
      },
      {
        time: "17:05",
        home: "Porto",
        away: "Benfica",
        league: "Primeira Liga",
        homeScore: null,
        awayScore: null,
      },
    ],
  },
];