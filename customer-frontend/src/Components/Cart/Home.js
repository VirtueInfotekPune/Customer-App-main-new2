import React from "react";
import "./Home.css";
import Header from "../Header";
import Cart from "./Cart";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 102" } />
      <div className="C">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
