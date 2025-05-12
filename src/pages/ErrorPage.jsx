import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

export default function ErrorPage() {
  return (
    <>
      <MainNav />
      <div className="err-container">
        <main className="error">
          <h1>Error 404</h1>
          <p>Page not found</p>
          <Link to="/" className="err-btn">
            Return Home
          </Link>
        </main>
      </div>
      <Footer />
    </>
  );
}
