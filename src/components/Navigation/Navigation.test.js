import React from 'react'
import ReactDOM from 'react-dom'
import NavigationAuth from '.'
import NavigationNonAuth from '.'

it('Navigation Auth component renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavigationAuth />, div)
})

it('Navigation Non-Auth component renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavigationNonAuth />, div)
})
