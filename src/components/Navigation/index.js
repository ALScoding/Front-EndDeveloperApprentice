import React from 'react'
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes'
import { AuthUserContext } from '../Session'
import '../../sass/Nav.scss'

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
)

const NavigationAuth = () => (
  <nav class='navbar navbar-inverse navbar-expand-lg'>
    <div class='container-fluid'>
      <ul class='nav navbar-nav'>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ROUTES.LIST}>Flashcard List</Link>
        </li>
        <li>
          <Link to={ROUTES.ADD}>Add Cards</Link>
        </li>
        <li>
          <Link to={ROUTES.FLASHCARDS}>Study Now</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>
            <SignOutButton />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

const NavigationNonAuth = () => (
  <nav class='navbar navbar-inverse navbar-expand-lg'>
    <div class='container-fluid'>
      <ul class='nav navbar-nav'>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navigation
