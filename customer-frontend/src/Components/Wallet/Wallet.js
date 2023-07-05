import React from "react";
import "./Wallet.css";
import { FaWallet } from "react-icons/fa";

const Wallet = () => {
  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <button className="navbar-icon">
          <FaWallet />
        </button>
        <div className="wallet-row-1">
          <div className="wallet-amount">₹0</div>
          <div className="wallet-balance">Your Wallet Balance</div>
        </div>
      </div>
      <div className="wallet-options">
        <div className="wallet-option">
          <div className="option-title">Refund</div>
          <div className="option-amount">₹0</div>
        </div>
        <div className="wallet-option">
          <div className="option-title">Cashback</div>
          <div className="option-amount">₹0</div>
        </div>
        <div className="wallet-option">
          <div className="option-title">Bonus</div>
          <div className="option-amount">₹0</div>
        </div>
      </div>
      <hr/>
      <div className="transaction-page">
        <h2>No Transactions Found</h2>
      </div>
    </div>
  );
};

export default Wallet;
