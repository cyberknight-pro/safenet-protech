import React, { useState } from "react";
import "../styles/Settings.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="settings-section">
        <h3>Account Settings</h3>
        <label>
          <span>Username:</span>
          <input type="text" placeholder="Your Username" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" placeholder="Your Email" />
        </label>
        <button className="save-btn">Save Changes</button>
      </div>

      <div className="settings-section">
        <h3>Preferences</h3>
        <label className="switch">
          <span>Dark Mode</span>
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Settings;
