import React from 'react'
import ReactDOM from 'react-dom'
import AccountPage from '.'

it('Account component renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AccountPage />, div)
})
