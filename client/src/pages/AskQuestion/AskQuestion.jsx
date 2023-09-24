import React from "react";
import "./AskQuestion.css";
const AskQuestion = () => {
  return (
    <div className="ask-question-container">
      <div className="ask-question-card">
        <h1>Ask a public question</h1>
        <form>
          <div className="ask-ques-form-container">
            <label htmlFor="ask-question-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                // onChange={(e) => {
                //   setQuestionTitle(e.target.value);
                // }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                // onChange={(e) => {
                //   setQuestionBody(e.target.value);
                // }}
                cols="30"
                rows="10"
                // onKeyPress={handleEnter}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                // onChange={(e) => {
                //   setQuestionTags(e.target.value.split(" "));
                // }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Reivew your question"
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
