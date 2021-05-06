import React from "react";

import userIcon from "./coder_avatar.png"

const UserAvatar = () => {
  return (
    <div className="react-chatbot-kit-user-avatar">
      <div className="react-chatbot-kit-user-avatar-container">
        <img src={userIcon} className="react-chatbot-kit-user-avatar-icon" alt="hooded figure"/>
      </div>
    </div>
  );
};

export default UserAvatar;
