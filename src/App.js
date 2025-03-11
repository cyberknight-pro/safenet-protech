import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeLoggedIn from "./pages/HomeLoggedIn"; // Import the new file
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Subscription from "./pages/Subscription";
import Donations from "./pages/Donations";
import PasswordChecker from "./pages/PasswordChecker";
import HaramFilter from "./pages/HaramFilter";
import PasswordManager from "./pages/PasswordManager";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile"; // Import Profile page

<Route path="/profile" element={<Profile />} />


const App = () => {
  // Simulated authentication check
  const isLoggedIn = true; // Change to true to test the logged-in page

  return (
    <Router>
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
    </Router>
  );
};

export default App;
