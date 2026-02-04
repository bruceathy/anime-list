export default function SearchBar() {
  function searchlist() {
    const search = document.getElementById("search").value;
    const searchBtn = document.getElementById("search-btn");
    alert(`Searching for ${search}...`);

    searchBtn.addEventListener("click", searchlist);
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
