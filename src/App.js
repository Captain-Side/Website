import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage.js";
import AdminRoute from "./utils/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import Login from "./pages/Auth/Login.js";
import Register from "./pages/Auth/Register.js";
import ForgotPassword from "./pages/Auth/ForgetPassword.js";
import Slideshow from "./pages/Admin/Slideshow.js";
import GamePass from "./pages/Admin/Gamepass.js";
import Events from "./pages/Admin/Events.js";
import GameTesting from "./pages/Admin/GameTesting.js";
import Roster from "./pages/Admin/Roster.js";
import { AuthProvider } from "./utils/AuthContext.js";
import ResetPassword from "./pages/Auth/ResetPassword.js";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login/cs/resetpassword" element={<ResetPassword />} />

          <Route path="/admin/" element={<AdminRoute />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="dashboard/edit-slideshow" element={<Slideshow />} />
            <Route path="dashboard/edit-gamepass" element={<GamePass />} />
            <Route path="dashboard/edit-events" element={<Events />} />
            <Route
              path="dashboard/edit-gametesting"
              element={<GameTesting />}
            />
            <Route path="dashboard/edit-roster" element={<Roster />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
