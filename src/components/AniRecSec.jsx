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
  return (
    <section>
      <h3 className="mid-title">Anime Recommendations</h3>
      {data.map((post) => (
        <RecCard key={post.id} {...post} />
      ))}
    </section>
  );
}
