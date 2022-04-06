import React from 'react'
import PropTypes from 'prop-types'
import { Message, LoadButton, Sorter, Resume, DayModal } from '../'
import { DayListContainer } from '../../containers'
import './TaskSection.scss'

const TaskSection = ({ loading, disableButton, noTask, isDataLoadingError, getStatusMessage, getTotalTasks, getTotalDays, onChange, onClick }) => {
  const renderContent = () => {
    if (noTask || isDataLoadingError) return (<Message messageCode={getStatusMessage} />)
    return (
      <>
        <Resume getTotalTasks={getTotalTasks} getTotalDays={getTotalDays} />
        <DayListContainer loading={loading} />
        <DayModal />
      </>
    )
  }

  return (
    <div className='section-container'>
      <div className='controls-section'>
        <Sorter onChange={onChange} />
        <LoadButton disableButton={disableButton} onClick={onClick} />
      </div>
      {renderContent()}
    </div>
  )
}

TaskSection.propTypes = {
  loading: PropTypes.bool,
  disableButton: PropTypes.bool,
  noTask: PropTypes.bool.isRequired,
  isDataLoadingError: PropTypes.bool.isRequired,
  getStatusMessage: PropTypes.number,
  getTotalTasks: PropTypes.number,
  getTotalDays: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

export default TaskSection
