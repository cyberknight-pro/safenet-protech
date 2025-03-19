import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Subscription from "./pages/Subscription";
import Donations from "./pages/Donations";
import PasswordChecker from "./pages/PasswordChecker";
import HaramFilter from "./pages/HaramFilter";
import PasswordManager from "./pages/PasswordManager";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token'); // Check if token exists

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };



  return (
    <>
      {/* Example logout button (you can move this to Navbar or Dashboard) */}
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            padding: "8px 16px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            zIndex: 999
          }}
        >
          Logout
        </button>
      )}

      <Routes>
        <Route path="/" element={isLoggedIn ? <HomeLoggedIn /> : <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/password-strength" element={<PasswordChecker />} />
        <Route path="/ai-haram-filter" element={<HaramFilter />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/password-manager" element={<PasswordManager />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
