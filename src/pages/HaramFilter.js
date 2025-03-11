import React, { useState } from "react";
import "../styles/HaramFilter.css";

const HaramFilter = () => {
  const [enabled, setEnabled] = useState(true);
  const [customWords, setCustomWords] = useState("");

  return (
    <div className="haram-filter-container">
      <h2>AI Haram Filter</h2>
      <label className="switch">
        <span>Enable Filter</span>
        <input type="checkbox" checked={enabled} onChange={() => setEnabled(!enabled)} />
        <span className="slider"></span>
      </label>

      <textarea 
        placeholder="Add custom banned words (comma-separated)" 
        value={customWords} 
        onChange={(e) => setCustomWords(e.target.value)}
      />
      <button className="save-btn">Save</button>
    </div>
  );
};

export default HaramFilter;
