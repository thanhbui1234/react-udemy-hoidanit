import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import User from "./components/User";
import Admin from "./components/Admin/Admin.jsx";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Admin/content/Dashboard.jsx";
import ManageUser from "./components/Admin/content/ManageUser.jsx";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/manageUser" element={<ManageUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
