import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import Footer from "../components/Footer";
import LogInNote from "../components/LogInNote";

export default function MyList() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          {/* <section className="popular-series">
            <div className="popular">
              <h2>My Anime List</h2>
              <div className="carousel">{ Saved Anime Series }</div>
            </div>
            <div className="popular">
              <h2>My Manga List</h2>
              <div className="carousel">{ Saved Manga Series }</div>
            </div>
          </section> */}
          <LogInNote />
          <Footer />
        </main>
      </div>
    </>
  );
}
