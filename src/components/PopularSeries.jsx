import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import TopCard from "./TopCard";

const animeUrl = "https://myanimelist.p.rapidapi.com/anime/top/all";
const mangaUrl = "https://myanimelist.p.rapidapi.com/manga/top/all";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
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
        <h2>Top 10 Anime Series</h2>
        <div className="carousel">
          {animeData?.slice(0, 10).map((anime) => (
            <TopCard key={anime.id} {...anime} />
          ))}
        </div>
      </div>
      <div className="popular">
        <h2>Top 10 Manga Series</h2>
        <div className="carousel">
          {mangaData?.slice(0, 10).map((manga) => (
            <TopCard key={manga.id} {...manga} />
          ))}
        </div>
      </div>
    </section>
  );
}
