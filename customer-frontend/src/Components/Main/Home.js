import React from "react";
import "./Home.css";
import Header from "../Header";
import Card from "./Card";
import SecondMain from "./SecondMain";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={"CUS 101"} />
      <div className="C">
        <Card />
      </div>
      <div className="second">
        <SecondMain />
      </div>
    </div>
  );
};

export default Home;
