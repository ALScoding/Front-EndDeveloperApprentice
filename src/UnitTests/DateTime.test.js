import React from 'react'
import ReactDOM from 'react-dom'
import DateTime from '../components/DateTime/.'

// the test should pass
it('DateTime component renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DateTime />, div)
})
