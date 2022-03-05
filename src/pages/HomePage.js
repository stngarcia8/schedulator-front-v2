import React from 'react'
import FooterPage from '../components/footer/FooterPage'
import HeaderPage from '../components/header/HeaderPage'
import TaskSection from '../components/task-section/TaskSection'
import './homepage.scss'

const HomePage = () => {

  return (
    <div className="body-container">
      <HeaderPage />
      <TaskSection />
      <FooterPage />
    </div>
  )
}

export default HomePage