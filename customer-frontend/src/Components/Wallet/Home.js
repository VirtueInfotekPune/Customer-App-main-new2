import React from "react";
import "./Home.css";
import Header from "../Header";
import Wallet from "./Wallet";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 102" } />
      <div className="C">
        <Wallet />
      </div>
    </div>
  );
};

export default Home;
