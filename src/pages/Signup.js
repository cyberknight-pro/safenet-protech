import React from "react";
import "../styles/Auth.css"; // Make sure this file exists

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>Create Your Account</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Signup;
