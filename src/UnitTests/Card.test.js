// for Card.jsx and CardButton.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../components/Card/Card'
import CardButtonComp from '../components/CardButton/CardButton'
import { CardButton } from '../components/CardButton/CardButton'

describe('xxxxxxxxxxx', () => {
  // the test should pass
  it('Card component renders without crashing', () => {
    ReactDOM.render(<Card />, document.createElement('div'))
  })

  // the test should pass
  it('CardButtonComp component renders without crashing', () => {
    ReactDOM.render(<CardButtonComp />, document.createElement('div'))
  })

  const cardButtComp = new CardButton()

  it('CardButton traverse', () => {
    let executed = false
    cardButtComp.props = {
      traverseCard: function () {
        executed = true
      }
    }
    cardButtComp.traverseCard()
    expect(executed).toBeTruthy()
  })

  it('CardButton rand', () => {
    let executed = false
    cardButtComp.props = {
      randCard: function () {
        executed = true
      }
    }
    cardButtComp.randCard()
    expect(executed).toBeTruthy()
  })

  it('CardButton shuffle', () => {
    let executed = false
    cardButtComp.props = {
      shuffleCards: function () {
        executed = true
      }
    }
    cardButtComp.shuffleCards()
    expect(executed).toBeTruthy()
  })

  it('CardButton flip', () => {
    let executed = false
    cardButtComp.props = {
      flipCard: function () {
        executed = true
      }
    }
    cardButtComp.flipCard()
    expect(executed).toBeTruthy()
  })
})
