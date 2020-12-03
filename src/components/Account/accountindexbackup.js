// import React, { Component } from 'react'
// import { withFirebase } from '../Firebase/context'

// class AccountPage extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       loading: false,
//       users: []
//     }
//   }

//   componentDidMount () {
//     this.setState({ loading: true })

//     this.props.firebase.users().on('value', snapshot => {
//       const usersObject = snapshot.val()

//       const usersList = Object.keys(usersObject).map(key => ({
//         ...usersObject[key],
//         uid: key
//       }))

//       this.setState({
//         users: usersList,
//         loading: false
//       })
//     })
//   }

//   componentWillUnmount () {
//     this.props.firebase.users().off()
//   }

//   render () {
//     const { users, loading } = this.state

//     return (
//       <div>
//         <h1>Account:</h1>

//         {loading && <div>Loading ...</div>}

//         <UserList users={users} />
//       </div>
//     )
//   }
// }

// const UserList = ({ users }) => (
//   <ul>
//     {users.map(user => (
//       <li key={user.uid}>
//         <span>
//           <li>
//             <strong>ID:</strong> {user.uid}
//           </li>
//         </span>
//         <span>
//           <li>
//             <strong>E-Mail:</strong> {user.email}
//           </li>
//         </span>
//         <span>
//           <li>
//             <strong>Username:</strong> {user.username}
//           </li>
//         </span>
//       </li>
//     ))}
//   </ul>
// )

// export default withFirebase(AccountPage)
