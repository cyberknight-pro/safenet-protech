import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "../styles/Donations.css";

const Donations = () => {
  useEffect(() => {
    console.log("Donations page loaded");
  }, []);

  const [amount, setAmount] = useState("");
  const donateAmounts = [1000, 5000, 10000];

  return (
    <div className="donation-container">
      <h2 className="donation-title">Support Us with a Donation</h2>
      <div className="donation-buttons">
        {donateAmounts.map((amt, index) => (
          <button
            key={index}
            className="donate-btn"
            onClick={() => setAmount(amt)}
          >
            ₦{amt}
          </button>
        ))}
      </div>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="donation-input"
      />
      <button className="donate-now-btn">Donate Now</button>
    </div>
  );
};

export default Donations;
