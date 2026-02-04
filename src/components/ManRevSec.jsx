import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import Pagination from "./Pagination";
import RevCard from "./RevCard";

// HIDE THE API KEYS INA .ENV FILE
const fetchMangaRev = async (page = 1) => {
  const url = `https://myanimelist.p.rapidapi.com/v2/manga/reviews?p=${page}&spoilers=false&preliminary=true&include_tags=recommended&exclude_tags=creative%2Cnot_recommended`;
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

export default function MangaRevSec() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { isLoading, data, error } = useQuery({
    queryKey: ["mangaRev", page],
    queryFn: () => fetchMangaRev(page),
  });

  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>"Error: {error.message}"</p>;

  return (
    <section>
      <h3 className="mid-title">Manga Reviews</h3>
      {data.reviews.map((review) => (
        <RevCard
          key={review.id}
          user_pic={review.user.picture_url}
          user_url={review.user.url}
          user_name={review.user.name}
          date_str={review.date.date_str}
          mal_url={review.object.mal_url}
          rev_title={
            review.object.title.length > 50
              ? review.object.title.slice(0, 50) + "..."
              : review.object.title
          }
          rev_text={review.text.full}
          rev_tag={review.tag}
          pic_url={review.object.picture_url}
          mal_id={review.object.mal_id}
        />
      ))}
      <Pagination
        page={page}
        setPage={setPage}
        queryClient={queryClient}
        queryKey={"mangaRev"}
      />
    </section>
  );
}
