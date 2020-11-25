import React, { Component } from 'react'
import FlashcardDataService from '../services/flashcard.service'

//CRUD components
export default class Flashcard extends Component {
  constructor (props) {
    super(props)
    this.onChangeFrontside = this.onChangeFrontside.bind(this)
    this.onChangeBackside = this.onChangeBackside.bind(this)
    this.onChangeAnswer = this.onChangeAnswer.bind(this)
    this.updateFlashcard = this.updateFlashcard.bind(this)
    this.deleteFlashcard = this.deleteFlashcard.bind(this)

    this.state = {
      currentFlashcard: {
        id: '',
        frontside: '',
        backside: '',
        answer: ''
      },
      message: ''
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { flashcard } = nextProps
    console.log('prevState', prevState)
    console.log('nextProps', nextProps)
    // no previous state
    if (prevState.currentFlashcard === undefined) {
      return {
        currentFlashcard: flashcard,
        message: ''
      }
    }
    // previous state exist
    if (prevState.currentFlashcard.id !== flashcard.id) {
      return {
        currentFlashcard: flashcard,
        message: ''
      }
    }

    return prevState.currentFlashcard
  }

  componentDidMount () {
    this.setState({
      currentFlashcard: this.props.Flashcard
    })
  }

  onChangeFrontside (e) {
    const frontside = e.target.value

    this.setState(function (prevState) {
      return {
        currentFlashcard: {
          ...prevState.currentFlashcard,
          frontside: frontside
        }
      }
    })
  }

  onChangeBackside (e) {
    const backside = e.target.value

    this.setState(prevState => ({
      currentFlashcard: {
        ...prevState.currentFlashcard,
        backside: backside
      }
    }))
  }

  onChangeAnswer (e) {
    const answer = e.target.value

    this.setState(prevState => ({
      currentFlashcard: {
        ...prevState.currentFlashcard,
        answer: answer
      }
    }))
  }

  updateFlashcard () {
    const data = {
      frontside: this.state.currentFlashcard.frontside,
      backside: this.state.currentFlashcard.backside,
      answer: this.state.currentFlashcard.answer,
      id: this.state.currentFlashcard.id
    }

    FlashcardDataService.update(this.state.currentFlashcard.id, data)
      .then(() => {
        this.setState({
          message: 'The Flashcard was updated successfully!'
        })
      })
      .catch(e => {
        console.log(e)
      })
  }

  deleteFlashcard () {
    FlashcardDataService.delete(this.state.currentFlashcard.id)
      .then(() => {
        this.props.refreshList()
        this.setState({
          message: 'The Flashcard was deleted successfully!'
        })
      })
      .catch(e => {
        console.log(e)
      })
  }

  render () {
    const { currentFlashcard } = this.state

    return (
      <div>
        <h4>Flashcard</h4>
        {currentFlashcard ? (
          <div className='edit-form'>
            <form>
              <div className='form-group'>
                <label htmlFor='Frontside'>Frontside</label>
                <input
                  type='text'
                  className='form-control'
                  id='Frontside'
                  value={currentFlashcard.frontside}
                  onChange={this.onChangeFrontside}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='Backside'>Backside</label>
                <input
                  type='text'
                  className='form-control'
                  id='Backside'
                  value={currentFlashcard.backside}
                  onChange={this.onChangeBackside}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='Backside'>Answer</label>
                <input
                  type='text'
                  className='form-control'
                  id='Answer'
                  value={currentFlashcard.answer}
                  onChange={this.onChangeAnswer}
                />
              </div>
            </form>

            <button
              className='m-3 btn btn-lg btn-danger'
              onClick={this.deleteFlashcard}
            >
              Delete
            </button>

            <button
              type='submit'
              className='m-3 btn btn-lg btn-success'
              onClick={this.updateFlashcard}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Flashcard...</p>
          </div>
        )}
      </div>
    )
  }
}

//export default Flashcard
