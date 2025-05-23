import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import RecCard from "./RecCard";
import "../css/recs.css";

const fetchAnimeRec = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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
