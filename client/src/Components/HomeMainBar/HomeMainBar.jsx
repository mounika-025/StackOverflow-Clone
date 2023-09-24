import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./HomeMainBar.css";
import QuestionsList from "./QuestionsList";
const HomeMainBar = () => {
  const location = useLocation();

  const user = 1;
  const navigate = useNavigate();

  const checkLogin = () => {
    if (user === null) {
      alert("Please login or sign up to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  // eslint-disable-next-line no-unused-vars
  const questionsList = [
    {
      id: 1,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
    },
    {
      id: 2,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
    },
    {
      id: 3,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
    },
    {
      id: 4,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
    },
    {
      id: 5,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
    },
    {
      id: 6,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
    },
  ];
  return (
    <div className="main-bar">
      <div className="main-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkLogin} className="ask-button">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length}questions</p>
            <QuestionsList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
