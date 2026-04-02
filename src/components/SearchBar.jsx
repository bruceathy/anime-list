import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const navigate = useNavigate();

  function handleSearch() {
    if (search.trim()) return;
    navigate(`/search?q=${encodeURIComponent(search.trim())}
     +&type=${type}`);
    setSearch("");
  }

  return (
    <div className="searchbar-container">
      <select
        name="search-type"
        id="search-type"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="anime">Anime</option>
        <option value="manga">Manga</option>
      </select>
      <div>
        <button className="search-btn" id="search-btn" onClick={handleSearch}>
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
    </div>
  );
}
