import React from 'react'
import { useSelector } from 'react-redux'
import { BsFolderCheck } from 'react-icons/bs'
import './taskdisplay.scss'
import Logo from '../../assets/images/task.png'

const TaskDisplay = () => {
  const { days } = useSelector(state => state.taskData)

  const renderTask = () => {
    return days.map((day, index) => {
      return (
        <div key={index} className="task-item">
          <div>
            <img className="image-detail" src={Logo} alt="task" />
          </div>
          <div className="title-detail">
            <h2>Día {day?.dayNumber}</h2>
          </div>
          <span className="text-detail">
            Tareas asignadas: {day.taskPerDay}
          </span>
          <button className="button-details">
            <BsFolderCheck className="button-icon" />
            Ver detalles
          </button>
        </div>
      )
    })
  }

  return (
    <div className="task-display">
      {renderTask()}
    </div>
  )

}

export default TaskDisplay