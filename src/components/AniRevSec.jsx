import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import Pagination from "./Pagination";
import RevCard from "./RevCard";

const fetchAnimeRev = async (page = 1) => {
  const url = `https://myanimelist.p.rapidapi.com/v2/anime/reviews?p=${page}&spoilers=false&preliminary=true&include_tags=recommended&exclude_tags=creative%2Cnot_recommended`;
  const options = {
    method: "GET",
    headers: {
      // FIX THIS
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Network response wasn't ok");
  return response.json();
};

export default function AniRevSec() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { isLoading, data, error } = useQuery({
    queryKey: ["animeRev", page],
    queryFn: () => fetchAnimeRev(page),
  });

  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>"Error: {error.message}"</p>;

  return (
    <section>
      <h3 className="mid-title">Anime Reviews</h3>
      {data.reviews.map((review) => (
        <RevCard
          key={review.id}
          user_pic={review.user.picture_url}
          user_url={review.user.url}
          user_name={review.user.name}
          date_str={review.date.date_str}
          mal_url={review.object.mal_url}
          rev_title={review.object.title}
          rev_text={review.text.hidden}
          rev_tag={review.tag}
          pic_url={review.object.picture_url}
          mal_id={review.object.mal_id}
        />
      ))}
      <Pagination
        page={page}
        setPage={setPage}
        queryClient={queryClient}
        queryKey={"animeRev"}
      />
    </section>
  );
}
