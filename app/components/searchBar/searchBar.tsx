"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className="flex items-center gap-1 px-3 py-2 lg:w-[240] text-sm border border-pitch-border rounded-sm-plus text-pitch-text">
      <IoSearch className="text-pitch-muted" />
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Search teams, leagues..."
        className="outline-none w-full placeholder:text-pitch-muted"
      />
    </div>
  );
}