import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Safenet ProTect</h2>
        <nav>
          <ul>
            <li><a href="/dashboard" className="active">Dashboard</a></li>
            <li><a href="/subscription">Subscription</a></li>
            <li><a href="/donations">Donations</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <h2>Dashboard Overview</h2>
          <button className="logout-btn">Logout</button>
        </header>

        <section className="dashboard-stats">
          <div className="stat-card">
            <h3>Active Subscription</h3>
            <p><strong>Premium Plan</strong></p>
          </div>
          <div className="stat-card">
            <h3>Total Donations</h3>
            <p>₦50,000</p>
          </div>
          <div className="stat-card">
            <h3>Security Status</h3>
            <p>100% Protected ✅</p>
          </div>
        </section>

        <section className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>Upgraded to <strong>Premium</strong> - 2 days ago</li>
            <li>Donated ₦5,000 - 5 days ago</li>
            <li>Enabled Two-Factor Authentication - 1 week ago</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
