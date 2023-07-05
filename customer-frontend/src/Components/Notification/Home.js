import React from "react";
import "./Home.css";
import Header from "../Header";
import Notification from "./Notification";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 102" } />
      <div className="C">
        <Notification />
      </div>
    </div>
  );
};

export default Home;
