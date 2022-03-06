import React from 'react'
import { useSelector } from 'react-redux'
import LoadButton from './LoadButton'
import NoTask from './notask/NoTask'
import ErrorDisplay from './errors/ErrorDisplay'
import ResumeSection from './ResumeSection'
import TaskDisplay from './taskdisplay/TaskDisplay'
import './tasksection.scss'

const TaskSection = () => {
  const { totalTasks, statusResponse } = useSelector(state => state.taskData)



  const renderContent = () => {
    if (statusResponse >= 400) return (<ErrorDisplay errorCode={statusResponse} />)
    if (totalTasks === 0) return (<NoTask />)
    return (<>
      <ResumeSection />
      <TaskDisplay />
    </>)
  }


  return (
    <div className="section-container">
      <div className="button-section">
        <LoadButton />
      </div>
      {renderContent()}
    </div>
  )

}

export default TaskSection