import { Link } from "react-router-dom";

export default function PopCard({
  title,
  score,
  rank,
  aired_on,
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
          <strong>Score:</strong> {score}
        </p>
        <p>
          <strong>Rank:</strong> {rank}
        </p>
        <p>
          <strong>Aired On:</strong> {aired_on}
        </p>
      </div>
    </div>
  );
}
