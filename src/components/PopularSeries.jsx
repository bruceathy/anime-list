import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../components/LoadingAnimation";
import PopAniCard from "./PopAniCard";

// use tanstack query to fetch from API, tutorial video is below
// https://youtu.be/e74rB-14-m8?si=Wi9-q7OJ-cOnXf10&t=641

// const url = "https://myanimelist.p.rapidapi.com/anime/top/all";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
//     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
//   },
// };

const fetchPopularAnime = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

console.log(fetchPopularAnime());

export default function PopularSeries() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular-anime"],
    queryFn: fetchPopularAnime,
  });

  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>"Error: {error.message}"</p>;

  return (
    <section className="popular-series">
      <div className="popular">
        <h2>Most Popular Anime</h2>
        <div className="carousel" id="popular-anime">
          {data?.map((post) => (
            <PopAniCard key={post.id} {...post} />
          ))}
        </div>
      </div>
      <div className="popular">
        <h2>Most Popular Manga</h2>
        <div className="carousel" id="popular-manga">
          {/* popular manga */}
        </div>
      </div>
    </section>
  );
}
