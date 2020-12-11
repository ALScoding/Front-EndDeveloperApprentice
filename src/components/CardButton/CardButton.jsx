import React, { Component } from "react";
import "../../sass/Buttons.scss";

export class CardButton extends Component {
  constructor(props) {
    super(props);
  }

  traverseCard() {
    this.props.traverseCard();
  }

  randCard() {
    this.props.randCard();
  }

  showAnswer() {
    this.props.showAnswer();
  }

  shuffleCards() {
    this.props.shuffleCards();
  }

  flipCard() {
    this.props.flipCard();
  }

  render(props) {
    return (
      <div className='buttonContainer'>
        <button className='btn' onClick={this.props.showAnswer}>
          {this.props.isHidden ? "Show" : "Hide"} Answer
        </button>
        <button
          className='btn'
          onClick={() => {
            this.props.traverseCard("L");
          }}
        >
          Prev Card
        </button>
        <button className='btn' onClick={this.props.randCard}>
          Random Card
        </button>
        <button
          className='btn'
          onClick={() => {
            this.props.traverseCard("R");
          }}
        >
          Next Card
        </button>
        <button className='btn' onClick={this.props.flipCard}>
          Flip Card
        </button>
        <button className='btn' onClick={this.props.shuffleCards}>
          Shuffle
        </button>
      </div>
    );
  }
}

export default CardButton;