import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = ({ name, description, message, photourl }) => {
  return (
    <div className="post">
      <div className="post__container">
        <div className="post__profile">
          <Avatar />
          <div className="post__nameInterest">
            <h2>{name}</h2>
            <h4>{description}</h4>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>

        <div className="post__button">
          <InputOption Icon={ThumbUpOffAltIcon} color="grey" title="Like" />
          <InputOption Icon={ChatIcon} color="grey" title="Comment" />
          <InputOption Icon={ShareIcon} color="grey" title="Share" />
          <InputOption Icon={SendOutlinedIcon} color="grey" title="Send" />
        </div>
      </div>
    </div>
  );
};
export default Post;
