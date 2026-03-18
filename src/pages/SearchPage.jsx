import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import AnimeResults from "../components/AnimeResults";
import MangaResults from "../components/MangaResults";
import Footer from "../components/Footer";
import "../css/search.css";

// SETUP CLAUDE IN A SIDE WINDOW TERMINAL LIKE YESTERDAY
export default function SearchPage() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <AnimeResults />
          <MangaResults />
          <Footer />
        </main>
      </div>
    </>
  );
}
