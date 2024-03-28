import React from "react";
import AdminMenu from "./AdminMenu";
import {useSession} from "@clerk/clerk-react";
import { checkUserRole } from "../../utils/clerkUser";
import NotFoundPage from "../NotFoundPage";
import { Navbar } from "../../components/Navbar";

const AdminDashboard = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);

  return (userRole!=="org:admin")
  ?(<>
  <NotFoundPage />
  </>
  )
  :(
    <>
    <Navbar />
      <AdminMenu />
    </>
  )
};

export default AdminDashboard;
