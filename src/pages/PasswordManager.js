import React, { useState } from "react";
import { toast } from "react-toastify";
import "../styles/PasswordManager.css";

const PasswordManager = () => {
  const [accounts, setAccounts] = useState([]);
  const [site, setSite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addAccount = () => {
    if (site && username && password) {
      setAccounts([...accounts, { site, username, password }]);
      setSite("");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="password-manager-container">
      <h2>Password Manager</h2>
      <input type="text" placeholder="Website" value={site} onChange={(e) => setSite(e.target.value)} />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={addAccount}>Save</button>

      <h3>Saved Accounts</h3>
      <ul>
        {accounts.map((acc, index) => (
          <li key={index}>
            <strong>{acc.site}</strong> - {acc.username} - {acc.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordManager;
