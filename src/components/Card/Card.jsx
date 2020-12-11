import React from "react";
import "../../sass/Card.scss";
import ReactCardFlip from "react-card-flip";

const Card = (props) => (
  <div className='card-container'>
    <div className='card'>
      <ReactCardFlip isFlipped={props.isFlipped} flipDirection='horizontal'>
        <div className='front'>
          <h3>Frontside:</h3>
          <div className='bothsides'>{props.frontside}</div>
          <div
            className='answer'
            style={{ display: props.isHidden ? "none" : "block" }}
          >
            {props.answer}
          </div>
        </div>
        <div className='front back'>
          <h3>Backside:</h3>
          <div className='bothsides'>{props.backside}</div>
          <div
            className='answer'
            style={{ display: props.isHidden ? "none" : "block" }}
          >
            {props.answer}
          </div>
        </div>
      </ReactCardFlip>
    </div>
  </div>
);

export default Card;