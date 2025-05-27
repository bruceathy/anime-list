import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import RecCard from "./RecCard";

const url = "https://myanimelist.p.rapidapi.com/v2/manga/recommendations?p=1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
    "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  },
};

const fetchMangaRec = async () => {
  const response = await fetch(url, options);
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
  console.log(data);
  return (
    <section>
      <h3 className="mid-title">Manga Recommendations</h3>
      {data.recommendations.map((manga) => (
        <RecCard
          key={manga.id}
          author_url={manga.author.url}
          author_name={manga.author.name}
          liked_title={manga.liked.title}
          liked_url={manga.liked.myanimelist_url}
          liked_pic={manga.liked.picture_url}
          rec_url={manga.recommendation.myanimelist_url}
          rec_title={manga.recommendation.title}
          rec_pic={manga.recommendation.picture_url}
          desc={manga.description}
        />
      ))}
    </section>
  );
}
