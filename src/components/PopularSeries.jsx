import LoadingAnimation from "./LoadingAnimation.jsx";

export default function PopularSeries() {
  return (
    <section className="popular-series">
      <div className="popular">
        <h2>Most Popular Anime</h2>
        <div className="carousel" id="popular-anime">
          <LoadingAnimation />
        </div>
      </div>
      <div className="popular">
        <h2>Most Popular Manga</h2>
        <div className="carousel" id="popular-manga">
          <LoadingAnimation />
        </div>
      </div>
    </section>
  );
}
