import React from 'react'
import ReactDOM from 'react-dom'
import SignUpForm from '.'

it('Sign Up component renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SignUpForm />, div)
})
