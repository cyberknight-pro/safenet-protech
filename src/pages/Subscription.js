import React, { useState, useEffect } from "react";
import "../styles/Subscription.css";

const Subscription = () => {
  useEffect(() => {
    console.log("Subscription page loaded");
  }, []);

  const [plan, setPlan] = useState("monthly");

  const plans = [
    { name: "Standard", price: { monthly: 500, yearly: 5000 } },
    { name: "Premium", price: { monthly: 700, yearly: 7000 } },
    { name: "Family", price: { monthly: 2000, yearly: 20000 } },
    { name: "Ultimate", price: { monthly: 1500, yearly: 15000 } },
  ];

  return (
    <div className="subscription-container">
      <h2 className="subscription-title">Choose Your Plan</h2>
      <div className="toggle-buttons">
        <button
          className={`toggle-btn ${plan === "monthly" ? "active" : ""}`}
          onClick={() => setPlan("monthly")}
        >
          Monthly
        </button>
        <button
          className={`toggle-btn ${plan === "yearly" ? "active" : ""}`}
          onClick={() => setPlan("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="plans-container">
        {plans.map((item, index) => (
          <div key={index} className="plan-card">
            <h3 className="plan-name">{item.name}</h3>
            <p className="plan-price">₦{item.price[plan]}</p>
            <button className="subscribe-btn">Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
