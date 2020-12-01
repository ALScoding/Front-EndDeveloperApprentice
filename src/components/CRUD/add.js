import React, { Component } from 'react'
import { withFirebase } from '../Firebase/context'

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

    //works as expected except for correct id
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
    this.setState({
      frontside: e.target.value
    })
  }

  onChangeBackside (e) {
    this.setState({
      backside: e.target.value
    })
  }

  onChangeAnswer (e) {
    this.setState({
      answer: e.target.value
    })
  }

  saveFlashcard () {
    // this.onChangeId()
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
            <h4>You submitted successfully!</h4>
            <button className='btn btn-success' onClick={this.newFlashcard}>
              Add New Card
            </button>
          </div>
        ) : (
          <div>
            <div className='form-group'>
              <label htmlFor='frontside'>Frontside</label>
              <input
                type='text'
                className='form-control'
                id='frontside'
                required
                value={this.state.frontside}
                onChange={this.onChangeFrontside}
                name='frontside'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='backside'>Backside</label>
              <input
                type='text'
                className='form-control'
                id='backside'
                required
                value={this.state.backside}
                onChange={this.onChangeBackside}
                name='backside'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='answer'>Answer</label>
              <input
                type='text'
                className='form-control'
                id='answer'
                required
                value={this.state.answer}
                onChange={this.onChangeAnswer}
                name='answer'
              />
            </div>

            <button onClick={this.saveFlashcard} className='btn btn-success'>
              Submit Card
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default withFirebase(AddFlashcard)
