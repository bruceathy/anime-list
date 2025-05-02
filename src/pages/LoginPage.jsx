import MainNav from "../components/MainNav";

import "../css/signup.css";

export default function LoginPage() {
  return (
    <div className="login-bg">
      <MainNav />
      <div className="login-container">
        <div className="hero">
          <h1>Signup and become an AnimeList Member!</h1>
          <i>Easiest way to discover new anime and manga to enjoy!</i>
        </div>
        <div className="signup">
          <h1>Signup</h1>
          <form id="form">
            <div className="form-control">
              <label>Email: </label>
              <input id="email" className="signup-input" type="text" required />
              <small>Error message</small>
            </div>

            <div className="form-control">
              <label>Password: </label>
              <input
                id="password"
                className="signup-input"
                type="password"
                required
              />
              <small>Error message</small>
            </div>

            <div className="form-control">
              <label>Confirm Password: </label>
              <input
                id="confirm-password"
                className="signup-input"
                type="password"
                required
              />
              <small>Error message</small>
            </div>

            <button type="submit" className="signup-btn">
              Create Account
            </button>

            <p className="signup-text">
              Already have an account?{" "}
              <a id="login" href="#">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
