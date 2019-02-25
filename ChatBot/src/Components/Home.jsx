import React, { Component } from "react";
import ChatButton from "./ChatButton";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="center-text">
          <h1>I'm a Chatbot</h1>
          <p>Click on the Bottom-Right Chat icon to begin conversation</p>
        </div>
        <ChatButton />
      </div>
    );
  }
}
