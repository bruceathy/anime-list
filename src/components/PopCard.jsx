import AddBtn from "./AddBtn";
import "../css/popular.css";

export default function PopSeries({
  title,
  picture_url,
  rank,
  score,
  aired_on,
  type,
}) {
  return (
    <div
      className="pop-series-bg"
      style={{
        backgroundImage: `url(${picture_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pop-series-container">
        <img src={picture_url} />
        <div className="pop-series-info">
          <h3>{title.length > 45 ? title.slice(0, 45) + " ..." : title}</h3>

          <div>
            <p>
              <strong>Rank:</strong> {rank}
            </p>
            <p>
              <strong>Score:</strong> {score}
            </p>
            <p>
              <strong>Aired On:</strong> {aired_on}
            </p>
            <p className="series-type">
              <strong>Series Type:</strong> {type}
            </p>
          </div>

          <AddBtn />
        </div>
      </div>
    </div>
  );
}
