import React from "react";

import "./InitialChoices.css";

const InitialChoices = (props) => {
  const options = [
    {
      text: "I need help with my code",
      handler: props.actionProvider.handleStartTroubleshooter,
      id: 1,
    },
    { text: "I just want to chat", 
      handler: props.actionProvider.handleStartChatting, 
      id: 2 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="initial-choices-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="initial-choices-container">{optionsMarkup}</div>;
};

export default InitialChoices;
