import Header from "./components/header/header";
import LiveMatch from "./components/liveMatch/liveMatch";
import MatchGrid from "./components/matchGrid/matchGrid";
import UpcomingFixtures from "./components/upcomingFixtures/upcomingFixtures";
import Sidebar from "./components/sidebar/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-pitch-bg bg-pitch-glow">
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 px-5 py-6 lg:px-10 lg:py-8">

        {/* Left column */}
        <section className="flex flex-col gap-6">
          <LiveMatch />
          <MatchGrid />
          <UpcomingFixtures />
        </section>

        {/* Right column — sidebar */}
        <Sidebar />

      </main>
    </div>
  );
}
