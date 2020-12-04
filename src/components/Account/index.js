//account page index.js
import React, { Component } from 'react'
import { withFirebase } from '../Firebase/context'
class AccountPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      uid: '',
      displayName: '',
      email: '',
      loading: false
    }
  }
  componentDidMount () {
    this.props.firebase.auth.onAuthStateChanged(user => {
      this.setState({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email
      })
    })
    this.setState({ loading: true })
  }
  componentWillUnmount () {
    this.props.firebase.user().off()
  }
  render () {
    const { loading } = this.state
    return (
      <div class='alert alert-dark' role='alert'>
        <h1>
          <strong>Your Account Data</strong>
        </h1>
        <br></br>
        {loading}
        <UserList
          uid={this.state.uid}
          displayName={this.state.displayName}
          email={this.state.email}
        />
      </div>
    )
  }
}
const UserList = props => {
  return (
    <div style={{ fontStyle: 'oblique' }}>
      <h3>
        <strong>ID:</strong> {props.uid}
      </h3>
      <h3>
        <strong>Email:</strong> {props.email}
      </h3>
      <h3>
        <strong>Username:</strong> {props.displayName}
      </h3>
    </div>
  )
}
export default withFirebase(AccountPage)
