import React from 'react'
import ReactDOM from 'react-dom'
import DateTime from '.'

it('DateTime component renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DateTime />, div)
})
