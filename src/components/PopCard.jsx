export default function PopCard({ title, score, rank, aired_on, picture_url }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${picture_url})` }}>
      <div className="info">
        <h3>
          <a href="${anime.myanimelist_url}" target="_blank">
            {title}
          </a>
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
