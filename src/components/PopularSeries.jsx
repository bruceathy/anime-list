// import { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation.jsx";

export default function PopularSeries() {
  // const url = "https://myanimelist.p.rapidapi.com/anime/top/all";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
  //     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  //   },
  // };

  fetch("https://fakestoreapi.com/products/1")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.example.com/data")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => setError(error));
  // }, []);

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
