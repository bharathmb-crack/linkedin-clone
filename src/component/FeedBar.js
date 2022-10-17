import CreateIcon from "@mui/icons-material/Create";
import React from "react";
import "./FeedBar.css";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";

const FeedBar = () => {
  return (
    <div className="feedBar">
      <div className="feedBar__inputContainer">
        <div className="feedBar__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">send</button>
          </form>
        </div>
        <div className="feedBar__options">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      <div className="feedBar__post">
        <Post
          name="Bharath Byahatti"
          description="Frontend Enthusist"
          message="WOW this actually worked"
        />
      </div>
    </div>
  );
};

export default FeedBar;
