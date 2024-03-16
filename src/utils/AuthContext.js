//utils/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../config/AppwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import LoadingPage from "../pages/LoadingPage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const navigate = useNavigate();

  //login

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  //logout

  const logoutUser = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  //register

  const registerUser = async (userInfo) => {
    setLoading(true);

    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password1,
        userInfo.Username,
        userInfo.Firstname,
        userInfo.Lastname,
        userInfo.discordId
      );

      await account.createEmailSession(userInfo.email, userInfo.password1);
      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/");
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  //check user status

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {}
    setLoading(false);
  };

  //password recovery

  const recovery = async (email) => {
    setLoading(true);

    try {
      const promise = account.createRecovery(
        email,
        "http://localhost:3001/login/cs/resetpassword"
      );
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  //reset password

  const resetPass = async (password) => {
    setLoading(true);

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const secret = urlParams.get("secret");
      const userId = urlParams.get("userId");

      // Check if secret and userId are valid
      if (!secret || !userId) {
        throw new Error("Invalid or missing URL parameters.");
      }

      // Update the password using account.updateRecovery()
      const response = await account.updateRecovery(
        userId,
        secret,
        password,
        password
      );

      // Handle the response here, update UI, redirect user, etc.
    } catch (error) {
      console.error(error);
      // Handle errors, display error message, etc.
    } finally {
      setLoading(false); // Ensure setLoading(false) is called even if there's an error
    }
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    recovery,
    resetPass,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? LoadingPage : children}
    </AuthContext.Provider>
  );
};

//Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
