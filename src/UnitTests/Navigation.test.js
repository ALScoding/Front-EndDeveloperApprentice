import React from 'react'
import ReactDOM from 'react-dom'
import NavigationAuth from '../components/Navigation/.'
import NavigationNonAuth from '../components/Navigation/.'
import { BrowserRouter as Router } from 'react-router-dom'

const div = document.createElement('div')
describe('Navigation bar', () => {
  // the test should pass
  it('Navigation Auth component renders without crashing', () => {
    ReactDOM.render(
      <Router>
        <NavigationAuth />
      </Router>,
      div
    )
  })

  // the test should pass
  it('Navigation Non-Auth component renders without crashing', () => {
    ReactDOM.render(
      <Router>
        <NavigationNonAuth />
      </Router>,
      div
    )
  })
})
