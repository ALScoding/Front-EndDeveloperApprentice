import React from 'react'
import ReactDOM from 'react-dom'
import AddFlashcard from './add'
import FlashcardsList from './list'
import Flashcard from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddFlashcard />, div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FlashcardsList />, div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Flashcard />, div)
})
