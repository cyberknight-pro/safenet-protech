import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from '../api/api';  // Assuming you create this API call
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchDashboardData(token);
    }
  }, []);

  const fetchDashboardData = async (token) => {
    try {
      const response = await fetchUserProfile(token);
      setUserData(response.data);
    } catch (error) {
      console.error("Failed to load dashboard", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
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

      <main className="main-content">
        <header className="top-bar">
          <h2>Dashboard Overview</h2>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </header>

        {/* Show loader or data */}
        {!userData ? (
          <p>Loading your dashboard...</p>
        ) : (
          <>
            <section className="dashboard-stats">
              <div className="stat-card">
                <h3>Active Subscription</h3>
                <p>
                  {userData.subscription ? (
                    <strong>{userData.subscription}</strong>
                  ) : (
                    <strong>Not Subscribed ❌</strong>
                  )}
                </p>
              </div>
              <div className="stat-card">
                <h3>Total Donations</h3>
                <p>₦{userData.donations || 0}</p>
              </div>
              <div className="stat-card">
                <h3>Security Status</h3>
                <p>{userData.isProtected ? "100% Protected ✅" : "Not Secure ❌"}</p>
              </div>
            </section>

            <section className="recent-activity">
              <h3>Recent Activity</h3>
              <ul>
                {userData.activities.length > 0 ? (
                  userData.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))
                ) : (
                  <li>No recent activities yet.</li>
                )}
              </ul>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
