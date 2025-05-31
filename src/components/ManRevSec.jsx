import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import RevCard from "./RevCard";

const url =
  "https://myanimelist.p.rapidapi.com/v2/manga/reviews?p=1&spoilers=false&preliminary=true&include_tags=recommended&exclude_tags=creative%2Cnot_recommended";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
    "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  },
};

const fetchMangaRev = async () => {
  const response = await fetch(url, options);
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
          rev_text_full={review.text.full}
          rev_tag={review.tag}
          pic_url={review.object.picture_url}
          onClick={() => console.log(review.text.full)}
        />
      ))}
    </section>
  );
}
