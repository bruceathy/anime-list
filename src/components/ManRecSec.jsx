import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import Pagination from "./Pagination";
import RecCard from "./RecCard";

// HIDE THE API KEYS IN A .ENV FILE
const fetchMangaRec = async (page = 1) => {
  const url = `https://myanimelist.p.rapidapi.com/v2/manga/recommendations?p=${page}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Network response wasn't ok");
  return response.json();
};

export default function MangaRecSec() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { isLoading, data, error } = useQuery({
    queryKey: ["mangaRec", page],
    queryFn: () => fetchMangaRec(page),
  });

  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>"Error: {error.message}"</p>;

  return (
    <section>
      <h3 className="mid-title">Manga Recommendations</h3>
      {data.recommendations.map((manga) => (
        <RecCard
          key={manga.id}
          author_url={manga.author.url}
          author_name={manga.author.name}
          liked_title={
            manga.liked.title.length > 50
              ? manga.liked.title.slice(0, 50) + "..."
              : manga.liked.title
          }
          liked_url={manga.liked.myanimelist_url}
          liked_pic={manga.liked.picture_url}
          rec_url={manga.recommendation.myanimelist_url}
          rec_title={
            manga.recommendation.title.length > 50
              ? manga.recommendation.title.slice(0, 50) + "..."
              : manga.recommendation.title
          }
          rec_pic={manga.recommendation.picture_url}
          desc={manga.description}
        />
      ))}
      <Pagination
        page={page}
        setPage={setPage}
        queryClient={queryClient}
        queryKey={"mangaRec"}
      />
    </section>
  );
}
