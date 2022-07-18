import React, { useState } from "react";
import "./MessageList.css";

const MessageList = (props) => {
  const { messages } = props;
  const msgList = messages.map((msg, id) => <li key={id}>{msg}</li>);

  return (
    <div className="msg-list-container">
      <ul>{msgList}</ul>
    </div>
  );
};

export default MessageList;
