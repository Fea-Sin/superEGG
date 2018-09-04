import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'

import './index.css'

const App = () => {
  return (
    <div>
      <div style={{ color: 'red' }}>INDEX HOME</div>
      <Hello />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
