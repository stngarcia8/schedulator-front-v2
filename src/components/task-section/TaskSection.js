import React from 'react'
import { ButtonLoadComponent, NoTaskComponent, ErrorComponent, ResumeComponent, DisplayListComponent } from '.'
import { useTaskData } from '../../hooks'
import DisplayModalComponent from './display/DisplayModalComponent'
import './tasksection.scss'

const TaskSection = () => {
  const { noTask, isDataLoadingError } = useTaskData()

  const renderContent = () => {
    if (isDataLoadingError()) return (<ErrorComponent />)
    if (noTask()) return (<NoTaskComponent />)
    return (
      <>
        <ResumeComponent />
        <DisplayListComponent />
        <DisplayModalComponent />
      </>
    )
  }

  return (
    <div className='section-container'>
      <div className='button-section'>
        <ButtonLoadComponent />
      </div>
      {renderContent()}
    </div>
  )
}

export default TaskSection
