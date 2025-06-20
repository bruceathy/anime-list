import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import RecCard from "./RecCard";
import "../css/recs.css";

const url = "https://myanimelist.p.rapidapi.com/v2/anime/recommendations?p=1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
    "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  },
};

const fetchAnimeRec = async () => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Network response wasn't ok");
  return response.json();
};

export default function AnimeRecSec() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["animeRec"],
    queryFn: fetchAnimeRec,
  });

  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>"Error: {error.message}"</p>;

  // CREATE MULTIPLE PAGES FOR THE RECS
  // USING REACT QUERY W/ REACT ROUTER
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
    </section>
  );
}
