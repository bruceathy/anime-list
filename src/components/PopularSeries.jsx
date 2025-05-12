export default function PopularSeries() {
  // use tanstack query to fetch from API, tutorial video is below
  // https://youtu.be/e74rB-14-m8?si=LfITnv-nhdUT4716
  // const url = "https://myanimelist.p.rapidapi.com/anime/top/all";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
  //     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  //   },
  // };

  // const response = fetch(url, options);
  // const result = response.json();
  // console.log(result);

  return (
    <section className="popular-series">
      <div className="popular">
        <h2>Most Popular Anime</h2>
        <div className="carousel" id="popular-anime">
          {/* popular anime */}
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
