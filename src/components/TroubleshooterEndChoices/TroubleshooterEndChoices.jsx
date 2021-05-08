import React from "react";

import "./InitialChoices.css";

const TroubleshooterEndChoices = (props) => {
  const options = [
    {
      text: "Yes, that helped!",
      handler: props.actionProvider.handleEndTroubleshooter,
      id: 1,
    },
    { text: "No, I just want to chat", 
      handler: props.actionProvider.handleStartChatting, 
      id: 2 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="troubleshooter-end-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="troubleshooter-end-container">{optionsMarkup}</div>;
};

export default TroubleshooterEndChoices;
