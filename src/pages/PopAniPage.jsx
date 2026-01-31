import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import PopAniSec from "../components/PopAniSec";
import Footer from "../components/Footer";
import "../css/recs.css";

export default function PopAni() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <PopAniSec />
          <Footer />
        </main>
      </div>
    </>
  );
}
