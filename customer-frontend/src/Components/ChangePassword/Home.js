import React from "react";
import "./Home.css";
import Header from "../Header";
import ChangePassword from "./ChangePassword";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 104"} />
      <div className="C">
        <ChangePassword />
      </div>
    </div>
  );
};

export default Home;
