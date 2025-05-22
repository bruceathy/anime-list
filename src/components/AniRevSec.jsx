import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import RevCard from "./RevCard";

const fetchAnimeRev = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response wasn't ok");
  return response.json();
};

export default function AniRevSec() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["animeRev"],
    queryFn: fetchAnimeRev,
  });

  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>"Error: {error.message}"</p>;
  return (
    <>
      {data.map((post) => (
        <RevCard key={post.id} {...post} />
      ))}
    </>
  );
}
