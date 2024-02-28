import React, { useState, useRef } from "react";
import "../../styles/Register.css";
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
      <div className="login-container">
        <h1 className="login-title">Register</h1>
        <form
          ref={registerForm}
          onSubmit={handleRegister}
          className="login-form"
        >
          <div className="input-field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="discordId">Discord id:</label>
            <input
              type="text"
              id="discordId"
              placeholder="optional"
              value={discordId}
              onChange={(e) => setDiscordId(e.target.value)}
            />
          </div>
          <div className="input-field">
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
          <div className="input-field">
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
          <div className="input-field">
            <input
              type="checkbox"
              id="agreeToTerms"
              value={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            />
            <label htmlFor="agreeToTerms">
              I agree to the terms and conditions.
            </label>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
