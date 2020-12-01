import React, { Component } from 'react'
import { withFirebase } from '../Firebase/context'

//CRUD components
class Flashcard extends Component {
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
    // let card
    // console.log(this.props)
    // await this.props.flashcard.callData().then(response => {
    //   card = response
    // })
    this.setState({
      currentFlashcard: this.props.flashcard
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
    this.props.firebase
      .updateCard(this.state.currentFlashcard.id, data)
      .then(response => {
        this.setState({
          currentFlashcard: { ...this.state.currentFlashcard, data },
          message: 'The Flashcard was updated successfully!'
        })
      })
      .catch(e => {
        console.log(e)
      })
    // FlashcardDataService.update(this.state.currentFlashcard.id, data)
    //   .then(() => {
    //     this.setState({
    //       message: 'The Flashcard was updated successfully!'
    //     })
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
  }

  deleteFlashcard () {
    this.props.firebase
      .deleteCard(this.state.currentFlashcard.id)
      .then(response => {
        this.props.refreshList(false, this.state.currentFlashcard.id)
        this.setState({
          message: 'The Flashcard was deleted successfully!'
        })
      })
      .catch(e => {
        console.log(e)
      })
    // FlashcardDataService.delete(this.state.currentFlashcard.id)
    //   .then(() => {
    //     this.props.refreshList()
    //     this.setState({
    //       message: 'The Flashcard was deleted successfully!'
    //     })
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
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
                <label htmlFor='Frontside'>Frontside</label>
                <input
                  type='text'
                  className='form-control'
                  id='Frontside'
                  value={currentFlashcard.frontside}
                  onChange={this.onChangeFrontside}
                />
              </div>
              <div className='form-group' style={margin2}>
                <label htmlFor='Backside'>Backside</label>
                <input
                  type='text'
                  className='form-control'
                  id='Backside'
                  value={currentFlashcard.backside}
                  onChange={this.onChangeBackside}
                />
              </div>
              <div className='form-group' style={margin2}>
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
            <h3>Please click on a Flashcard...</h3>
            <p>{this.state.message}</p>
          </div>
        )}
      </div>
    )
  }
}

export default withFirebase(Flashcard)
