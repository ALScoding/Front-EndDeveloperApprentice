import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { SignUpLink } from '../SignUp'
import { PasswordForgetLink } from '../PasswordForget'
import { withFirebase } from '../Firebase/context'
import * as ROUTES from '../../constants/routes'
import '../../css/SignForms.css'

const SignInPage = () => (
  <div>
    <h1>Sign in here:</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
)

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class SignInFormBase extends Component {
  constructor (props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  componentDidMount () {
    console.log(this.props.firebase.callData())
    console.log(this.props.firebase.users())
  }
  onSubmit = event => {
    const { email, password } = this.state

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push(ROUTES.HOME)
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
    const { email, password, error } = this.state

    const isInvalid = password === '' || email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Your email address'
        />
        <br></br>
        <input
          name='password'
          value={password}
          onChange={this.onChange}
          type='password'
          placeholder='Your unique password'
        />
        <br></br>
        <button disabled={isInvalid} type='submit'>
          Sign In
        </button>

        {error && <h1>Error message: {error.message}</h1>}
      </form>
    )
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase)

export default SignInPage

export { SignInForm }
