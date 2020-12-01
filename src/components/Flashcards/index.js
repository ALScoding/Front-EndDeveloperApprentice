import React, { Component } from 'react'
import '../../css/Flash-index.css'
import Card from '../Card/Card'
import CardButton from '../CardButton/CardButton'
import 'firebase/database'
import { withFirebase } from '../Firebase/context'
import { withRouter } from 'react-router-dom'

class FlashcardPage extends Component {
  constructor (props) {
    super(props)

    // this.app = firebase.initializeApp(config)
    // this.database = this.Firebase.database()
    //   .ref()
    //   .child('cards')
    this.currPosition = this.currPosition.bind(this)
    this.prevCard = this.prevCard.bind(this)
    this.randCard = this.randCard.bind(this)
    this.nextCard = this.nextCard.bind(this)
    this.flipCard = this.flipCard.bind(this)
    this.shuffleCards = this.shuffleCards.bind(this)
    this.showAnswer = this.showAnswer.bind(this)

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
    console.log(this.props)
    let cards
    await this.props.firebase.callData().then(response => {
      console.log(response)
      cards = response
      // currentCards.push({
      //   id: snap.key,
      //   frontside: snap.val().frontside,
      //   backside: snap.val().backside,
      //   answer: snap.val().answer
      // })
    })
    const currentCards = this.state.cards
    this.setState({
      cards: cards,
      currentCard: this.getRandomCard(currentCards)
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
    // method originally called updateCard()
    const currentCards = this.state.cards
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
    this.resetFlag()
  }

  prevCard () {
    // added method
    const currentCards = this.state.cards
    let { id } = this.state.currentCard
    id = id <= 0 ? 70 : --id
    this.setState({
      cards: currentCards,
      currentCard: currentCards[id]
    })
    this.resetFlag()
    this.currPosition(id)
  }

  nextCard () {
    // added method
    const currentCards = this.state.cards
    let { id } = this.state.currentCard
    id = id >= 70 ? 0 : ++id
    this.setState({
      cards: currentCards,
      currentCard: currentCards[id]
    })
    this.resetFlag()
    this.currPosition(id)
  }

  resetFlag () {
    // added method
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
    // added method
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
            prevCard={this.prevCard}
            randCard={this.randCard}
            nextCard={this.nextCard}
            flipCard={this.flipCard}
            showAnswer={this.showAnswer}
            shuffleCards={this.shuffleCards}
            isHidden={this.state.answer.isHidden}
          />
        </div>
      </div>
    )
  }
}

//export default FlashcardPage
const Flashcards = withRouter(withFirebase(FlashcardPage))

export default FlashcardPage

export { Flashcards }
