import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoadButton from './LoadButton'
import NoTask from './notask/NoTask'
import ErrorDisplay from './errors/ErrorDisplay'
import ResumeSection from './ResumeSection'
import TaskDisplay from './TaskDisplay'
import './tasksection.scss'

const TaskSection = () => {
  const { totalTasks, statusResponse} = useSelector(state => state.taskData)

  const renderContent = () => {
    if (statusResponse>= 400) return (<ErrorDisplay errorCode={statusResponse} />)
    if (totalTasks === 0) return (<NoTask />)
    return (<>
      <ResumeSection />
      <TaskDisplay />
    </>)
  }


  return (<>
    <div className="button-section">
      <LoadButton />
    </div>
    {renderContent()}
  </>)

}

export default TaskSection