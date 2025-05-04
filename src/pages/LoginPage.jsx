import LoginHeader from "../components/LoginHeader";
import AuthForm from "../components/AuthForm";
import AuthHero from "../components/AuthHero";

import "../css/signup.css";

export default function LoginPage() {
  return (
    <div className="login-bg">
      <LoginHeader />
      <div className="login-container">
        <AuthHero />
        <AuthForm />
      </div>
    </div>
  );
}
