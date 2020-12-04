import React, { Component } from 'react'
import { withFirebase } from '../Firebase/context'
import '../../css/SignForms.css'
import { truncate } from 'lodash'

// page that allows user to card new flashcards
class AddFlashcard extends Component {
  constructor (props) {
    super(props)
    this.onChangeId = this.onChangeId.bind(this)
    this.onChangeFrontside = this.onChangeFrontside.bind(this)
    this.onChangeBackside = this.onChangeBackside.bind(this)
    this.onChangeAnswer = this.onChangeAnswer.bind(this)
    this.saveFlashcard = this.saveFlashcard.bind(this)
    this.newFlashcard = this.newFlashcard.bind(this)
    this.maxlen = this.maxlen.bind(this)

    this.state = {
      id: '',
      frontside: '',
      backside: '',
      answer: '',
      submitted: false
    }
  }

  onChangeId () {
    let cards = 70

    this.setState({
      id: cards
    })
  }

  onChangeFrontside (e) {
    const input = this.maxlen(e.target.value)
    this.setState({
      frontside: input
    })
  }

  onChangeBackside (e) {
    const input = this.maxlen(e.target.value)
    this.setState({
      backside: input
    })
  }

  onChangeAnswer (e) {
    const input = this.maxlen(e.target.value, true)
    this.setState({
      answer: input
    })
  }

  maxlen (input, ans) {
    let len = ans ? 44 : 24
    let limit = truncate(input, {
      length: len,
      omission: ''
    })
    return limit
  }

  saveFlashcard () {
    let data = {
      id: this.state.id,
      frontside: this.state.frontside,
      backside: this.state.backside,
      answer: this.state.answer
    }

    //FlashcardDataService.create(data) replaced
    this.props.firebase
      .create(data)
      .then(() => {
        console.log('Created new item successfully!')
        this.setState({
          submitted: true
        })
      })
      .catch(e => {
        console.log(e)
      })
  }

  newFlashcard () {
    this.setState({
      id: '',
      frontside: '',
      backside: '',
      answer: '',
      submitted: false
    })
  }

  render () {
    return (
      <div className='submit-form'>
        {this.state.submitted ? (
          <div>
            <h1>You submitted successfully!</h1>
            <button type='submit' onClick={this.newFlashcard}>
              Add New Card
            </button>
          </div>
        ) : (
          <div>
            <div className='form-group'>
              <h1 htmlFor='frontside'>Frontside:</h1>
              <input
                type='text'
                className='form-control'
                id='frontside'
                required
                value={this.state.frontside}
                onChange={this.onChangeFrontside}
                name='frontside'
                placeholder='add text here'
              />
            </div>

            <div className='form-group'>
              <h1 htmlFor='backside'>Backside:</h1>
              <input
                type='text'
                className='form-control'
                id='backside'
                required
                value={this.state.backside}
                onChange={this.onChangeBackside}
                name='backside'
                placeholder='add text here'
              />
            </div>

            <div className='form-group'>
              <h1 htmlFor='answer' style={{ color: 'red' }}>
                Answer:
              </h1>
              <input
                type='text'
                className='form-control'
                id='answer'
                required
                value={this.state.answer}
                onChange={this.onChangeAnswer}
                name='answer'
                placeholder='add text here'
              />
            </div>

            <button type='submit' onClick={this.saveFlashcard}>
              Submit Card
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default withFirebase(AddFlashcard)
