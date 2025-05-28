import { Link, NavLink } from "react-router-dom";

export default function LoginHeader() {
  return (
    <NavLink className="navbar nav">
      <h2>
        <Link to="/">AnimeList</Link>
      </h2>
    </NavLink>
  );
}
