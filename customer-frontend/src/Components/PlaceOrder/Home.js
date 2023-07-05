import React from "react";
import "./Home.css";
import Header from "../Header";
import Order from "./Order";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 105"}/>
      <div className="C">
        <Order />
      </div>
    </div>
  );
};

export default Home;
