import React, {useEffect} from "react";
import AdminMenu from "./AdminMenu";
import { useUser, useSession } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { checkUserRole } from "../../utils/clerkUser";

const AdminDashboard = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);
  const user = useUser();
  const navigate = useNavigate();
  console.log(user.user.publicMetadata);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      // Redirect user to another page if they're not an admin
      navigate('/');
    }
  }, [user, navigate]);

  return user && user.role === 'admin' ? (
    <>
      <AdminMenu />
    </>
  ): null;
};

export default AdminDashboard;
