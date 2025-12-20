import { Link } from "react-router-dom";
import AddBtn from "./AddBtn";

export default function PopCard({
  title,
  score,
  rank,
  picture_url,
  myanimelist_url,
}) {
  return (
    <div className="card" style={{ backgroundImage: `url(${picture_url})` }}>
      <div className="info">
        <h3>
          <Link to={myanimelist_url} target="_blank">
            {title}
          </Link>
        </h3>
        <p>
          <strong>Rank:</strong> {rank}
        </p>
        <p>
          <strong>Score:</strong> {score}
        </p>
        <AddBtn />
      </div>
    </div>
  );
}
