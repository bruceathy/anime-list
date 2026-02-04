import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import Footer from "../components/Footer";

export default function SearchPage() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <Footer />
        </main>
      </div>
    </>
  );
}
