import MainNav from "../components/MainNav";
import MiniNav from "../components/MainHeader";
import LoadingAnimation from "../components/LoadingAnimation";
import Footer from "../components/Footer";

export default function MyList() {
  return (
    <>
      <MainNav />
      <div className="container">
        <main>
          <MiniNav />
          <LoadingAnimation />
          <Footer />
        </main>
      </div>
    </>
  );
}
