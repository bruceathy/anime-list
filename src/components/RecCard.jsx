import { Link } from "react-router-dom";
import AddBtn from "./AddBtn";
// A POPUP WITH MORE INFO ABOUT THE SERIES SHOULD APPEAR WHEN CLICKING ON THE SERIES TITLE

export default function RecCard({
  author_url,
  author_name,
  liked_url,
  liked_title,
  liked_pic,
  rec_url,
  rec_title,
  rec_pic,
  desc,
}) {
  return (
    <div className="rec">
      <h3>
        Anime recommendation from:{" "}
        <strong>
          <Link className="link-style" to={author_url} target="_blank">
            {author_name}
          </Link>
        </strong>
      </h3>
      <div className="author-choices">
        <div className="choices">
          <div className="choice-text">
            <p>
              If you liked:{" "}
              <strong>
                <Link className="link-style" to={liked_url} target="_blank">
                  {liked_title}
                </Link>
              </strong>
            </p>
            <AddBtn />
          </div>
          <img src={liked_pic} alt={liked_title} />
        </div>
        <div className="choices">
          <div className="choice-text">
            <p>
              Then you should watch:{" "}
              <strong>
                <Link className="link-style" to={rec_url} target="_blank">
                  {rec_title}
                </Link>
              </strong>
            </p>
            <AddBtn />
          </div>
          <img src={rec_pic} alt={rec_title} />
        </div>
      </div>
      <p className="rec-desc">{desc}</p>
    </div>
  );
}
