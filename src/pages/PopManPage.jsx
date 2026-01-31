import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import PopManSec from "../components/PopManSec";
import Footer from "../components/Footer";
import "../css/recs.css";

export default function AnimeRecs() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <PopManSec />
          <Footer />
        </main>
      </div>
    </>
  );
}
