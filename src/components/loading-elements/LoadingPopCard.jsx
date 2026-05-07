import LoadingAnimation from "./LoadingAnimation";

export default function LoadingPopCard() {
  return (
    <div className="load-pop-series-bg">
      <div className="load-pop-series-container">
        <div className="load-pop-series-img"></div>
        <div className="pop-series-info">
          <h3>Loading Series ...</h3>

          <div>
            <p>
              <strong>Rank:</strong>
            </p>
            <p>
              <strong>Score:</strong>
            </p>
            <p>
              <strong>Aired On:</strong>
            </p>
            <p className="series-type">
              <strong>Series Type:</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
