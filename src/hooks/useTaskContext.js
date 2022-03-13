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

  const noCurrentDayDefined = () => {
    return taskContext.currentDay === 0
  }

  const dayWithoutTasks = () => {
    return taskContext.currentDay.tasks?.lenght === 0
  }

  const getTasksOfTheDay = () => {
    console.log('cachando que tiene el tasks')
    console.log(taskContext.currentDay.tasks)
    return taskContext.currentDay.tasks
  }

  const modalIsOpen = () => {
    return taskContext.isOpenModal
  }

  const openModalForm = (status) => {
    taskContext.setIsOpenModal(status)
  }

  return {
    getCurrentDay,
    setCurrentDay,
    noCurrentDayDefined,
    getTasksOfTheDay,
    dayWithoutTasks,
    modalIsOpen,
    openModalForm
  }
}
