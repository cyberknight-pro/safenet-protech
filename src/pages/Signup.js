import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from '../api/api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Auth.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const response = await registerUser({ username, email, password });
      if (response.success) {
        toast.success("Account created successfully!");
      } else {
        toast.error(response.message || "Signup failed, try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error occurred during signup.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up for SafeNet ProTect</h2>
      <form onSubmit={handleSignup}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Signup;
