import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { Modal } from 'react-bootstrap'
import { useTaskContext, useModalForm } from '../../../hooks'
import DisplayItemComponent from './DisplayItemComponent'
import image from '../../../assets/images/task.png'
import '../../../styles/boostrap/bootstrap.min.css'
import './displaymodalcomponent.scss'

const DisplayModalComponent = () => {
  const { modalIsOpen } = useTaskContext()
  const { day, closeModal } = useModalForm()

  return (
    <Modal show={modalIsOpen()} onClose={closeModal} onHide={() => { closeModal() }} backdrop='static' keyboard={false} size='md'>
      <Modal.Header>
        <Modal.Title>
          <div className='header-content '>
            <img className='image' src={image} alt='Task' />
            <div>
              <h1> Día {day.dayNumber} </h1>
              <h4>Tareas asignadas: <strong> {day.taskPerDay}</strong></h4>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DisplayItemComponent tasks={day.tasks} />
      </Modal.Body>

      <Modal.Footer>
        <button
          type='button' className='modal-button'
          onClick={() => closeModal()}
        >
          <BsCheckCircle className='buttonIcon' />
          Aceptar
        </button>
      </Modal.Footer>

    </Modal>
  )
}

export default DisplayModalComponent
