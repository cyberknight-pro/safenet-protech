import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Ensure this is linked correctly

const Home = () => {
  return (
    <div className="home-container">
      {/* Top Navigation Bar */}
      {/* <nav className="navbar">
        <div className="site-name">SafeNet ProTect</div>
      </nav> */}

      {/* Main Content */}
      <div className="content">
        <h1>Secure Your Digital World</h1>
        <p>Protect your online presence with top-notch cybersecurity solutions.</p>
        <button><Link to="/login" className="home-button">Get Started</Link></button>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} SafeNet ProTect. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
