import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './reducers/store'
import App from './App'
import './index.scss'
import ReduxWrapper from './wrappers/ReduxWrapper'

ReactDOM.render(
  <React.StrictMode>
    <ReduxWrapper store={store}>
      <App />
    </ReduxWrapper>
  </React.StrictMode>,
  document.getElementById('root')
)
