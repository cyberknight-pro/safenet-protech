import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeLoggedIn.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Top Navigation Bar */}
      <header className="top-nav">
        <div className="logo">Safenet ProTect</div>
        <nav className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/subscription">Subscription</Link>
          <Link to="/donations">Donations</Link>
          <Link to="/settings">Settings</Link>
        </nav>
        <button className="logout-btn">Logout</button>
      </header>

      {/* Sidebar and Main Content Wrapper */}
      <div className="content-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/subscription">Subscription</Link></li>
              <li><Link to="/donations">Donations</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/password-manager">Password Manager</Link></li>
              <li><Link to="/password-strength">Password Strength Checker</Link></li>
              <li><Link to="/ai-haram-filter">AI Haram Filter</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <section className="dashboard">
            <h1>Welcome Back, User</h1>
            <p>Manage your subscriptions, security, and account settings.</p>

            <div className="stats">
              <div className="stat-card">
                <h3>Subscription</h3>
                <p>Active Plan: <strong>Premium</strong></p>
              </div>
              <div className="stat-card">
                <h3>Donations</h3>
                <p>Total: ₦50,000</p>
              </div>
              <div className="stat-card">
                <h3>Security Status</h3>
                <p>100% Protected ✅</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h3>Quick Actions</h3>
              <Link to="/subscription" className="quick-btn">Upgrade Plan</Link>
              <Link to="/donations" className="quick-btn">Make a Donation</Link>
              <Link to="/password-manager" className="quick-btn">Open Password Manager</Link>
              <Link to="/password-strength" className="quick-btn">Check Password Strength</Link>
              <Link to="/ai-haram-filter" className="quick-btn">Use AI Haram Filter</Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
