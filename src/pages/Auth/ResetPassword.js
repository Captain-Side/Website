import React, { useState, useRef } from "react";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const { resetPass } = useAuth();
  const ResetPasswordFrom = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Passwords match, perform reset password action
      await resetPass(password, password);
      navigate("/login");
    } else {
      // Passwords do not match
      setPasswordMatch(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Reset Password</h1>
      <form
        ref={ResetPasswordFrom}
        onSubmit={handleSubmit}
        className="login-form"
      >
        <div className="input-field">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your new password"
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
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {!passwordMatch && (
          <p className="error-message">Passwords do not match.</p>
        )}
        <button type="submit" className="login-button">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
