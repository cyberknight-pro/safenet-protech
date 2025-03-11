import React, { useState } from "react";
import zxcvbn from "zxcvbn"; // Password strength library
import "../styles/PasswordChecker.css";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(zxcvbn(newPassword).score);
  };

  const strengthLabels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
  const strengthColors = ["#ff4d4d", "#ff914d", "#ffd700", "#77dd77", "#4caf50"];

  return (
    <div className="password-checker-container">
      <h2>Password Strength Checker</h2>
      <input 
        type="password" 
        placeholder="Enter your password" 
        value={password} 
        onChange={handleChange} 
      />
      <div className="strength-meter" style={{ background: strengthColors[strength] }}>
        {password && <span>{strengthLabels[strength]}</span>}
      </div>
    </div>
  );
};

export default PasswordChecker;
