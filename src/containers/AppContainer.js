import React from 'react'
import { TaskContextProvider } from '../contexts/TaskContext'
import HomePage from '../pages/HomePage'
import './appcontainer.scss'

const AppContainer = () => {
  return (
    <TaskContextProvider>
      <HomePage />
    </TaskContextProvider>
  )
}

export default AppContainer
