import React from "react";
import "./Home.css";
import Header from "../Header";
import UserProfile from "./UserProfile"

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 102" } />
      <div className="C">
        <UserProfile />
      </div>
    </div>
  );
};

export default Home;
