import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import MiniNav from "../components/MiniNav";
import PopularSeries from "../components/PopularSeries";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <div className="container">
        <img className="sidebar left" src="../imgs/jjk-left.jpeg" />
        <main>
          <Link
            to="https://www.viz.com/read/book/jujutsu-kaisen-the-official-character-guide/product/7824"
            target="_blank"
          >
            <img
              className="banner"
              src="../imgs/banner.jpeg"
              alt="jujutsu kaisen banner"
            />
          </Link>
          <MiniNav />
          <PopularSeries />
          <Footer />
        </main>
        <img className="sidebar right" src="../imgs/jjk-right.jpeg" />
      </div>
    </>
  );
}
