import LoadingHomeCard from "./LoadingHomeCard";

//  MAKE LOADING POP CARDS

export default function HomeLoad() {
  return (
    <section className="popular-series">
      <div className="popular">
        <div className="carousel-container">
          <h2>Top 10 Anime Series</h2>
          <div className="carousel">
            <LoadingHomeCard />
          </div>
        </div>
      </div>
      <div className="popular">
        <div className="carousel-container">
          <h2>Top 10 Manga Series</h2>
          <div className="carousel">
            <LoadingHomeCard />
          </div>
        </div>
      </div>
    </section>
  );
}
