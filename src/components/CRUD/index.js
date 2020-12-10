import React, { Component } from 'react'
import { withFirebase } from '../Firebase/context'
import { truncate } from 'lodash'

//CRUD components
export class Flashcard extends Component {
  constructor (props) {
    super(props)
    this.onChangeFrontside = this.onChangeFrontside.bind(this)
    this.onChangeBackside = this.onChangeBackside.bind(this)
    this.onChangeAnswer = this.onChangeAnswer.bind(this)
    this.updateFlashcard = this.updateFlashcard.bind(this)
    this.deleteFlashcard = this.deleteFlashcard.bind(this)
    this.maxlen = this.maxlen.bind(this)

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
    // console.log('prevState', prevState)
    // console.log('nextProps', nextProps)

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

  async componentDidMount () {
    this.setState({
      currentFlashcard: this.props.flashcard
    })
  }

  onChangeFrontside (e) {
    const input = this.maxlen(e.target.value)
    this.setState(function (prevState) {
      return {
        currentFlashcard: {
          ...prevState.currentFlashcard,
          frontside: input
        }
      }
    })
  }

  onChangeBackside (e) {
    const input = this.maxlen(e.target.value)
    this.setState(prevState => ({
      currentFlashcard: {
        ...prevState.currentFlashcard,
        backside: input
      }
    }))
  }

  onChangeAnswer (e) {
    const input = this.maxlen(e.target.value, true)
    this.setState(prevState => ({
      currentFlashcard: {
        ...prevState.currentFlashcard,
        answer: input
      }
    }))
  }

  maxlen (input, ans) {
    let len = ans ? 44 : 24
    let limit = truncate(input, {
      length: len,
      omission: ''
    })
    return limit
  }

  updateFlashcard () {
    const data = {
      frontside: this.state.currentFlashcard.frontside,
      backside: this.state.currentFlashcard.backside,
      answer: this.state.currentFlashcard.answer,
      id: this.state.currentFlashcard.id
    }
    this.props.firebase
      .updateCard(this.state.currentFlashcard.id, data)
      .then(response => {
        this.setState({
          currentFlashcard: { ...this.state.currentFlashcard, data },
          message: 'The Flashcard was updated successfully!'
        })
        window.alert(this.state.message)
      })
      .catch(e => {
        console.log(e)
      })
  }

  deleteFlashcard () {
    this.props.firebase
      .deleteCard(this.state.currentFlashcard.id)
      .then(response => {
        this.setState({
          message: 'The Flashcard was deleted successfully!'
        })
        window.alert(this.state.message)
        this.props.refreshList(false, this.state.currentFlashcard.id)
      })
      .catch(e => {
        console.log(e)
      })
  }

  render () {
    const { currentFlashcard } = this.state
    const margin1 = {
      marginTop: '50px'
    }
    const margin2 = {
      marginTop: '25px'
    }

    return (
      <div>
        <h3>Flashcard Details:</h3>
        {currentFlashcard ? (
          <div className='edit-form'>
            <form>
              <div className='form-group' style={margin1}>
                <h3 htmlFor='Frontside'>Frontside:</h3>
                <input
                  type='text'
                  className='form-control'
                  id='Frontside'
                  value={currentFlashcard.frontside}
                  onChange={this.onChangeFrontside}
                  placeholder='add text here'
                />
              </div>
              <div className='form-group' style={margin2}>
                <h3 htmlFor='Backside'>Backside:</h3>
                <input
                  type='text'
                  className='form-control'
                  id='Backside'
                  value={currentFlashcard.backside}
                  onChange={this.onChangeBackside}
                  placeholder='add text here'
                />
              </div>
              <div className='form-group' style={margin2}>
                <h3 htmlFor='Backside' style={{ color: 'red' }}>
                  Answer:
                </h3>
                <input
                  type='text'
                  className='form-control'
                  id='Answer'
                  value={currentFlashcard.answer}
                  onChange={this.onChangeAnswer}
                  placeholder='add text here'
                />
              </div>
            </form>

            <button
              className='m-3 btn-lg btn-danger'
              onClick={this.deleteFlashcard}
            >
              Delete
            </button>

            <button
              className='m-3 btn-lg btn-success'
              onClick={this.updateFlashcard}
            >
              Update
            </button>
          </div>
        ) : (
          <div>
            <br />
            <h3>Please click on a Flashcard...</h3>
          </div>
        )}
      </div>
    )
  }
}

export default withFirebase(Flashcard)
