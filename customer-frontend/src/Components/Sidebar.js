import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import User from "../Assets/user.png";
import "./Sidebar.css";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`container2 ${showSidebar ? "show-sidebar" : ""}`}>
        <div className="sidebar-header">
          <img src={User} alt="User profile" className="user-profile" />
          <h3 className="user-name">User Name :</h3>
          <p className="user-email">user@email.com</p>
        </div>
        <ul className="sidebar-links">
          <li className={`${pathname === "/home" ? "active" : ""}`}>
            <Link to="/home">
              <FaHome size={25} />
              <span>Home</span>
            </Link>
          </li>
          <li className={`${pathname === "/orders" ? "active" : ""}`}>
            <Link to="/orders">
              <FaShoppingCart size={25} />
              <span>Orders</span>
            </Link>
          </li>
          <li className={`${pathname === "/profile" ? "active" : ""}`}>
            <Link to="/profile">
              <FaUser size={25} />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogout}>
              <FaSignOutAlt size={25} />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
