import React from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import ElixaSidebar from "./components/ElixaSidebar/ElixaSidebar";
import SaveModal from "./components/SaveModal/SaveModal"

  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

function App() {
  return (
    <div className="App">
      <ElixaSidebar />
      <SaveModal />
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          saveMessages={saveMessages}
          loadMessages={loadMessages}
        />
      </header>
    </div>
  );
}

export default App;
