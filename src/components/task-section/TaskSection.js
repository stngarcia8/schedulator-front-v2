import React from 'react'
import { ButtonLoadComponent, Sorter, NoTask, ErrorComponent, ResumeComponent, DisplayListComponent, DisplayModalComponent } from '.'
import { useTaskData } from '../../hooks'
import './TaskSection.scss'

const TaskSection = () => {
  const { noTask, isDataLoadingError } = useTaskData()

  const renderContent = () => {
    if (isDataLoadingError()) return (<ErrorComponent />)
    if (noTask()) return (<NoTask />)
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
      <div className='controls-section'>
        <Sorter />
        <ButtonLoadComponent />
      </div>
      {renderContent()}
    </div>
  )
}

export default TaskSection
