import React, { useState } from "react";
import "./Auth.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer.tsx";
import { useSignIn} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignInWithEmailAndPassword = async (e) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: email,
        password,
        redirectUrl: '/'
      });
 
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }
      else {
        /*Investigate why the sign-in hasn't completed */
        console.log(result);
      }
    } catch (error) {
      // Handle login errors
      console.error("Login error:", error);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signIn.create({
        strategy: 'oauth_google',
        identifier: 'oauth_google'
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }
      else {
        /*Investigate why the sign-in hasn't completed */
        console.log(result);
      }
    } catch (error) {
      console.error("Google login error:", error);
      setErrorMessage("Failed to login with Google. Please try again.");
    }
  };

  const handleSignInWithDiscord = async () => {
    try {
      const result = await signIn.create({
        strategy: 'oauth_discord',
        redirectUrl: '/',
        identifier: 'oauth_discord'
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }
      else {
        /*Investigate why the sign-in hasn't completed */
        console.log(result);
      }
    } catch (error) {
      console.error("Discord login error:", error);
      setErrorMessage("Failed to login with Discord. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-login-container">
        <h1 className="auth-login-title">Login</h1>
        <form onSubmit={handleSignInWithEmailAndPassword} className="auth-login-form">
          <div className="auth-input-field">
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
          <div className="auth-input-field">
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
          {errorMessage && (
            <p className="auth-error-message">{errorMessage}</p>
          )}
          <button type="submit" className="auth-login-button">
            Login
          </button>
          <button onClick={handleSignInWithGoogle} className="auth-login-button auth-login-button-google">
            Login with Google
          </button>
          <button onClick={handleSignInWithDiscord} className="auth-login-button auth-login-button-discord">
            Login with Discord
          </button>
          <p className="auth-register-link">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
