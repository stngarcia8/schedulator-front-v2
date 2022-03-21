import React from 'react'
import { ButtonLoadComponent, Sorter, Resume, DayList, DayModal } from '.'
import { Message } from '../commons'
import { useTaskData } from '../../hooks'
import './TaskSection.scss'

const TaskSection = () => {
  const { noTask, isDataLoadingError, getStatusMessage } = useTaskData()

  const renderContent = () => {
    if (noTask() || isDataLoadingError()) return (<Message messageCode={getStatusMessage()} />)
    return (
      <>
        <Resume />
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
