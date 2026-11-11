import Image from "next/image";
import Navbar from "../navigation/navigation";
import SearchBar from "../searchBar/searchBar";
import UserPortal from "../userPortal/userPortal";
import Link from "next/link";

export default function Header() {
  return (
    <header className="grid sm:grid-cols-2 md:grid-cols-[1fr_320px] gap-6 sm:px-5 lg:px-10 py-3 border-b border-pitch-border">
      <div className="flex items-center">
        <h1>
          <Link href="/">
            <Image
              className="sm:w-[140px] lg:w-[200px] h-auto"
              src="/01-logo-horizontal-on-dark.svg"
              alt="Kickwire"
              width={200}
              height={28}
            />
          </Link>
        </h1>
        <Navbar />
      </div>
      <div className="flex items-center justify-end gap-4">
        <SearchBar />
        <UserPortal />
      </div>
    </header>
  );
}
