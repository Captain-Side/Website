import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AdminRoute = () => {
  const user = false; // Replace with your authentication logic

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
