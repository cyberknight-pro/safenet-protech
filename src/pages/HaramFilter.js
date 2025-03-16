import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/HaramFilter.css";

const HaramFilter = () => {
  const [settings, setSettings] = useState({
    filterLevel: "moderate",
  });

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Filter settings saved successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="haram-filter-container">
        <h2>AI Haram Filter Settings</h2>
        <form onSubmit={handleSave}>
          <label>
            Filter Level:
            <select
              value={settings.filterLevel}
              onChange={(e) =>
                setSettings({ ...settings, filterLevel: e.target.value })
              }
            >
              <option value="strict">Strict</option>
              <option value="moderate">Moderate</option>
              <option value="custom">Custom</option>
            </select>
          </label>
          <button type="submit">Save Settings</button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default HaramFilter;
