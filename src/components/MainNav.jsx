import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <nav className="navbar">
      <h2>
        <NavLink to="/">AnimeList</NavLink>
      </h2>
    </nav>
  );
}
