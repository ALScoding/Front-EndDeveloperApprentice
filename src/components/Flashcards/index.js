import React, { Component } from 'react'
import '../../sass/Flash-index.scss'
import Card from '../Card/Card'
import CardButton from '../CardButton/CardButton'
import 'firebase/database'
import { withFirebase } from '../Firebase/context'

class FlashcardPage extends Component {
  constructor (props) {
    super(props)

    this.currPosition = this.currPosition.bind(this)
    this.traverseCard = this.traverseCard.bind(this)
    this.flipCard = this.flipCard.bind(this)
    this.showAnswer = this.showAnswer.bind(this)
    this.randCard = this.randCard.bind(this)
    this.shuffleCards = this.shuffleCards.bind(this)

    this.state = {
      cards: [],
      currentCard: {},
      isFlipped: false,
      answer: { isHidden: true },
      position: 0,
      length: 0
    }
  }

  async componentWillMount () {
    await this.props.firebase.callData().then(snap => {
      console.log(snap)
      this.setState({
        cards: snap,
        currentCard: this.getRandomCard(snap),
        length: snap.length
      })
    })
  }

  currPosition (currid) {
    const currentCards = this.state.cards
    let len = currentCards.length
    this.setState({
      position: ++currid,
      length: len
    })
  }

  getRandomCard (currentCards) {
    var randomIndex = Math.floor(Math.random() * currentCards.length)
    var card = currentCards[randomIndex]
    if (card === this.state.currentCard) {
      this.getRandomCard(currentCards)
    }
    this.currPosition(randomIndex)
    return card
  }

  randCard () {
    const currentCards = this.state.cards
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
    this.resetFlag()
  }

  traverseCard (direction) {
    const currentCards = this.state.cards
    let len = currentCards.length
    let { id } = this.state.currentCard
    let cardArrIndex = currentCards.findIndex(card => card.id === id)
    //console.log('before', len, cardArrIndex)
    if (direction === 'L') {
      cardArrIndex = cardArrIndex <= 0 ? len - 1 : --cardArrIndex
    } else if (direction === 'R') {
      cardArrIndex = cardArrIndex >= len - 1 ? 0 : ++cardArrIndex
    }
    //console.log('after', len, cardArrIndex)
    this.setState({
      cards: currentCards,
      currentCard: currentCards[cardArrIndex]
    })
    this.resetFlag()
    this.currPosition(cardArrIndex)
  }

  resetFlag () {
    this.setState({
      answer: { isHidden: true }
    })
  }

  flipCard (e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  shuffleCards () {
    const currentCards = this.state.cards
    for (var i = 0; i < currentCards.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (currentCards.length - i))
      var temp = currentCards[j]
      currentCards[j] = currentCards[i]
      currentCards[i] = temp
    }
    currentCards.forEach((currCard, index) => {
      currCard.id = index
    })
    this.setState({
      cards: currentCards
    })
    let { id } = this.state.currentCard
    this.currPosition(id)

    console.log(currentCards)
  }

  showAnswer () {
    this.setState({
      answer: { isHidden: !this.state.answer.isHidden }
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='cardRow'>
          <Card
            frontside={this.state.currentCard.frontside}
            backside={this.state.currentCard.backside}
            answer={this.state.currentCard.answer}
            isFlipped={this.state.isFlipped}
            isHidden={this.state.answer.isHidden}
          />
        </div>
        <div className='posRow'>
          {this.state.position} of {this.state.length}
        </div>
        <div className='buttonRow'>
          <CardButton
            traverseCard={this.traverseCard}
            flipCard={this.flipCard}
            showAnswer={this.showAnswer}
            randCard={this.randCard}
            shuffleCards={this.shuffleCards}
            isHidden={this.state.answer.isHidden}
          />
        </div>
      </div>
    )
  }
}

export default withFirebase(FlashcardPage)
