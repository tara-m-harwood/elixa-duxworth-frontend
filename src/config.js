import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import InitialChoices from "./components/InitialChoices/InitialChoices";
import ElixaBotAvatar from "./components/ElixaBotAvatar/ElixaBotAvatar";
import UserAvatar from "./components/UserAvatar/UserAvatar";

const config = {
    botName: "Elixa Duxworth",

    initialMessages: [
        createChatBotMessage(
            "Hi, I'm here to help. How can I support you today?", 
            {widget: "initialChoices",}
        ),
    ],
    customStyles: {
        botMessageBox: { backgroundColor: "#ED4AAE", },
        chatButton: { backgroundColor: "#ED4AAE", },
    },
    customComponents: {
        botAvatar: (props) => <ElixaBotAvatar {...props} />,
        userAvatar: (props) => <UserAvatar {...props} />,
    },
  widgets: [
    {
      widgetName: "initialChoices",
      widgetFunc: (props) => <InitialChoices {...props} />,
    },
  ],
};


export default config;