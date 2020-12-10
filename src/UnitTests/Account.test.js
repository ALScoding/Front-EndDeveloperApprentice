import React from 'react'
import ReactDOM from 'react-dom'
import UserList from '../components/Account/.'
import Firebase from '../Components/Firebase'

const firebase = new Firebase()

it('UserList component renders without crashing', async () => {
  const user = await firebase
    .doSignInWithEmailAndPassword('slacker@gmail.com', 'blahblah')
    .then(e => e.user)
  ReactDOM.render(
    <UserList
      uid={user.uid}
      displayName={user.displayName}
      email={user.email}
      firebase={firebase}
    />,
    document.createElement('div')
  )
})
