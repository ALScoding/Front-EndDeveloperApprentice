// for Card.jsx and CardButton.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../components/Card/Card'
import CardButton from '../components/CardButton/CardButton'

// the test should pass
it('DateTime component renders without crashing', () => {
  ReactDOM.render(<Card />, document.createElement('div'))
})

// the test should pass
it('DateTime component renders without crashing', () => {
  ReactDOM.render(<CardButton />, document.createElement('div'))
})
