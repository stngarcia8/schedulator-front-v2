import React, { useContext, useEffect, useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { TaskContext } from '../../../contexts/TaskContext'
import image from '../../../assets/images/task.png'
import '../../../styles/boostrap/bootstrap.min.css'
import './taskdisplaymodal.scss'
import TaskDisplayItem from './TaskDisplayItem'

const TaskDisplayModal = () => {
  const { days } = useSelector(state => state.taskData)
  const taskContext = useContext(TaskContext)
  const [currentDay, setCurrentDay] = useState({})

  useEffect(() => {
    getTaskByDay()
  }, [taskContext.currentDay])


  const closeModal = () => {
    if (!taskContext.isOpenModal) return
    taskContext.setIsOpenModal(false)
  }

  const getTaskByDay = () => {
    if (taskContext.currentDay === 0) return
    const dayFound = days.find(d => d.dayNumber === Number(taskContext.currentDay))
    setCurrentDay(dayFound)
  }


  return (
    <Modal show={taskContext.isOpenModal} onClose={closeModal} onHide={() => { closeModal() }} backdrop="static" keyboard={false} size="md">
      <Modal.Header>
        <Modal.Title>
          <div className="header-content ">
            <img className="image" src={image} alt="Task" />
            <div>
              <h1> Día {currentDay.dayNumber} </h1>
              <h4>Tareas asignadas: <strong> {currentDay.taskPerDay}</strong></h4>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
          <TaskDisplayItem tasks={currentDay.tasks} />
      </Modal.Body>

      <Modal.Footer>
        <button type="button" className="modal-button"
          onClick={() => closeModal()}>
          <BsCheckCircle className="buttonIcon" />
          Cerrar
        </button>
      </Modal.Footer>

    </Modal>
  )

}

export default TaskDisplayModal