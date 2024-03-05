import React, { useState, useRef } from "react";
import { Footer } from "../../components/Footer.tsx";
import { Navbar } from "../../components/Navbar.jsx";
import { useAuth } from "../../utils/AuthContext.js";
import "../../styles/Login.css";

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
      <div className="login-container">
        <h1 className="login-title">Forgot Password</h1>
        <form
          ref={forgetPassFormRef}
          onSubmit={handleSubmit}
          className="login-form"
        >
          <div className="input-field">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading} // Disable input field when loading
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Submitting..." : "Reset Password"}{" "}
            {/* Display appropriate text based on loading state */}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
