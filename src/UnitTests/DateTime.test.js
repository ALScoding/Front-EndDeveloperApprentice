import React from 'react'
import ReactDOM from 'react-dom'
import DateTime from '../components/DateTime/.'

// the test should pass
it('DateTime component renders without crashing', () => {
  ReactDOM.render(<DateTime />, document.createElement('div'))
})
