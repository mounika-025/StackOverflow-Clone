import React from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import QuestionDetails from "./QuestionsDetails";

const DisplayQuestion = () => {
  return (
    <div className="home-page-container">
      <LeftSideBar />
      <div className="home-page-card">
        <QuestionDetails />
        <RightSideBar />
      </div>
    </div>
  );
};

export default DisplayQuestion;
