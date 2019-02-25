import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardImage from "../../images/userimg.jpg";

export default class Card extends Component {
  constructor() {
    super();

    this.state = {
      cardValue: "",
      style: {}
    };
    this.cardClick = this.cardClick.bind(this);
  }

  cardClick(e) {
    console.log(e.target.innerText);

    this.setState({
      cardValue: e.target.innerText + " Selected",
      style: { display: "none" }
    });
  }

  render() {
    return (
      <div>
        <Carousel style={this.state.style}>
          <Carousel.Item>
            <div className="card">
              <div className="card-container">
                <img src={CardImage} alt="Card " height="80px" width="80px" />
                <h4 onClick={this.cardClick}> Option 1</h4>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="card">
              <div className="card-container">
                <img src={CardImage} alt="Card " height="80px" width="80px" />
                <h4 onClick={this.cardClick}>Option 2</h4>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="card">
              <div className="card-container">
                <img src={CardImage} alt="Card " height="80px" width="80px" />
                <h4 onClick={this.cardClick}>Option 3</h4>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <div>{this.state.cardValue}</div>
      </div>
    );
  }
}
