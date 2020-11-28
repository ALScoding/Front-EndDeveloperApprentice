import React from 'react'
import ReactDOM from 'react-dom'
import PasswordForgetForm from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PasswordForgetForm />, div)
})
