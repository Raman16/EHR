import React from "react";
import Webcamera from "./Webcamera.js";

class Hideingwebcam extends React.Component {
  constructor() {
    super();
    this.state = {
      showReply: false
    };
  }
  onClick(e) {
    // e.preventDefault();
    this.setState({ showReply: !this.state.showReply });
  }
  render() {
    return (
      <div>

        <a onClick={this.onClick.bind(this)} href="#">clickphoto</a>
        {this.state.showReply && <Webcamera />}
      </div>
    );
  }
}

export default Hideingwebcam;
