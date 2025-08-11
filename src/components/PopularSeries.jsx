import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import PopCard from "./PopCard";

import "react-dotenv";

// use tanstack query to fetch from API, tutorial video is below
// https://youtu.be/e74rB-14-m8?si=Wi9-q7OJ-cOnXf10&t=641

// hide api key in .env

const animeUrl = "https://myanimelist.p.rapidapi.com/anime/top/all";
const mangaUrl = "https://myanimelist.p.rapidapi.com/manga/top/all";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
    "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  },
};

const fetchPopularAnime = async () => {
  const response = await fetch(animeUrl, options);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const fetchPopularManga = async () => {
  const response = await fetch(mangaUrl, options);
  if (!response.ok) throw new Error("Network response wasn't ok");
  return response.json();
};

export default function PopularSeries() {
  const {
    data: animeData,
    isLoading: animeLoading,
    error: animeError,
  } = useQuery({
    queryKey: ["popular-anime"],
    queryFn: fetchPopularAnime,
  });

  const {
    data: mangaData,
    isLoading: mangaLoading,
    error: mangaError,
  } = useQuery({
    queryKey: ["popular-manga"],
    queryFn: fetchPopularManga,
  });

  if (animeLoading || mangaLoading) return <LoadingAnimation />;
  if (animeError || mangaError)
    return <p>"Error: {animeError.message && mangaError.message}"</p>;

  return (
    <section className="popular-series">
      <div className="popular">
        <h2>Most Popular Anime</h2>
        <div className="carousel">
          {animeData?.slice(0, 20).map((anime) => (
            <PopCard key={anime.id} {...anime} />
          ))}
        </div>
      </div>
      <div className="popular">
        <h2>Most Popular Manga</h2>
        <div className="carousel">
          {mangaData?.slice(0, 20).map((manga) => (
            <PopCard key={manga.id} {...manga} />
          ))}
        </div>
      </div>
    </section>
  );
}
