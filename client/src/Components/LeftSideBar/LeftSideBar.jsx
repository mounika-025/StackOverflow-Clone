import React from "react";
import "./LeftSideBar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assests/globe.svg";

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-nav-links" activeClass="active">
          <p>Home</p>
        </NavLink>
        <div className="sidebar-card">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="sidebar-nav-links"
            activeClass="active"
          >
            <img src={Globe} className="globe-img" alt="globe" />
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="sidebar-nav-links"
            activeClass="active"
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="sidebar-nav-links"
            activeClass="active"
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
