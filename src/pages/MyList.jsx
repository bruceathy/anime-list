import { useState } from "react";
import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import Footer from "../components/Footer";

import RevCard from "../components/RevCard";

export default function MyList() {
  const [myAnimeList, setMyAnimeList] = useState([]);
  const [myMangaList, setMyMangaList] = useState([]);

  const handleAddToMyList = (animeId) => {
    setMyAnimeList([...myAnimeList, animeId]);
  };

  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <section className="popular-series">
            <div className="popular">
              <h2>My Anime List</h2>
              <div className="carousel">{/* Saved Anime Series */}</div>
            </div>
            <div className="popular">
              <h2>My Manga List</h2>
              <div className="carousel">{/* Saved Manga Series */}</div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}
