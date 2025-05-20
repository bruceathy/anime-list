export default function RecCard({ title, id, userId, body }) {
  return (
    <div class="rec">
      <h3>
        Anime recommendation from:{" "}
        <strong>
          <a href="${rec.author.url}" target="_blank">
            {}
          </a>
        </strong>
      </h3>
      <div class="author-choices">
        <div class="choices">
          <div class="choice-text">
            <p>
              If you liked:{" "}
              <strong>
                <a href="${rec.liked.myanimelist_url}" target="_blank">
                  ${}
                </a>
              </strong>
            </p>
            <button class="add-btn">
              <i class="fas fa-plus"></i>Add to My List
            </button>
          </div>
          <img src="${rec.liked.picture_url}" />
        </div>
        <div class="choices">
          <div class="choice-text">
            <p>
              Then you should watch:{" "}
              <strong>
                <a href="${rec.recommendation.myanimelist_url}" target="_blank">
                  ${}
                </a>
              </strong>
            </p>
            <button class="add-btn">
              <i class="fas fa-plus"></i>Add to My List
            </button>
          </div>
          <img src="${rec.recommendation.picture_url}" />
        </div>
      </div>
      <p>${}</p>
    </div>
  );
}
