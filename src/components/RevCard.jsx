// import { useState } from "react";
import { Link } from "react-router-dom";

export default function RevCard({
  user_pic,
  user_url,
  user_name,
  date_str,
  mal_url,
  rev_title,
  rev_text,
  rev_tag,
  pic_url,
  mal_id,
}) {
  // PASTE INTO PROMPT
  // how would i make a function for the button with the
  // classname add-btn that adds the clicked anime to MyList.jsx

  const handleAddToMyList = (animeId) => {
    // Here, you'll need to implement the logic to add the anime to MyList.jsx
    // For now, let's just console.log the anime ID
    console.log(animeId);
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
            <button
              className="add-btn"
              onClick={() => handleAddToMyList(mal_id)}
            >
              <i className="fas fa-plus"></i>Add to My List
            </button>
          </div>
        </div>
        <img src={pic_url} />
      </div>
    </div>
  );
}
