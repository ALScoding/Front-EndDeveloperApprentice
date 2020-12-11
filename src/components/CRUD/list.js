import React, { Component } from 'react'
import '../../sass/List.scss'
import Flashcard from '.'
import { withFirebase } from '../Firebase/context'
import { remove } from 'lodash'

export class FlashcardsList extends Component {
  constructor (props) {
    super(props)
    this.refreshList = this.refreshList.bind(this)
    this.setActiveFlashcard = this.setActiveFlashcard.bind(this)
    this.removeAllFlashcards = this.removeAllFlashcards.bind(this)
    this.onDataChange = this.onDataChange.bind(this)

    this.state = {
      cards: [],
      currentFlashcard: null,
      currentIndex: -1
    }
  }

  async componentDidMount () {
    let cards
    await this.props.firebase.callData().then(response => {
      cards = response
    })
    this.setState({ cards })
  }

  onDataChange (items) {
    let cards = []

    items.forEach(item => {
      let data = item.val()
      cards.push({
        id: data.id,
        frontside: data.frontside,
        backside: data.backside,
        answer: data.answer
      })
    })

    this.setState({
      cards: cards
    })
  }

  refreshList (empty = false, delCard) {
    let { cards } = this.state
    remove(cards, c => (!!c ? c.id == delCard : null))
    cards = empty ? [] : cards
    this.setState({
      cards,
      currentFlashcard: null,
      currentIndex: -1
    })
  }

  setActiveFlashcard (flashcard, index) {
    this.setState({
      currentFlashcard: flashcard,
      currentIndex: index
    })
  }

  removeAllFlashcards () {
    var r = window.confirm('Are you sure you want to remove all cards?')
    if (r === false) {
      return
    } else {
      this.props.firebase
        .deleteAll()
        .then(() => {
          this.refreshList(true)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }

  render () {
    const { cards, currentFlashcard, currentIndex } = this.state
    return (
      <div className='list row'>
        <div className='col-md-6'>
          <h3>Full Flashcards List:</h3>
          <div id='table-scroll'>
            <ul className='list-group'>
              {cards &&
                cards.map((flashcard, index) => (
                  <li
                    className={
                      'list-group-item ' +
                      (index === currentIndex ? 'active' : '')
                    }
                    onClick={() => this.setActiveFlashcard(flashcard, index)}
                    id={index}
                  >
                    Entry # {flashcard.id + 1}
                  </li>
                ))}
            </ul>
          </div>
          <button
            className='m-3 btn-lg btn-danger'
            onClick={this.removeAllFlashcards}
          >
            Remove All
          </button>
        </div>
        <div className='col-md-6'>
          {currentFlashcard ? (
            <Flashcard
              flashcard={currentFlashcard}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <h3>Please click on an Entry...</h3>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withFirebase(FlashcardsList)
