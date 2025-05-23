import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import RevCard from "./RevCard";

const fetchMangaRev = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response wasn't ok");
  return response.json();
};

export default function MangaRevSec() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["mangaRev"],
    queryFn: fetchMangaRev,
  });

  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>"Error: {error.message}"</p>;
  return (
    <section>
      <h3 className="mid-title">Manga Reviews</h3>
      {data.map((post) => (
        <RevCard key={post.id} {...post} />
      ))}
    </section>
  );
}
