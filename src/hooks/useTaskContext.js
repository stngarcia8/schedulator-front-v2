import { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

export const useTaskContext = () => {
  const taskContext = useContext(TaskContext)

  const getCurrentDay = () => {
    return taskContext.currentDay
  }

  const setCurrentDay = (dayNumber) => {
    taskContext.setCurrentDay(dayNumber)
  }

  const modalIsOpen = () => {
    return taskContext.isOpenModal
  }

  const openModalForm = (status) => {
    taskContext.setIsOpenModal(status)
  }

  return { getCurrentDay, setCurrentDay, modalIsOpen, openModalForm }
}
