import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import RevCard from "./RevCard";
import { useParams } from "react-router-dom";

export default function AniRevSec() {
  const { page } = useParams(); // Get the page number from the URL parameter
  const pageNumber = parseInt(page) || 1; // Parse the page number as an integer, default to 1

  const url = `https://myanimelist.p.rapidapi.com/v2/anime/reviews?p=${pageNumber}&spoilers=false&preliminary=true&include_tags=recommended&exclude_tags=creative%2Cnot_recommended`;
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

  const { isLoading, data, error } = useQuery({
    queryKey: ["animeRev"],
    queryFn: fetchAnimeRev,
  });

  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>"Error: {error.message}"</p>;
  console.log(data);

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
    </section>
  );
}
