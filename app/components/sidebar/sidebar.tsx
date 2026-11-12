import LeagueTable from "../leagueTable/leagueTable";
import TopScorers from "../topScorers/topScorers";
import Trending from "../trending/trending";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-4">
      <LeagueTable />
      <TopScorers />
      <Trending />
    </aside>
  );
}