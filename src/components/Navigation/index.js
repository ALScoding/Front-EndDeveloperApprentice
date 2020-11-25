import React from 'react'
import { Link } from 'react-router-dom'

import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes'

import { AuthUserContext } from '../Session'

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
)

const NavigationAuth = () => (
  <nav class='navbar navbar-inverse'>
    <div class='container-fluid'>
      <ul class='nav navbar-nav'>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ROUTES.FLASHCARDS}>Study</Link>
        </li>
        <li>
          <Link to={ROUTES.LIST}>Flashcard List</Link>
        </li>
        <li>
          <Link to={ROUTES.ADD}>Add Cards</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  </nav>
)

const NavigationNonAuth = () => (
  <nav class='navbar navbar-inverse'>
    <div class='container-fluid'>
      <ul class='nav navbar-nav'>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navigation
