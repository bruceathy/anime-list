import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import ManRevSec from "../components/ManRevSec";
import Footer from "../components/Footer";
import "../css/reviews.css";

export default function MangaReviews() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <ManRevSec />
          <Footer />
        </main>
      </div>
    </>
  );
}
