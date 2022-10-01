import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      {" "}
      <div className="header__left">
        <img
          src="https://www.freeiconspng.com/uploads/linkedin-logo-3.png"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" className="" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Message" />
        <HeaderOptions Icon={NotificationIcon} title="Notification" />
        <HeaderOptions
          avatar="https://i.ibb.co/QjrtXCj/Avatar.png"
          title="me"
        />
      </div>
    </div>
  );
};

export default Header;
