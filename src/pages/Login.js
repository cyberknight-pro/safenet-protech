import React from "react";
import "../styles/Auth.css"; // Make sure this file exists

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login to SafeNet ProTect</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
};

export default Login;
