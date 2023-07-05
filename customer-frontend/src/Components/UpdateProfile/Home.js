import React from "react";
import "./Home.css";
import Header from "../Header";
import UpdateProfile from "./UpdateProfile";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 102" } />
      <div className="C">
        <UpdateProfile />
      </div>
    </div>
  );
};

export default Home;
