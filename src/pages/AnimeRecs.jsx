import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import AniRecSec from "../components/AniRecSec";
import Footer from "../components/Footer";
import "../css/recs.css";

export default function AnimeRecs() {
  return (
    <body>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <AniRecSec />
          <Footer />
        </main>
      </div>
    </body>
  );
}
