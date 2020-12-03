import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withFirebase } from '../Firebase/context'
import * as ROUTES from '../../constants/routes'
import '../../css/SignForms.css'

const PasswordForgetPage = () => (
  <div>
    <h1>Please enter your email address:</h1>
    <PasswordForgetForm />
  </div>
)

const INITIAL_STATE = {
  email: '',
  error: null
}

class PasswordForgetFormBase extends Component {
  constructor (props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { email } = this.state

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
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
    const { email, error } = this.state

    const isInvalid = email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='email'
          value={this.state.email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
        <button disabled={isInvalid} type='submit'>
          Reset my password
        </button>

        {error && <h1>{error.message}</h1>}
      </form>
    )
  }
}

const PasswordForgetLink = () => (
  <h1>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot your password?</Link>
  </h1>
)

export default PasswordForgetPage

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm, PasswordForgetLink }
