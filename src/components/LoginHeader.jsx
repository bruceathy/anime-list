import { Link } from "react-router-dom";

export default function LoginHeader() {
  return (
    <nav className="navbar nav">
      <h2>
        <Link to="/">AnimeList</Link>
      </h2>
    </nav>
  );
}
