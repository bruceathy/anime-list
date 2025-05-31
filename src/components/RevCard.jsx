import { useState } from "react";
import { Link } from "react-router-dom";

export default function RevCard({
  user_pic,
  user_url,
  user_name,
  date_str,
  mal_url,
  rev_title,
  rev_text,
  // rev_text_full,
  rev_tag,
  pic_url,
}) {
  // TRY TO GET READ MORE BUTTON TO WORK

  const [saved, setSaved] = useState(false);
  const [savedList, setSavedList] = useState(
    JSON.parse(localStorage.getItem("savedMangaList")) || []
  );

  const handleSave = () => {
    // if (!saved) {
    //   const newSavedList = [...savedList, mangaSeries];
    //   setSavedList(newSavedList);
    //   localStorage.setItem("savedMangaList", JSON.stringify(newSavedList));
    //   setSaved(true);
    // }
    console.log("clicked");
  };

  return (
    <div className="review">
      <div className="user">
        <div className="user-info">
          <img src={user_pic} />
          <h3>
            <Link to={user_url} target="_blank">
              {user_name}
            </Link>
          </h3>
        </div>
        <p>
          <strong>Posted:</strong> {date_str}
        </p>
      </div>
      <div className="review-content">
        <div className="review-info">
          <h3>
            <Link to={mal_url} target="_blank">
              {rev_title}
            </Link>
          </h3>
          <p id="review-text">{rev_text}</p>
          <p>
            <strong className="review-tag">{rev_tag}</strong>
          </p>
          <div className="options">
            <button className="read-more" id="read-more">
              <i className="fas fa-chevron-down"></i>Read More
            </button>
            <button className="add-btn" onClick={handleSave}>
              <i className="fas fa-plus"></i>Add to My List
            </button>
          </div>
        </div>
        <img src={pic_url} />
      </div>
    </div>
  );
}
