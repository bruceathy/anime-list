export default function SearchBar() {
  function searchlist() {
    const search = document.getElementById("search").value;
    const searchBtn = document.getElementById("search-btn");
    alert(`Searching for ${search}...`);

    searchBtn.addEventListener("click", searchlist);
  }
  return (
    <form method="get" className="searchbar-container">
      <input
        type="submit"
        className="search-btn"
        id="search-submit"
        onClick={searchlist}
      >
        <i className="fas fa-search"></i>
      </input>

      <input
        className="searchbar"
        type="text"
        placeholder="Search..."
        id="search"
        name="search"
      />
    </form>
  );
}
