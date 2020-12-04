import React from 'react'
import ReactDOM from 'react-dom'
import PasswordForgetForm from '../components/PasswordForget/.'

// the test should pass
it('Password Forget component renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PasswordForgetForm />, div)
})
