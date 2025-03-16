import React from "react";
import { Route, Routes } from "react-router-dom";
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
  const isLoggedIn = true; // simulate auth

  return (
    <>
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

      {/* Toast container placed outside Routes */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
