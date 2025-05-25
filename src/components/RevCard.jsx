export default function RevCard({ title, id, body }) {
  return (
    <div className="review">
      <div className="user">
        <div className="user-info">
          <img src="${review.user.picture_url}" />
          <h3>
            <a href="${review.user.url}" target="_blank">
              ${title}
            </a>
          </h3>
        </div>
        <p>
          <strong>Posted:</strong> ${id}
        </p>
      </div>
      <div className="review-content">
        <div className="review-info">
          <h3>
            <a href="${review.object.mal_url}" target="_blank">
              ${id}
            </a>
          </h3>
          <p id="review-text">${body}</p>
          <p>
            <strong className="review-tag">${id}</strong>
          </p>
          <div className="options">
            <button className="read-more" id="read-more">
              <i className="fas fa-chevron-down"></i>Read More
            </button>
            <button className="add-btn">
              <i className="fas fa-plus"></i>Add to My List
            </button>
          </div>
        </div>
        <img src="${review.object.picture_url}" />
      </div>
    </div>
  );
}
