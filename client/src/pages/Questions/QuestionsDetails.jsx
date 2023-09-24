import React from "react";
import { useParams, Link } from "react-router-dom";
import upvote from "../../assests/sort-up.svg";
import downvote from "../../assests/sort-down.svg";

import Avatar from "../../Components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";

import "./Questions.css";

const QuestionDetails = () => {
  const { id } = useParams();

  const questionsList = [
    {
      _id: "1",
      upVotes: 4,
      downVotes: 2,
      noOfAnswers: 3,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "1 sep",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "cristina",
          answeredOn: "10 sep",
          userId: 1,
        },
      ],
    },
    {
      _id: "2",
      upVotes: 4,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "cristina",
          answeredOn: "10 sep",
          userId: 2,
        },
      ],
    },
    {
      _id: "3",
      upVotes: 4,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "cristina",
          answeredOn: "10 sep",
          userId: 3,
        },
      ],
    },
    {
      _id: "4",
      upVotes: 4,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "cristina",
          answeredOn: "10 sep",
          userId: 4,
        },
      ],
    },
    {
      _id: "5",
      upVotes: 4,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "cristina",
          answeredOn: "10 sep",
          userId: 5,
        },
      ],
    },
    {
      _id: "6",
      upVotes: 4,
      downVotes: 2,
      questionTitle: "what is function?",
      questionBody: "it meant to be",
      questionTags: ["js", "react"],
      userPosted: "grey",
      askedOn: "2min ago",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "cristina",
          answeredOn: "10 sep",
          userId: 6,
        },
      ],
    },
  ];
  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                      />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img
                        src={downvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          {" "}
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p>Asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer key={question._id} question={question} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>Browse other Question tagged</p>
                  {question.questionTags.map((tag) => (
                    <Link to="/Tags" key={tag} className="ans-tags">
                      {" "}
                      {tag}{" "}
                    </Link>
                  ))}{" "}
                  or
                  <Link
                    to="/AskQuestion"
                    style={{ textDecoration: "none", color: "#009dff" }}
                  >
                    {" "}
                    ask your own question.
                  </Link>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
