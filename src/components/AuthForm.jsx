import { Form, Link } from "react-router-dom";
// authentication form with jwt
export default function AuthForm() {
  return (
    <div className="signup">
      <h1>Signup</h1>
      <Form id="form">
        <div className="form-control">
          <label>Email: </label>
          <input id="email" className="signup-input" type="text" required />
        </div>

        <div className="form-control">
          <label>Password: </label>
          <input
            id="password"
            className="signup-input"
            type="password"
            required
          />
        </div>

        <div className="form-control">
          <label>Confirm Password: </label>
          <input
            id="confirm-password"
            className="signup-input"
            type="password"
            required
          />
        </div>

        <button type="submit" className="signup-btn">
          Create Account
        </button>

        <p className="signup-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </Form>
    </div>
  );
}
