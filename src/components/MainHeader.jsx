import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import banner from "../assets/banner-img.jpeg";

export default function MainHeader() {
  return (
    <>
      <Link
        to="https://www.viz.com/read/book/jujutsu-kaisen-the-official-character-guide/product/7824"
        target="_blank"
      >
        <img className="banner" src={banner} alt="jujutsu kaisen banner" />
      </Link>
      <section className="navbar mid-nav">
        <ul className="mini-nav">
          <li>
            <div className="dropdown">
              <button className="dropbtn">
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
      </section>
    </>
  );
}
