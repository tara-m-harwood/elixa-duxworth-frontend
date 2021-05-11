import React from "react";

const ElixaSidebar = () => {
  return (
        <section id="left-sidebar">

          <div id="left-sidebar-elixa-container">
            <img id="left-sidebar-elixa-icon" src="elixa_avatar.png" alt="friendly woman" />
          </div>

          <div id="left-sidebar-button-container">
            <button id="left-sidebar-button-save">save session</button>
            <button id="left-sidebar-button-retrieve">retrieve session</button>
          </div>

        </section>
  );
};

export default ElixaSidebar;
