import React from 'react'
import ReactDOM from 'react-dom'
import UserList from '../components/Account/.'

it('UserList component renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <UserList
      uid='0rLFLUbYVTY9PqalhQO2Tq2DnLo2'
      displayName='Senior Alejandro'
      email='senioralejandro@yahoo.com'
    />,
    div
  )
})
