import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import Footer from "../components/Footer";

export default function MyList() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <h3 className="mid-title">My List</h3>
          <Footer />
        </main>
      </div>
    </>
  );
}
