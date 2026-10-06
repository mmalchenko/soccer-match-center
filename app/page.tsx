import Header from "./components/header/header";
import LiveMatch from "./components/liveMatch/liveMatch";
import Sidebar from "./components/sidebar/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-pitch-bg bg-pitch-glow">
      <Header />
      <main className="grid lg:grid-cols-[1fr_320px] gap-6 px-10 py-8">
        <section>
          <LiveMatch />
        </section>
        <Sidebar />
      </main>
    </div>
  );
}
