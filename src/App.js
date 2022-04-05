import React from 'react'
import { TaskContextProvider } from './contexts/TaskContext'
import { Header, Presentation, Footer } from './components'
import { TaskSectionContainer } from './containers'
import './App.scss'

const App = () => {
  return (
    <TaskContextProvider>
      <div className='body-container'>
        <Header />
        <Presentation />
        <TaskSectionContainer />
        <Footer />
      </div>
    </TaskContextProvider>
  )
}

export default App
