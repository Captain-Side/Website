import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import HomePage from "./pages/Homepage.js";
import AdminRoute from "./utils/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import Login from "./pages/Auth/Login.js";
import Register from "./pages/Auth/Register.js";
import Slideshow from "./pages/Admin/Slideshow.js";
import GamePass from "./pages/Admin/Gamepass.js";
import Events from "./pages/Admin/Events.js";
import GameTesting from "./pages/Admin/GameTesting.js";
import Roster from "./pages/Admin/Roster.js";
import ResetPassword from "./pages/Auth/ResetPassword.js";
import LatestData from "./components/LatestData.jsx";
import gameData from "./components/GameData.jsx";
import passcardData from "./components/cards/PassCardData.jsx";
import Contact from "./pages/ContactUs/Contact.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/cs/resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/admin/*" element={<AdminRoute />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route
            path="dashboard/edit-slideshow"
            element={<Slideshow images={LatestData.items} />}
          />
          <Route
            path="dashboard/edit-gamepass"
            element={<GamePass gamepasses={passcardData.games} />}
          />
          <Route
            path="dashboard/edit-events"
            element={<Events images={gameData.games} />}
          />
          <Route
            path="dashboard/edit-gametesting"
            element={<GameTesting images={gameData.games} />}
          />
          <Route path="dashboard/edit-roster" element={<Roster />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
