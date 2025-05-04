import LoginHeader from "../components/LoginHeader";
import AuthForm from "../components/AuthForm";

import "../css/signup.css";

export default function LoginPage() {
  return (
    <div className="login-bg">
      <LoginHeader />
      <div className="login-container">
        <div className="hero">
          <h1>Signup and become an AnimeList Member!</h1>
          <i>Easiest way to discover new anime and manga to enjoy!</i>
        </div>
        <AuthForm />
      </div>
    </div>
  );
}
