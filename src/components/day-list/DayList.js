import React from 'react'
import PropTypes from 'prop-types'
import { DetailButton } from '../'
import Logo from '../../assets/images/task.png'
import './DayList.scss'

const DayList = ({ days }) => {
  const renderTask = () => {
    return days.map((day, index) => {
      return (
        <div key={index} className='task-item'>
          <img className='image-detail' src={Logo} alt='task' />
          <div className='group-details'>
            <h2 className='title-detail'>Día {day?.dayNumber}</h2>
            <span className='text-detail'>
              Tareas: {day.taskPerDay}
            </span>
            <DetailButton dayNumber={day.dayNumber} />
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <div className='task-display'>
        {renderTask()}
      </div>
    </>
  )
}

DayList.propTypes = {
  days: PropTypes.arrayOf(
    PropTypes.shape({
      dayNumber: PropTypes.number,
      taskPerDay: PropTypes.number,
      tasks: PropTypes.arrayOf({
        taskId: PropTypes.string,
        taskName: PropTypes.string,
        duration: PropTypes.number
      })
    })
  )
}

export default DayList
