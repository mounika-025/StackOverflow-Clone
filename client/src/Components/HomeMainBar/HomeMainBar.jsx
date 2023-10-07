import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./HomeMainBar.css";
import QuestionsList from "./QuestionsList";
const HomeMainBar = () => {
  const location = useLocation();

  const user = 1;
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);
  console.log(questionsList);

  const checkLogin = () => {
    if (user === null) {
      alert("Please login or sign up to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  // eslint-disable-next-line no-unused-vars
  // const questionsList = [
  //   {
  //     _id: 1,
  //     upVotes: 4,
  //     downVotes: 2,
  //     noOfAnswers: 3,
  //     questionTitle: "what is function?",
  //     questionBody: "it meant to be",
  //     questionTags: ["js", "react"],
  //     userPosted: "grey",
  //     askedOn: "1 sep",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "cristina",
  //         answeredOn: "10 sep",
  //         userId: 1,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 2,
  //     upVotes: 4,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "what is function?",
  //     questionBody: "it meant to be",
  //     questionTags: ["js", "react"],
  //     userPosted: "grey",
  //     askedOn: "2min ago",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "cristina",
  //         answeredOn: "10 sep",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 3,
  //     upVotes: 4,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "what is function?",
  //     questionBody: "it meant to be",
  //     questionTags: ["js", "react"],
  //     userPosted: "grey",
  //     askedOn: "2min ago",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "cristina",
  //         answeredOn: "10 sep",
  //         userId: 3,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 4,
  //     upVotes: 4,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "what is function?",
  //     questionBody: "it meant to be",
  //     questionTags: ["js", "react"],
  //     userPosted: "grey",
  //     askedOn: "2min ago",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "cristina",
  //         answeredOn: "10 sep",
  //         userId: 4,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 5,
  //     upVotes: 4,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "what is function?",
  //     questionBody: "it meant to be",
  //     questionTags: ["js", "react"],
  //     userPosted: "grey",
  //     askedOn: "2min ago",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "cristina",
  //         answeredOn: "10 sep",
  //         userId: 5,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 6,
  //     upVotes: 4,
  //     downVotes: 2,
  //     questionTitle: "what is function?",
  //     questionBody: "it meant to be",
  //     questionTags: ["js", "react"],
  //     userPosted: "grey",
  //     askedOn: "2min ago",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "cristina",
  //         answeredOn: "10 sep",
  //         userId: 6,
  //       },
  //     ],
  //   },
  // ];

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
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionsList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
