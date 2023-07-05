import React, { useState } from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match");
      return;
    }
    // TODO: Handle password change API call
    alert("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <div className="container">
      <div className="sub-container-profile">
        <div className="password-card">
          <h2>Change Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="confirmNewPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(event) => setConfirmNewPassword(event.target.value)}
                required
              />
              {error && <p className="error-message">{error}</p>}
            </div>
            <button type="submit" className="change-password">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
