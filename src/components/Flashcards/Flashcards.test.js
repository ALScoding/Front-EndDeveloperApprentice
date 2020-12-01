import React from 'react'
import ReactDOM from 'react-dom'
import FlashcardPage from '.'

it('Flashcard Page component renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FlashcardPage />, div)
})
