import AddBtn from "./AddBtn";
// A POPUP WITH MORE INFO ABOUT THE SERIES SHOULD APPEAR WHEN CLICKING ON THE SERIES TITLE

export default function TopCard({ title, picture_url, rank, score }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${picture_url})` }}>
      <div className="info">
        <h3>{title}</h3>

        <div className="description">
          <p>
            <strong>Rank:</strong> {rank}
          </p>
          <p>
            <strong>Score:</strong> {score}
          </p>
        </div>

        <AddBtn />
      </div>
    </div>
  );
}
