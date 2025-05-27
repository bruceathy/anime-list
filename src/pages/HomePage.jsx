import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import PopularSeries from "../components/PopularSeries";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import jjkleft from "../assets/jjk-left.jpeg";
import jjkright from "../assets/jjk-right.jpeg";
import banner from "../assets/banner-img.jpeg";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <div className="container">
        <img className="sidebar left" src={jjkleft} />
        <main>
          <Link
            to="https://www.viz.com/read/book/jujutsu-kaisen-the-official-character-guide/product/7824"
            target="_blank"
          >
            <img className="banner" src={banner} alt="jujutsu kaisen banner" />
          </Link>
          <MiniNav />
          <PopularSeries />
          <Footer />
        </main>
        <img className="sidebar right" src={jjkright} />
      </div>
    </>
  );
}
