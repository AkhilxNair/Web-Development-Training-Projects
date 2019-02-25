import React, { Component } from "react";
import UserImg from "../../images/userimg.jpg";

export default class UserMessage extends Component {
  render() {
    return (
      <div className="message">
        <div className="profile-image">
          <img src={UserImg} alt="" />
        </div>
        <div className="chat left">{this.props.message}</div>
      </div>
    );
  }
}
