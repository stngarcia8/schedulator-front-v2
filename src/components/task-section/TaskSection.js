import React from 'react'
import { ButtonLoadComponent, Sorter, DayList, DayModal } from '.'
import { Message, Resume } from '../'
import { useTaskData } from '../../hooks'
import './TaskSection.scss'

const TaskSection = () => {
  const { noTask, isDataLoadingError, getStatusMessage, getTotalTasks, getTotalDays } = useTaskData()

  const renderContent = () => {
    if (noTask() || isDataLoadingError()) return (<Message messageCode={getStatusMessage()} />)
    return (
      <>
        <Resume getTotalTasks={getTotalTasks()} getTotalDays={getTotalDays()} />
        <DayList />
        <DayModal />
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
