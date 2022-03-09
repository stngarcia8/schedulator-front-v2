import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { TaskContext } from '../../../contexts/TaskContext'
import { BsFolderCheck } from 'react-icons/bs'
import './taskdisplay.scss'
import Logo from '../../../assets/images/task.png'

const TaskDisplay = () => {
  const { days } = useSelector(state => state.taskData)
  const taskContext = useContext(TaskContext)

  const handleClick = (event) => {
    if (taskContext.isOpenModal) return
    event.preventDefault()
    taskContext.setCurrentDay(event.target.value)
    taskContext.setIsOpenModal(true)
  }

  const renderTask = () => {
    return days.map((day, index) => {
      return (
        <div key={index} className='task-item'>
          <img className='image-detail' src={Logo} alt='task' />
          <h2 className='title-detail'>Día {day?.dayNumber}</h2>
          <span className='text-detail'>
            Tareas asignadas: {day.taskPerDay}
          </span>
          <button
            className='button-details'
            value={day?.dayNumber}
            onClick={(e) => handleClick(e)}
          >
            <BsFolderCheck className='button-icon' />
            Ver detalles
          </button>
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

export default TaskDisplay
