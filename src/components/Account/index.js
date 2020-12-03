import React, { Component } from 'react'
import { withFirebase } from '../Firebase/context'

class AccountPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      uid: '',
      email: '',
      displayName: '',
      loading: false
    }
  }

  componentDidMount () {
    // var user = this.props.firebase.auth.onAuthStateChanged(user => {
    //   this.setState({ user })
    // })
    // console.log(user)
    // console.log(this.state.user)
    // if uid is equal to logged in user, something

    this.setState({ loading: true })

    this.props.firebase.auth.onAuthStateChanged(user => {
      //const userObject = snapshot.val()
      //console.log(userObject)
      // const usersList = Object.keys(userObject).map(key => ({
      //   ...userObject[key],
      //   uid: key
      // }))
      console.log(user)
      this.setState({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        loading: false
      })
    })
  }

  componentWillUnmount () {
    this.props.firebase.user().off()
  }

  render () {
    const { loading } = this.state

    return (
      <div>
        <h1>Your account data:</h1>
        <br></br>
        {loading && (
          <div>
            <h3>Now loading ...</h3>
          </div>
        )}

        <UserList />
      </div>
    )
  }
}

const UserList = (
  <ul>
    {/* <li>
      <h3>
        <strong>ID:</strong> {this.state.uid}
      </h3>
    </li>
    <li>
      <h3>
        <strong>Email:</strong> {this.state.email}
      </h3>
    </li>
    <li>
      <h3>
        <strong>Username:</strong> {this.state.displayName}
      </h3>
    </li> */}
  </ul>
)

export default withFirebase(AccountPage)
