import React from 'react'
import ReactDOM from 'react-dom'
import AddFlashcard from '../components/CRUD/add'
import FlashcardsList from '../components/CRUD/list'
import Flashcard from '../components/CRUD/.'
import Firebase from '../Components/Firebase'

const firebase = new Firebase()

describe('CRUD components tests', () => {
  const div = document.createElement('div')

  // the test should pass
  it('AddFlashcard renders without crashing', () => {
    ReactDOM.render(<AddFlashcard />, div)
  })

//   it('Flashcard renders without crashing', () => {
//     ReactDOM.render(<Flashcard />, div)
//   })

    // it('FlashcardsList renders without crashing', () => {
    //   ReactDOM.render(<FlashcardsList />, div)
    // })
})
