import React from 'react'
import DateTime from '../DateTime'
import { AuthUserContext } from '../Session'
import '../../sass/DivAlert.scss'

const HomePage = () => (
  <div class='alert alert-dark' role='alert'>
    <h1>
      <strong>✭✮✭ Welcome User ✭✮✭</strong>
    </h1>
    <div>
      <AuthUserContext.Consumer>
        {authUser => (authUser ? <NonAuthInfo /> : <AuthInfo />)}
      </AuthUserContext.Consumer>
    </div>
    <DateTime />
  </div>
)

const AuthInfo = () => (
  <div>
    <h2>
      To get started, please select Sign In or Sign Up from the above navbar.
    </h2>
  </div>
)

const NonAuthInfo = () => (
  <div>
    <h1>Now that you're logged in, you can select from above:</h1>
    <h2>
      <strong>Account</strong>: view your personal information stored in
      Firebase
    </h2>
    <h2>
      <strong>Flashcard List</strong>: update and delete existing flashcards
    </h2>
    <h2>
      <strong>Add Cards</strong>: create new flashcards by inputting text
    </h2>
    <h2>
      <strong>Study Now</strong>: fun and easy to use flashcard interface
    </h2>
  </div>
)

export default HomePage
