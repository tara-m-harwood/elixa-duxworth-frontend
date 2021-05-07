





import React from "react";

import "./ImageReply.css";

const ImageReply = (props) => {

  const imageSource = props.imageSource

  return  <div className="image-reply-container">
            <img src={imageSource}></img>
          </div>;
};

export default ImageReply;
