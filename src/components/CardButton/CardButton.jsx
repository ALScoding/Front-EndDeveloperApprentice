import React, { Component } from 'react';
import './CardButton.css';

class CardButton extends Component{
    constructor(props){
        super(props);
    }

    prevCard(){
        this.props.prevCard();
    }

    randCard(){
        this.props.randCard();
    }

    nextCard(){
        this.props.nextCard();
    }

    showAnswer(){
        this.props.showAnswer();
    }

    shuffleCards(){
        this.props.shuffleCards();
    }

    flipCard(){
        this.props.flipCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={this.props.prevCard}>Prev Card</button>
                <button className="btn" onClick={this.props.randCard}>Random Card</button>
                <button className="btn" onClick={this.props.nextCard}>Next Card</button>
                <button className="btn" onClick={this.props.flipCard}>Flip Card</button>
                <button className="btn" onClick={this.props.shuffleCards}>Shuffle</button>
                <button className="btn" onClick={this.props.showAnswer}>{this.props.isHidden? 'Show' : 'Hide'} Answer</button>
            </div>
        )
    }
}

export default CardButton