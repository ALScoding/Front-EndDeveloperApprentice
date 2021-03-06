import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase/context'
import * as ROUTES from '../../constants/routes'
import '../../sass/SignForms.scss'

const SignUpPage = () => (
  <div>
    <h1>Sign up here:</h1>
    <SignUpForm />
  </div>
)

const INITIAL_STATE = {
  displayName: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class SignUpFormBase extends Component {
  constructor (props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { displayName, email, passwordOne } = this.state

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        let user = authUser.user
        user
          .updateProfile({
            displayName,
            email
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE })
            this.props.history.push(ROUTES.HOME)
          })
          .catch(error => {
            this.setState({ error })
          })
      })
      .catch(error => {
        this.setState({ error })
      })

    event.preventDefault()
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { displayName, email, passwordOne, passwordTwo, error } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      displayName === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='displayName'
          value={displayName}
          onChange={this.onChange}
          type='text'
          placeholder='Your username'
        />
        <br />
        <input
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Your email address'
        />
        <br />
        <input
          name='passwordOne'
          value={passwordOne}
          onChange={this.onChange}
          type='password'
          placeholder='Your unique password'
        />
        <br />
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm your password'
        />
        <br />
        <button disabled={isInvalid} type='submit'>
          Sign Up
        </button>

        {error && <h1>{error.message}</h1>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <h1>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up now!</Link>
  </h1>
)

const SignUpForm = withRouter(withFirebase(SignUpFormBase))

export default SignUpPage

export { SignUpForm, SignUpLink }
