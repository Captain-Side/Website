import React, { useState, useRef } from "react";
import "./Auth.css";
import { Footer } from "../../components/Footer.tsx";
import { Navbar } from "../../components/Navbar.jsx";
import { useAuth } from "../../utils/AuthContext.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [discordId, setDiscordId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { registerUser } = useAuth();
  const registerForm = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    // Perform basic validation
    if (
      !username ||
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!agreeToTerms) {
      setErrorMessage("Please agree to the terms and conditions.");
      return;
    }

    // Use state variables directly
    const userInfo = {
      Username: username,
      Firstname: firstName,
      Lastname: lastName,
      email: email, // Use the state variable directly
      discordId: discordId,
      password1: password, // Changed to password
      password2: confirmPassword, // Changed to confirmPassword
    };

    registerUser(userInfo)
      .then(() => {
        setErrorMessage("Registration successful!");
        // Clear form fields upon successful registration
        setUsername("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setDiscordId("");
        setPassword("");
        setConfirmPassword("");
        setAgreeToTerms(false);
      })
      .catch((error) => {
        setErrorMessage(error.message); // Update error message based on server response
      });
  };

  return (
    <>
      <Navbar />
      <div className="auth-login-container">
        <h1 className="auth-login-title">Register</h1>
        <form
          ref={registerForm}
          onSubmit={handleRegister}
          className="auth-login-form"
        >
          <div className="auth-input-field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-field">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-field">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-field">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter you email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-field">
            <label htmlFor="discordId">Discord id:</label>
            <input
              type="text"
              id="discordId"
              placeholder="Enter your discord id"
              value={discordId}
              onChange={(e) => setDiscordId(e.target.value)}
            />
          </div>
          <div className="auth-input-field">
            <label htmlFor="password1">Password:</label>
            <input
              type="password"
              id="password1"
              placeholder="Enter 8 digit password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-field">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Enter 8 digit password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="custom-auth-input-field">
            <input
              type="checkbox"
              id="agreeToTerms"
              className="custom-checkbox"
              value={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            />
            <label htmlFor="agreeToTerms" className="custom-label">
              I agree to the terms and conditions.
            </label>
          </div>

          {errorMessage && <p className="auth-error-message">{errorMessage}</p>}
          <button type="submit" className="auth-login-button">
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
