import React from 'react'
import { Provider } from 'react-redux'
import { taskStore } from '../reducers/taskStore'
import './App.scss'
import HomePage from '../pages/HomePage'

const App = () => {


  return (<>
    <Provider store={taskStore}>
      <HomePage />
    </Provider>
  </>)
}

export default App


 