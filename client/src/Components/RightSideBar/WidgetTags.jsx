import React from "react";
import "./RightSideBar.css";

const WidgetTags = () => {
  const widgetTags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];
  return (
    <div className="tags-widget">
      <h4 className="tags-heading">Watched tags</h4>
      <div className="tags-container">
        {widgetTags.map((eachTag) => (
          <p key={eachTag}>{eachTag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
