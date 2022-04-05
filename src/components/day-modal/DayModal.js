import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import Modal from '../modals/Modal'
import { useTaskContext, useModalForm } from '../../hooks'
import TaskList from '../task-list/TaskList'
import image from '../../assets/images/task.png'
import './DayModal.scss'

const DayModal = () => {
  const { modalIsOpen } = useTaskContext()
  const { day, closeModal } = useModalForm()

  return (
    <Modal isOpen={modalIsOpen()} onClose={closeModal}>
      <div className='modal-header'>
        <div className='header-content '>
          <img className='image' src={image} alt='Task' />
          <div>
            <h1> Día {day.dayNumber} </h1>
            <h4>Tareas asignadas: <strong> {day.taskPerDay}</strong></h4>
          </div>
        </div>
      </div>

      <div className='modal-body'>
        <TaskList tasks={day.tasks} />
      </div>
      <div className='modal-footer'>
        <button
          type='button' className='modal-button'
          onClick={() => closeModal()}
        >
          <BsCheckCircle className='buttonIcon' />
          Aceptar
        </button>
      </div>

    </Modal>
  )
}

export default DayModal
