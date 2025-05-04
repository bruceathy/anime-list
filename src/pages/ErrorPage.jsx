import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

import jjkleft from "../assets/jjk-left.jpeg";
import jjkright from "../assets/jjk-right.jpeg";

export default function ErrorPage() {
  return (
    <>
      <MainNav />
      <div className="err-container">
        <img className="sidebar left" src={jjkleft} />
        <main className="error">
          <h1>Error 404</h1>
          <p>Page not found</p>
          <Link to="/" className="err-btn">
            Return Home
          </Link>
        </main>
        <img className="sidebar right" src={jjkright} />
      </div>
      <Footer />
    </>
  );
}
