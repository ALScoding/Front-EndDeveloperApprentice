import React from 'react'
import ReactDOM from 'react-dom'
import SignInForm from '../components/SignIn'
import SignUpForm from '../components/SignUp/.'
import { BrowserRouter as Router } from 'react-router-dom'

// the test should pass
it('Sign In component renders without crashing', () => {
  ReactDOM.render(
    <Router>
      <SignInForm />
    </Router>,
    document.createElement('div')
  )
})

// the test should pass
it('Sign Up component renders without crashing', () => {
  ReactDOM.render(
    <Router>
      <SignUpForm />
    </Router>,
    document.createElement('div')
  )
})
