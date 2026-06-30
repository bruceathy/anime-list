import LoadingHomeCard from "./loading-elements/LoadingHomeCard";
export default function MangaResults() {
  return (
    <div className="results-container">
      <h3>Manga search results for: </h3>
      <div className="">
        <ul style={{ display: "flex" }}>
          <li>
            <LoadingHomeCard />
          </li>
          <li>
            <LoadingHomeCard />
          </li>
          <li>
            <LoadingHomeCard />
          </li>
          <li>
            <LoadingHomeCard />
          </li>
          <li>
            <LoadingHomeCard />
          </li>
          <li>
            <LoadingHomeCard />
          </li>
          <li>
            <LoadingHomeCard />
          </li>
          <li>
            <LoadingHomeCard />
          </li>
          <li>
            <LoadingHomeCard />
          </li>
          <li>
            <LoadingHomeCard />
          </li>
        </ul>
      </div>
    </div>
  );
}
