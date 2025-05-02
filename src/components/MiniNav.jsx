import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function MiniNav() {
  return (
    <section className="navbar rounded">
      <ul>
        <li>
          <div className="dropdown">
            <button className="dropbtn">
              Anime <i className="fas fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/a-review">Reviews</Link>
              <Link to="/a-recs">Recommendations</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">
              Manga <i className="fas fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/m-review">Reviews</Link>
              <Link to="/m-recs">Recommendations</Link>
            </div>
          </div>
        </li>
        <li>
          <Link to="/mylist">My List</Link>
        </li>
      </ul>

      <SearchBar />
    </section>
  );
}
