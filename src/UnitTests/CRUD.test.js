import React from 'react'
import ReactDOM from 'react-dom'
import AddFlashcard from '../components/CRUD/add'
import FlashcardsList from '../components/CRUD/list'
import { Flashcard } from '../components/CRUD/.'

describe('CRUD components tests', () => {
  const div = document.createElement('div')

  // the test should pass
  it('AddFlashcard renders without crashing', () => {
    ReactDOM.render(<AddFlashcard />, div)
  })

  // it('Flashcard renders without crashing', () => {
  //   ReactDOM.render(<Flashcard />, div)
  // })

  // it('FlashcardsList renders without crashing', () => {
  //   ReactDOM.render(<FlashcardsList />, div)
  // })
})

describe('testing flashcard methods', () => {
  const comp = new Flashcard()

  describe('should truncate user inputted text', () => {
    it('should return a length of 24', () => {
      const result = comp.maxlen('------------------------------', false)
      expect(result.length).toBe(24)
    })

    it('should return a length of 44', () => {
      const result = comp.maxlen(
        '--------------------------------------------------',
        true
      )
      expect(result.length).toBe(44)
    })
  })
})

// describe('state changs to a flashcard', () => {
//   it('should set state on mount', () => {
//     comp.props = { flashcard: 345 }
//     comp.componentDidMount()
//     expect(comp.state.currentFlashcard).toBe(123)
//   })
// })
