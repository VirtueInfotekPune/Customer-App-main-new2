import React from "react";
import "./Home.css";
import Header from "../Header";
import Login from "./Login";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={"CUS 101"} />
      <div className="C">
        <Login />
      </div>
    </div>
  );
};

export default Home;
