import React from 'react'
import { useTaskData, useDetailButton } from '../../../hooks'
import { BsFolderCheck } from 'react-icons/bs'
import './displaylistcomponent.scss'
import Logo from '../../../assets/images/task.png'

const DisplayListComponent = () => {
  const { getDays } = useTaskData()
  const { handleDetailButtonClick } = useDetailButton()

  const renderTask = () => {
    return getDays().map((day, index) => {
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
            onClick={(e) => handleDetailButtonClick(e)}
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

export default DisplayListComponent
