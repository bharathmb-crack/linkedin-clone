import { Avatar } from "@mui/material";
import React from "react";
import "./SideBar.css";

const SideBar = () => {
  const recentItems = (topic) => (
    <div className="sideBar__recentItems">
      <span className="sideBar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <img
          src="https://images.unsplash.com/photo-1593869476474-a014c8ca925e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2130&q=80"
          alt=""
        />
        <Avatar
          className="sideBar__avatar"
          src="https://i.ibb.co/QjrtXCj/Avatar.png"
        />
        <h3>Bharath Byahatti</h3>
        <h4>bharathbyahatti8050@gmail.com</h4>
      </div>
      <div className="sideBar__stats">
        <div className="sideBar__stat">
          <p>Who viewed you</p>
          <p className="sideBar_statNumber">1,500</p>
        </div>
        <div className="sideBar__stat">
          <p>Views on post</p>
          <p className="sideBar_statNumber">2,500</p>
        </div>
      </div>
      <div className="sideBar__bottom">
        <p>Recent</p>
        {recentItems("React.js")}
        {recentItems("JavaScript")}
        {recentItems("Programing")}
        {recentItems("Developer")}
        {recentItems("Hello")}
      </div>
    </div>
  );
};

export default SideBar;
