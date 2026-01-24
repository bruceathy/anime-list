import { Link } from "react-router-dom";

export default function LogInNote() {
  return (
    <div className="login-note">
      <h2>Log in to save your favorite anime and manga</h2>
      <Link to="/login" className="login-note-link">
        Login / Sign Up
      </Link>
    </div>
  );
}
