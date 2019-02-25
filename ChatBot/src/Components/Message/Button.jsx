import React, { Component } from "react";
// import BotMessage from "./BotMessage";

export default class Button extends Component {
  constructor() {
    super();

    this.state = {
      buttonValue: "",
      style: {}
    };

    this.buttonMsg = this.buttonMsg.bind(this);
  }

  buttonMsg(e) {
    this.setState({
      buttonValue: e.target.value + " Selected",
      style: { display: "none" }
    });
  }

  render() {
    return (
      <div>
        <button
          className="msg-button"
          onClick={this.buttonMsg}
          value="Option 1"
          style={this.state.style}
        >
          {" "}
          Option 1{" "}
        </button>
        <button
          className="msg-button"
          onClick={this.buttonMsg}
          value="Option 2"
          style={this.state.style}
        >
          {" "}
          Option 2
        </button>

        <div>{this.state.buttonValue}</div>
      </div>
    );
  }
}
