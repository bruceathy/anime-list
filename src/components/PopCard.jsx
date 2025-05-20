export default function PopCard({ title, id, userId, body }) {
  return (
    <div className="card">
      <div className="info">
        <h3>
          <a href="${anime.myanimelist_url}" target="_blank">
            {title}
          </a>
        </h3>
        <p>
          <strong>Score:</strong> {id}
        </p>
        <p>
          <strong>Rank:</strong> {userId}
        </p>
        <p>
          <strong>Aired On:</strong> {body}
        </p>
      </div>
    </div>
  );
}
