import "./App.scss";
import Admin from "./components/Admin/Admin";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <div className="main-container">
          <div className="sidenav-container"></div>
          <div className="app-container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
