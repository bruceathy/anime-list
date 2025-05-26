import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import RevCard from "./RevCard";

const url =
  "https://myanimelist.p.rapidapi.com/v2/anime/reviews?p=1&spoilers=false&preliminary=true&include_tags=recommended&exclude_tags=creative%2Cnot_recommended";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
    "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  },
};

const fetchAnimeRev = async () => {
  const response = await fetch(url, options);
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
    <section>
      <h3 className="mid-title">Anime Reviews</h3>
      {data.map((review) => (
        <RevCard key={post.id}  user_pic={}
  user_url={}
  user_name={}
  date_str={}
  mal_url={}
  rev_title={}
  rev_text={}
  rev_tag={}
  pic_url={} />
      ))}
    </section>
  );
}
