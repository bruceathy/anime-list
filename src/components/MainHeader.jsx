import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function MainHeader() {
  return (
    <>
      <nav className="navbar mid-nav">
        <ul className="mini-nav">
          <li>
            <div className="dropdown">
              <button className="dropbtn first">
                Anime <i className="fas fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/anime-review">Reviews</Link>
                <Link to="/anime-recs">Recommendations</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Manga <i className="fas fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/manga-review">Reviews</Link>
                <Link to="/manga-recs">Recommendations</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/mylist">My List</Link>
          </li>
        </ul>

        <SearchBar />
      </nav>
    </>
  );
}
