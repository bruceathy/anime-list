export default function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        className="searchbar"
        id="search"
        placeholder="Search"
      />
      <button className="btn" id="search-btn">
        {/* Add search icon below */}
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
