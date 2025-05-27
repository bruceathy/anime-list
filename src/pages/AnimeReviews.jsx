import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import AnimeRevSec from "../components/AniRevSec";
import Footer from "../components/Footer";
import "../css/reviews.css";

export default function AnimeReviews() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <AnimeRevSec />
          <Footer />
        </main>
      </div>
    </>
  );
}
