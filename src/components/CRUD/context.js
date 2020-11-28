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
        <div className='container mt-3'>
          <h2>React + Firebase Database List</h2>
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
