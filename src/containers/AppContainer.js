import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../reducers/store'
import { TaskContextProvider } from '../contexts/TaskContext'
import HomePage from '../pages/HomePage'
import './appcontainer.scss'

const AppContainer = () => {
  return (
    <>
      <Provider store={store}>
        <TaskContextProvider>
          <HomePage />
        </TaskContextProvider>
      </Provider>
    </>
  )
}

export default AppContainer
