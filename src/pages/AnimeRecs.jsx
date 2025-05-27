import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import AniRecSec from "../components/AniRecSec";
import Footer from "../components/Footer";
import "../css/recs.css";

// import jjkleft from "../assets/jjk-left.jpeg";
// import jjkright from "../assets/jjk-right.jpeg";

export default function AnimeRecs() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <AniRecSec />
          <Footer />
        </main>
      </div>
    </>
  );
}
