import React, { useState, useEffect } from "react";
import AdminMenu from "./AdminMenu";
import { useSession } from "@clerk/clerk-react";
import { checkUserRole } from "../../utils/clerkUser";
import NotFoundPage from "../NotFoundPage";
import Navbar from "../../components/Navbar";

const AdminDashboard = () => {
  const { session, isLoading } = useSession();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      setUserRole(checkUserRole(session));
    }
  }, [session, isLoading]);

  if (isLoading) {
    // Display loading indicator while session is loading
    return <div>Loading...</div>;
  }

  if (userRole !== "org:admin") {
    return <NotFoundPage />;
  }

  return (
    <>
      <Navbar />
      <AdminMenu />
    </>
  );
};

export default AdminDashboard;
