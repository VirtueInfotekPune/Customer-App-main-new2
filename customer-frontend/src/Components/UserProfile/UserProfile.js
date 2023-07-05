import React from 'react'
import { FaUser, FaCog, FaGlobe, FaSignOutAlt } from "react-icons/fa";
import { MdWifiPassword } from 'react-icons/md';
import "./UserProfile.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="container">
      <div className="sub-container-profile">

        <div className="profile-card">
          <div className="profile-info">
            <div className="profile-image">
              <FaUser size={80} />
            </div>
            <h2 className="profile-name">user profile</h2>
          </div>
          <div className="profile-options">
            <Link to="/updateprofile" className="profile-option">
              <span>
                <FaCog />
              </span>
              <span>Update Profile</span>
            </Link>
            <Link to="/orders" className="profile-option">
            <span>
                <FaGlobe />
              </span>
              <span>My orders</span>
            </Link>
            <Link to="/changepassword" className="profile-option">
            <span>
                <MdWifiPassword />
              </span>
              <span>Change Password</span>
            </Link>
            <Link to="/login" className="profile-option">
            <span>
                <FaSignOutAlt />
              </span>
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile