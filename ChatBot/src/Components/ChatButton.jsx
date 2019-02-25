import React, { Component } from "react";
import ChatBox from "./ChatBox";

export default class ChatButton extends Component {
  constructor() {
    super();
    this.state = {
      buttonActive: false
    };

    this.onChatClick = this.onChatClick.bind(this);
  }

  onChatClick() {
    this.setState({
      buttonActive: !this.state.buttonActive
    });
  }
  render() {
    return (
      <div>
        <div className="chat-button">
          <button onClick={this.onChatClick}>
            <i
              className={
                this.state.buttonActive ? "fas fa-times" : "fas fa-comments"
              }
            />
          </button>
        </div>
        <ChatBox buttonActive={this.state.buttonActive} />
      </div>
    );
  }
}
