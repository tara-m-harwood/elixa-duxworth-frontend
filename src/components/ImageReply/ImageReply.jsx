import React, { Component } from 'react'

import "./ImageReply.css";

export default class ImageReply extends Component {

  constructor(props) {
    super(props);
    this.state = {imageSource: ""};
  }

  componentDidMount(){
    if(this.state.imageSource===''){
      this.setState({imageSource: this.props.imageSource})     
    }
  }

  render() {

    return (
      <div>
          return
          <div className="image-reply-container">
            <img src={this.state.imageSource} alt="unknown"></img>
          </div>;
      </div>
    )
  }
}
