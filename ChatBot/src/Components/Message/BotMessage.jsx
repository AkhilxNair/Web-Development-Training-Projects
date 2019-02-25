import React, { Component } from "react";
import BotImg from "../../images/botimg.png";
import Button from "./Button";
import Card from "./Card";

export default class BotMessage extends Component {
  constructor() {
    super();
    this.state = {
      botMessage: ""
      // buttonValue : "",
      // cardValue : ""
    };
  }

  componentDidMount() {
    if (this.props.message.toUpperCase() === "BUTTON") {
      this.setState({
        botMessage: 1
      });
    } else if (this.props.message.toUpperCase() === "CARD") {
      this.setState({
        botMessage: 2
      });
    } else {
      this.setState({
        botMessage: 3
      });
    }
  }

  render() {
    let message = null;

    switch (this.state.botMessage) {
      case 1:
        message = <Button />;
        break;
      case 2:
        message = <Card />;
        break;
      default:
        message = this.props.message;
    }
    return (
      <div className="message">
        <div className="chat right">{message}</div>

        <div className="profile-image">
          <img src={BotImg} alt="" />
        </div>
      </div>
    );
  }
}
