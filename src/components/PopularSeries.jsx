import { useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation.jsx";

export default function PopularSeries() {
  useEffect(() => {
    const url = "https://myanimelist.p.rapidapi.com/anime/top/all";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
        "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
      },
    };

    const getPopularAnime = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    getPopularAnime();
  }, []);

  return (
    <section className="popular-series">
      <div className="popular">
        <h2>Most Popular Anime</h2>
        <div className="carousel" id="popular-anime">
          {/* {<LoadingAnimation /> } */}
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
