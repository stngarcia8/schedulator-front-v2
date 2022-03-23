import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './reducers/store'
import AppContainer from './containers/AppContainer'
import './index.scss'
import ReduxWrapper from './wrappers/ReduxWrapper'

ReactDOM.render(
  <React.StrictMode>
    <ReduxWrapper store={store}>
      <AppContainer />
    </ReduxWrapper>
  </React.StrictMode>,
  document.getElementById('root')
)
