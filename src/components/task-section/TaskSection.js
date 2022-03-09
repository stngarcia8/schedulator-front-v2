import React from 'react'
import LoadButton from './LoadButton'
import NoTaskComponent from './notask/NoTaskComponent'
import ErrorComponent from './errors/ErrorComponent'
import ResumeComponent from './resume/ResumeComponent'
import TaskDisplay from './taskdisplay/TaskDisplay'
import useTaskData from '../../hooks/useTaskData'
import './tasksection.scss'

const TaskSection = () => {
  const { noTask, isDataLoadingError } = useTaskData()

  const renderContent = () => {
    if (isDataLoadingError()) return (<ErrorComponent />)
    if (noTask()) return (<NoTaskComponent />)
    return (
      <>
        <ResumeComponent />
        <TaskDisplay />
      </>
    )
  }

  return (
    <div className='section-container'>
      <div className='button-section'>
        <LoadButton />
      </div>
      {renderContent()}
    </div>
  )
}

export default TaskSection
