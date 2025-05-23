import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import PopularSeries from "../components/PopularSeries";
import Footer from "../components/Footer";

import jjkleft from "../assets/jjk-left.jpeg";
import jjkright from "../assets/jjk-right.jpeg";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <div className="container">
        <img className="sidebar left" src={jjkleft} />
        <main>
          <MiniNav />
          <PopularSeries />
          <Footer />
        </main>
        <img className="sidebar right" src={jjkright} />
      </div>
    </>
  );
}
