import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
  const user = true; // Replace with your authentication logic

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
