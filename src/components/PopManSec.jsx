import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import PopCard from "./PopCard";

const mangaUrl = "https://myanimelist.p.rapidapi.com/manga/top/all";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
};

const fetchPopularManga = async () => {
  const response = await fetch(mangaUrl, options);
  if (!response.ok) throw new Error("Network response wasn't ok");
  return response.json();
};

export default function PopularSeries() {
  const {
    data: mangaData,
    isLoading: mangaLoading,
    error: mangaError,
  } = useQuery({
    queryKey: ["popular-manga"],
    queryFn: fetchPopularManga,
  });

  if (mangaLoading) return <LoadingAnimation />;
  if (mangaError) return <p>"Error: {mangaError.message}"</p>;

  return (
    <section className="popular-series">
      <div className="popular">
        <h3 className="mid-title">Popular Manga Series</h3>
        <div className="carousel">
          {mangaData?.map((manga) => (
            <PopCard key={manga.id} {...manga} />
          ))}
        </div>
      </div>
    </section>
  );
}
