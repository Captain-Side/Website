import React, { useState, useRef } from "react";
import { Footer } from "../../components/Footer.tsx";
import { Navbar } from "../../components/Navbar.jsx";
import { useAuth } from "../../utils/AuthContext.js";
import "./Auth.css";
import LoadingPage from "../LoadingPage.jsx";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Changed from true to false

  const { recovery } = useAuth();
  const forgetPassFormRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    // Perform basic validation
    if (!email) {
      setErrorMessage("Please enter your email address.");
      setLoading(false); // Reset loading state
      return;
    }

    try {
      // Send password reset request to the backend
      await recovery(email);
      setErrorMessage("Password reset instructions sent to your email!");
    } catch (error) {
      setErrorMessage(
        "Failed to send password reset instructions. Please try again."
      );
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-login-container">
        <h1 className="auth-login-title">Forgot Password</h1>
        <form
          ref={forgetPassFormRef}
          onSubmit={handleSubmit}
          className="auth-login-form"
        >
          <div className="auth-input-field">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading} // Disable input field when loading
            />
          </div>
          {errorMessage && <p className="auth-error-message">{errorMessage}</p>}
          <button
            type="submit"
            className="auth-login-button"
            disabled={loading}
          >
            {loading ? LoadingPage : "Reset Password"}{" "}
            {/* Display appropriate text based on loading state */}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
