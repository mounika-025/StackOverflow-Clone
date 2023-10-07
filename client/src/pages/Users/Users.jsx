import React from "react";
import { useLocation } from "react-router-dom";
import LeftSidebar from "../../Components/LeftSideBar/LeftSideBar";
import UsersList from "./UsersList";
import "./Users.css";
const Users = () => {
  const location = useLocation();

  return (
    <div className="home-page-container">
      <LeftSidebar />
      <div className="home-page-card" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
