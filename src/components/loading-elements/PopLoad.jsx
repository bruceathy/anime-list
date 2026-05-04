import LoadingAnimation from "./LoadingAnimation";
import LoadingPopCard from "./LoadingPopCard";

//  MAKE LOADING POPCARDS

export default function PopLoad({ type }) {
  return (
    <section className="popular-series">
      <h3 className="mid-title">Popular {type} Series</h3>
      <div className="popular-section">
        <LoadingPopCard />
      </div>
    </section>
  );
}
