import React from "react";
import "./App.css";
import FeedBar from "./component/FeedBar";
import Header from "./component/Header";
import SideBar from "./component/SideBar";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main Bar */}
      <div className="app__body">
        {/* SideBar */}
        <SideBar />
        {/* FeedBar */}
        <FeedBar />
        {/* <FeedBar /> */}
      </div>
    </div>
  );
}

export default App;
