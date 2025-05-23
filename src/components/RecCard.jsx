export default function RecCard({ title, id, body }) {
  return (
    <div className="rec">
      <h3>
        Anime recommendation from:{" "}
        <strong>
          <a href="${rec.author.url}" target="_blank">
            {}
          </a>
        </strong>
      </h3>
      <div className="author-choices">
        <div className="choices">
          <div className="choice-text">
            <p>
              If you liked:{" "}
              <strong>
                <a href="${rec.liked.myanimelist_url}" target="_blank">
                  ${title}
                </a>
              </strong>
            </p>
            <button className="add-btn">
              <i className="fas fa-plus"></i>Add to My List
            </button>
          </div>
          <img src="${rec.liked.picture_url}" />
        </div>
        <div className="choices">
          <div className="choice-text">
            <p>
              Then you should watch:{" "}
              <strong>
                <a href="${rec.recommendation.myanimelist_url}" target="_blank">
                  ${id}
                </a>
              </strong>
            </p>
            <button className="add-btn">
              <i className="fas fa-plus"></i>Add to My List
            </button>
          </div>
          <img src="${rec.recommendation.picture_url}" />
        </div>
      </div>
      <p>${body}</p>
    </div>
  );
}
