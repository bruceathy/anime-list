import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <div className="container">
        <img className="sidebar left" src="../imgs/jjk-left.jpeg" />
        <main>
          <Link
            href="https://www.viz.com/read/book/jujutsu-kaisen-the-official-character-guide/product/7824"
            target="_blank"
          >
            <img
              class="banner"
              src="../imgs/banner.jpeg"
              alt="jujutsu kaisen banner"
            />
          </Link>
          <section class="navbar rounded">
            <ul>
              <li>
                <div class="dropdown">
                  <button class="dropbtn">
                    Anime <i class="fas fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="a-review.html">Reviews</a>
                    <a href="a-recs.html">Recommendations</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <button class="dropbtn">
                    Manga <i class="fas fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="m-review.html">Reviews</a>
                    <a href="m-recs.html">Recommendations</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="mylist.html">My List</a>
              </li>
            </ul>

            <div class="search-container">
              <input
                type="text"
                class="searchbar"
                id="search"
                placeholder="Search"
              />
              <button class="btn" id="search-btn">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </section>

          <section class="popular-series">
            <div class="popular">
              <h2>Most Popular Anime</h2>
              <div class="carousel" id="popular-anime">
                <div class="loading-wave">
                  <div class="loading-bar"></div>
                  <div class="loading-bar"></div>
                  <div class="loading-bar"></div>
                  <div class="loading-bar"></div>
                </div>
              </div>
            </div>
            <div class="popular">
              <h2>Most Popular Manga</h2>
              <div class="carousel" id="popular-manga">
                <div class="loading-wave">
                  <div class="loading-bar"></div>
                  <div class="loading-bar"></div>
                  <div class="loading-bar"></div>
                  <div class="loading-bar"></div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>

        <img class="sidebar right" src="../imgs/jjk-right.jpeg" />
      </div>
    </>
  );
}
