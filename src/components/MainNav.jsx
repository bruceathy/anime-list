import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">AnimeList</Link>
      </h2>
      <ul className="nav-links">
        <li>
          <Link to="/login" className="login-link">
            Login / Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
