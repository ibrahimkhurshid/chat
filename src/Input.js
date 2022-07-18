import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const { type, placeholder, handleOnClick } = props;
  const [msgText, setMsgText] = useState(null);

  return (
    <div className="msg-input-container">
      <span>
        <input
          className="msg-input"
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            setMsgText(e.target.value);
          }}
        ></input>
        <button className="send-btn" onClick={() => handleOnClick(msgText)}>
          Send
        </button>
      </span>
    </div>
  );
};

export default Input;
