import LoadingAnimation from "./LoadingAnimation";

//  MAKE LOADING POP CARDS

export default function HomeLoad() {
  return (
    <section className="popular-series">
      <div className="popular">
        <div className="carousel-container">
          <h2>Top 10 Anime Series</h2>
          <div className="carousel">
            <LoadingAnimation />
          </div>
        </div>
      </div>
      <div className="popular">
        <div className="carousel-container">
          <h2>Top 10 Manga Series</h2>
          <div className="carousel">
            <LoadingAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
