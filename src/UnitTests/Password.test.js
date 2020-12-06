import React from 'react'
import ReactDOM from 'react-dom'
import PasswordForgetForm from '../components/PasswordForget/.'

describe('Password pages', () => {
  const div = document.createElement('div')
  // the test should pass
  it('Password Forget component renders without crashing', () => {
    ReactDOM.render(<PasswordForgetForm />, div)
  })
})
