import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  function searchlist() {
    alert(`Searching...`);
    setSearch("");
  }

  return (
    <div className="searchbar-container">
      <button className="search-btn" id="search-btn" onClick={searchlist}>
        <i className="fas fa-search"></i>
      </button>

      <input
        className="searchbar"
        type="text"
        placeholder="Search..."
        id="search"
        name="search"
      />
    </div>
  );
}
