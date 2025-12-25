import { useState } from "react";
import { Link } from "react-router-dom";
import AddBtn from "./AddBtn";
// A POPUP WITH MORE INFO ABOUT THE SERIES SHOULD APPEAR WHEN CLICKING ON THE SERIES TITLE

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
}) {
  const [toggleSeeMore, setToggleSeeMore] = useState(false);

  const toggleSeeMoreHandler = () => {
    setToggleSeeMore(!toggleSeeMore);
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
          <p className="review-text">
            {toggleSeeMore
              ? rev_text.slice(0, 900)
              : rev_text.slice(0, 100) + " ..."}
          </p>
          <button onClick={toggleSeeMoreHandler}>
            {toggleSeeMore ? "See Less" : "See More"}
          </button>{" "}
          <p>
            <strong className="review-tag">{rev_tag}</strong>
          </p>
          <div className="options">
            <AddBtn />
          </div>
        </div>
        <img src={pic_url} />
      </div>
    </div>
  );
}
