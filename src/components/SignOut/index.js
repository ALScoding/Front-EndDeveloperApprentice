import React from 'react'
import { withFirebase } from '../Firebase/context'

const SignOutButton = ({ firebase }) => (
  <p type='button' onClick={firebase.doSignOut}>
    Sign Out
  </p>
)

export default withFirebase(SignOutButton)
