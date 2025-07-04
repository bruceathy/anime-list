import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import RecCard from "./RecCard";
import PaginationWrapper from "./PaginationWrapper";
import "../css/recs.css";

const fetchAnimeRec = async (page = 1) => {
  const url = `https://myanimelist.p.rapidapi.com/v2/anime/recommendations?p=${page}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Network response wasn't ok");
  return response.json();
};

export default function AnimeRecSec() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { isLoading, data, error } = useQuery({
    queryKey: ["animeRec", page],
    queryFn: () => fetchAnimeRec(page),
  });

  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>"Error: {error.message}"</p>;

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;
    setPage(newPage);
    queryClient.invalidateQueries(["animeRev"]);
  };

  return (
    <section>
      <h3 className="mid-title">Anime Recommendations</h3>
      {data.recommendations.map((anime) => (
        <RecCard
          key={anime.id}
          author_url={anime.author.url}
          author_name={anime.author.name}
          liked_title={anime.liked.title}
          liked_url={anime.liked.myanimelist_url}
          liked_pic={anime.liked.picture_url}
          rec_url={anime.recommendation.myanimelist_url}
          rec_title={anime.recommendation.title}
          rec_pic={anime.recommendation.picture_url}
          desc={anime.description}
        />
      ))}
      <PaginationWrapper
        page={page}
        setPage={handlePageChange}
        queryKey={"animeRec"}
      />
    </section>
  );
}
