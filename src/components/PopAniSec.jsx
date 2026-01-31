import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import PopCard from "./PopCard";

const animeUrl = "https://myanimelist.p.rapidapi.com/anime/top/all";
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

export default function PopAniSec() {
  const {
    data: animeData,
    isLoading: animeLoading,
    error: animeError,
  } = useQuery({
    queryKey: ["popular-anime"],
    queryFn: fetchPopularAnime,
  });

  if (animeLoading) return <LoadingAnimation />;
  if (animeError) return <p>"Error: {animeError.message}"</p>;

  return (
    <section className="popular-series">
      <div className="popular">
        <h2>Most Popular Anime</h2>
        <div className="carousel">
          {animeData?.map((anime) => (
            <PopCard key={anime.id} {...anime} />
          ))}
        </div>
      </div>
    </section>
  );
}
