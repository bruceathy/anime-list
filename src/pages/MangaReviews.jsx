import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import ManRevSec from "../components/ManRevSec";
import Footer from "../components/Footer";
import "../css/reviews.css";

import jjkleft from "../assets/jjk-left.jpeg";
import jjkright from "../assets/jjk-right.jpeg";

export default function MangaReviews() {
  return (
    <>
      <MainNav />
      <div className="container">
        <img className="sidebar left" src={jjkleft} />
        <main>
          <MiniNav />
          <ManRevSec />
          <Footer />
        </main>
        <img className="sidebar right" src={jjkright} />
      </div>
    </>
  );
}
