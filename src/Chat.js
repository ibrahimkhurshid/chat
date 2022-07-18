import React, { useState } from "react";
import Input from "./Input";
import MessageList from "./MessageList";
import "./Chat.css";

const Chat = (props) => {
  const [msgList, setMsgList] = useState([
    "Hi there!!!",
    "Done!!",
    "javascript",
    "Python",
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
    "No",
    "We can also style lists with colors, to make them look a little more interesting.    Anything added to the <ol> or <ul> tag, affects the entire list, while properties added to the <li> tag will affect the individual list items:",
    "backend programming",
    "closures",
  ]);
  const { appName } = props;
  const handleOnClick = (e) => {
    setMsgList([...msgList, e]);
  };

  return (
    <div className="container">
      <div className="app-name">{appName}</div>
      <MessageList messages={msgList} />
      <Input
        type="text"
        placeholder="type message..."
        handleOnClick={handleOnClick}
      />
    </div>
  );
};

export default Chat;
