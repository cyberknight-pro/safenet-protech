import React, { useState } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    plan: "Premium",
    profilePic: "https://via.placeholder.com/150",
  });

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>
      <div className="profile-card">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Subscription: {user.plan}</p>
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
