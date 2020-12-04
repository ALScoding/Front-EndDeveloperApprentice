import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Context.css'
import AddFlashcard from './add.js'
import FlashcardsList from './list.js'

class CardManager extends Component {
  render () {
    return (
      <div>
        <div class='alert alert-dark' role='alert'>
          <h1><strong>Flashcard Data Editor</strong></h1>
          <br></br>
          <Switch>
            <Route exact path='/list' component={FlashcardsList} />
            <Route exact path='/add' component={AddFlashcard} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default CardManager
