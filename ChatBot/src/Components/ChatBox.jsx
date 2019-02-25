import React, { Component } from "react";
import UserMessage from "./Message/UserMessage";
import BotMessage from "./Message/BotMessage";

export default class ChatBox extends Component {
  constructor() {
    super();
    this.state = {
      chatHistory: [],
      userCurrentMessage: "",
      botCurrentMessage: ""
    };

    this.enterKeyPressed = this.enterKeyPressed.bind(this);
  }

  enterKeyPressed(e) {
    if (e.key === "Enter") {
      this.setState(
        {
          userCurrentMessage: <UserMessage message={e.target.value} />,
          botCurrentMessage: <BotMessage message={e.target.value} />
        },
        function() {
          this.setState({
            chatHistory: [
              ...this.state.chatHistory,
              this.state.userCurrentMessage,
              this.state.botCurrentMessage
            ]
          });
        }
      );
      e.target.value = "";

      let chatView = document.getElementsByClassName("chat-view");
      chatView.scrollTop = chatView.scrollHeight;
    }
  }

  render() {
    return (
      <div
        className={`chatbox ${this.props.buttonActive ? "" : "chatbox-hidden"}`}
      >
        <div className="chatbox-container">
          <div className="chat-view" onScroll={this.scrollToBottom}>
            {this.state.chatHistory}
          </div>

          <input
            type="text"
            placeholder="Start a Converstation"
            className="chat-textbox"
            onKeyPress={this.enterKeyPressed}
          />
        </div>
      </div>
    );
  }
}
