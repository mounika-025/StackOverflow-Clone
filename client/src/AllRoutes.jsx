import React from "react";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import Questions from "./pages/Questions/Questions";
import DisplayQuestion from "./pages/Questions/DisplayQuestions";
import { Routes, Route } from "react-router-dom";
import Tags from "./pages/Tags/Tags";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags />} />
    </Routes>
  );
};

export default AllRoutes;
