import React from "react";
import AdminMenu from "./AdminMenu";
import { Protect } from "@clerk/clerk-react";

const AdminDashboard = () => {
  return (
    <>
    <Protect
      role="org:admin"
      fallback={<p>You do not have the permissions to create an invoice.</p>}
    >
      <AdminMenu />
      </Protect>
    </>
  );
};

export default AdminDashboard;
