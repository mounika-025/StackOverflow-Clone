import React from "react";
import "../../App.css";
import HomeMainBar from "../../Components/HomeMainBar/HomeMainBar";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div className="home-page-container">
      <LeftSideBar />
      <div className="home-page-card">
        <HomeMainBar />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
