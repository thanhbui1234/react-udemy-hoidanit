import "./Admin.scss";
import { useState } from "react";
import SidebarNav from "./SideBarNav";
import { Outlet } from "react-router-dom";
const Admin = (props) => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SidebarNav></SidebarNav>
      </div>
      <div className="admin-content">
        <div className="admin-header"></div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Admin;
