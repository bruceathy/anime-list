import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import RecCard from "./RecCard";

const fetchMangaRec = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response wasn't ok");
  return response.json();
};

export default function MangaRecSec() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["mangaRec"],
    queryFn: fetchMangaRec,
  });

  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>"Error: {error.message}"</p>;
  return (
    <section>
      <h3 className="mid-title">Manga Recommendations</h3>
      {data.map((post) => (
        <RecCard key={post.id} {...post} />
      ))}
    </section>
  );
}
