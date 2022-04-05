import React from 'react'
import PropTypes from 'prop-types'
import { Message, LoadButton, Sorter, Resume, DayList, DayModal } from '../'
import './TaskSection.scss'

const TaskSection = ({ noTask, isDataLoadingError, getStatusMessage, getTotalTasks, getTotalDays, onChange, onClick }) => {
  const renderContent = () => {
    if (noTask || isDataLoadingError) return (<Message messageCode={getStatusMessage} />)
    return (
      <>
        <Resume getTotalTasks={getTotalTasks} getTotalDays={getTotalDays} />
        <DayList />
        <DayModal />
      </>
    )
  }

  return (
    <div className='section-container'>
      <div className='controls-section'>
        <Sorter onChange={onChange} />
        <LoadButton onClick={onClick} />
      </div>
      {renderContent()}
    </div>
  )
}

TaskSection.propTypes = {
  noTask: PropTypes.bool.isRequired,
  isDataLoadingError: PropTypes.bool.isRequired,
  getStatusMessage: PropTypes.number,
  getTotalTasks: PropTypes.number,
  getTotalDays: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

export default TaskSection
