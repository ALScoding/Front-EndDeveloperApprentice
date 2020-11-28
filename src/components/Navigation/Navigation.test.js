import React from 'react'
import ReactDOM from 'react-dom'
import NavigationAuth from '.'
import NavigationNonAuth from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavigationAuth />, div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavigationNonAuth />, div)
})
