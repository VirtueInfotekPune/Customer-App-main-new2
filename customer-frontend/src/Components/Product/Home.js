import React from "react";
import "./Home.css";
import Header from "../Header";
import Order from "./SubCategory"

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 102" } />
      <div className="C">
        <Order />
      </div>
    </div>
  );
};

export default Home;
