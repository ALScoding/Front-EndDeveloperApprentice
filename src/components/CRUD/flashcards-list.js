import React, { Component } from 'react'
import FlashcardDataService from '../services/flashcard.service'

import Flashcard from '.'

// list works as expected
export default class FlashcardsList extends Component {
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

  componentDidMount () {
    FlashcardDataService.getAll().on('value', this.onDataChange)
  }

  componentWillUnmount () {
    FlashcardDataService.getAll().off('value', this.onDataChange)
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

  refreshList () {
    this.setState({
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
    FlashcardDataService.deleteAll()
      .then(() => {
        this.refreshList()
      })
      .catch(e => {
        console.log(e)
      })
  }

  render () {
    const { cards, currentFlashcard, currentIndex } = this.state
    // console.log(cards)
    return (
      <div className='list row'>
        <div className='col-md-6'>
          <h4>Flashcards List</h4>

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
                  # {flashcard.id + 1}
                </li>
              ))}
          </ul>

          <button
            className='m-3 btn btn-sm btn-danger'
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
              <br />
              <p>Please click on a Flashcard...</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
