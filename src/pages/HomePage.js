import React from 'react'
import { Header, Presentation, Footer } from '../components/commons'
import TaskSection from '../components/task-section/TaskSection'
import './homepage.scss'

const HomePage = () => {
  return (
    <div className='body-container'>
      <Header />
      <Presentation />
      <TaskSection />
      <Footer />
    </div>
  )
}

export default HomePage
