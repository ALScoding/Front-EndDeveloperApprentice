import React from 'react'
import ReactDOM from 'react-dom'
import SignInForm from '.'

it('Sign In component renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SignInForm />, div)
})
