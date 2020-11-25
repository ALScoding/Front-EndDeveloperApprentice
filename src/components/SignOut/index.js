import React from 'react'
import { withFirebase } from '../Firebase/context'

const SignOutButton = ({ firebase }) => (
  <a type='button' onClick={firebase.doSignOut}>
    Sign Out
  </a>
)

export default withFirebase(SignOutButton)
