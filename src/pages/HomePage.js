import React from 'react'
import HeaderPage from '../components/header/HeaderPage'
import TaskSection from '../components/task-section/TaskSection'
import './homepage.scss'

const HomePage = () => {

  return (
    <div >
      <HeaderPage />
      <TaskSection />
    </div>
  )
}

export default HomePage