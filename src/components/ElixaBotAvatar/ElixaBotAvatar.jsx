import React from "react";

import elixaIcon from "./elixa_avatar.png"

const ElixaBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <img src={elixaIcon} className="react-chatbot-kit-chat-bot-avatar-icon" alt="friendly woman"/>
      </div>
    </div>
  );
};

export default ElixaBotAvatar;
