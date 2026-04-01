import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("anime");
  const navigate = useNavigate();

  function handleSearch() {
    if (search.trim()) return;
    navigate(`/search?q=${encodeURIComponent(search.trim())}
     +&type=${type}`);
    setSearch("");
  }

  // function handleKeyDown(e) {
  //   if (e.key === "Enter") {
  //     handleSearch();
  //   }
  // }

  return (
    <div className="searchbar-container">
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
  );
}
