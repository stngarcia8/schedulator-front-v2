import React from 'react'
import { Provider } from 'react-redux'
import { taskStore } from '../reducers/taskStore'
import { TaskContextProvider } from '../contexts/TaskContext'
import TaskDisplayModal from '../components/task-section/taskdisplay/TaskDisplayModal'
import HomePage from '../pages/HomePage'
import './App.scss'

const App = () => {
  return (<>
    <Provider store={taskStore}>
      <TaskContextProvider>
        <TaskDisplayModal />
        <HomePage />
      </TaskContextProvider>
    </Provider>
  </>)
}

export default App


