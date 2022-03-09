import React from 'react'
import FooterComponent from '../components/footer/FooterComponent'
import HeaderComponent from '../components/header/HeaderComponent'
import TaskSection from '../components/task-section/TaskSection'
import './homepage.scss'

const HomePage = () => {
  return (
    <div className='body-container'>
      <HeaderComponent />
      <TaskSection />
      <FooterComponent />
    </div>
  )
}

export default HomePage
