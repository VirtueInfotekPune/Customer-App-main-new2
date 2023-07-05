import React from "react";
import "./Home.css";
import Header from "../Header";
import Orders from "./Orders"

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 102" } />
      <div className="C">
        <Orders />
      </div>
    </div>
  );
};

export default Home;
