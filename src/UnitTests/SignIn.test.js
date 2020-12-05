import React from 'react'
import ReactDOM from 'react-dom'
import SignInForm from '../components/SignIn/.'
import { BrowserRouter as Router } from 'react-router-dom'

//needs Firebase
it('Sign In component renders without crashing', () => {
  ReactDOM.render(
    <Router>
      <SignInForm />
    </Router>,
    document.createElement('div')
  )
})
