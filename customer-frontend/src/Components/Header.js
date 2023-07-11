import React from "react";
import "./Header.css";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBell,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar(props) {
  const currentDate = new Date().toLocaleDateString();
  return (
    <>
      <div className="header-container">
        <div className="header-left">
          <form className="header-search">
            <input type="text" placeholder="Search" />
            <button type="submit" className="search-btn">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="header-right">
          <div className="header-location">
            <FaMapMarkerAlt size={25} />
            <h4>Nagpur, Maharashtra</h4>
          </div>
          <Link to="/notification" className="header-icon">
            <FaBell />
          </Link>
          <Link to="/cart" className="header-icon">
            <FaShoppingCart />
          </Link>
          {/* number of count of cart  */}
            {/* <div className="count">
              <h1 className="zero">0</h1>
            </div> */}
          <Link to="/wallet" className="header-icon">
            <FaWallet />
          </Link>
        </div>
      </div>

      <div className="sub-nav">
        <div className="date">
          <p>Date: {currentDate}</p>
        </div>
        <div className="screen-num">{props.screenname}</div>
      </div>
    </>
  );
}

export default Navbar;
