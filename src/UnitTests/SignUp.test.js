import React from 'react'
import ReactDOM from 'react-dom'
import SignUpForm from '../components/SignUp/.'
import { BrowserRouter as Router } from 'react-router-dom'

// the test should pass
it('Sign Up component renders without crashing', () => {
  ReactDOM.render(
    <Router>
      <SignUpForm />
    </Router>,
    document.createElement('div')
  )
})
