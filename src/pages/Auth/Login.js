import React, { useEffect, useState, useRef } from "react";
import "../../styles/Login.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer.tsx";
import { useAuth } from "../../utils/AuthContext.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Define setErrorMessage state

  const { user, loginUser } = useAuth();
  const navigate = useNavigate();
  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]); // Include dependencies in useEffect

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };

    loginUser(userInfo);
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form ref={loginForm} onSubmit={handleSubmit} className="login-form">
          <div className="input-field">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="forgot-password">
            <a href="/forgotpassword">Forgot Password?</a>
          </p>
          <p className="register-link">
            <a href="/register">Didn't have account? Register</a>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
