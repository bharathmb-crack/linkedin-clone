import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@mui/material";

const HeaderOptions = ({ Icon, avatar, title }) => {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar src={avatar} className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
