"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="search-box flex items-center gap-2 px-3 py-2 lg:w-[240]">
      <IoSearch />
      {/* ToDo: Write the unctionality */}
      <input
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        placeholder="Search teams, leagues..."
        className="bg-transparent w-full"
      />
    </div>
  );
}
