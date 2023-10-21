import "./Admin.scss";
import { useState } from "react";
import SidebarNav from "./SideBarNav";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};
export default Admin;
