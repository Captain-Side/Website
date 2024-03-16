import React from "react";
import { NavLink } from "react-router-dom";
import "./Admin.css";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/admin/dashboard/edit-slideshow"
            className="list-group-item list-group-item-action"
          >
            Edit Slideshow
          </NavLink>
          <NavLink
            to="/admin/dashboard/edit-gamepass"
            className="list-group-item list-group-item-action"
          >
            Edit GamePass
          </NavLink>
          <NavLink
            to="/admin/dashboard/edit-events"
            className="list-group-item list-group-item-action"
          >
            Edit events
          </NavLink>
          <NavLink
            to="/admin/dashboard/edit-gametesting"
            className="list-group-item list-group-item-action"
          >
            Edit GameTesting
          </NavLink>
          <NavLink
            to="/admin/dashboard/edit-roster"
            className="list-group-item list-group-item-action"
          >
            Edit Roster
          </NavLink>
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
