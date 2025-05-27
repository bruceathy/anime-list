import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import ManRecSec from "../components/ManRecSec";
import Footer from "../components/Footer";
import "../css/recs.css";

export default function MangaRecs() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <ManRecSec />
          <Footer />
        </main>
      </div>
    </>
  );
}
