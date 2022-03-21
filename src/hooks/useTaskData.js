import { useSelector } from 'react-redux'

export const useTaskData = () => {
  const { totalTasks, totalDays, statusResponse, days } = useSelector(state => state.taskData)

  const getTotalTasks = () => {
    return totalTasks
  }

  const getTotalDays = () => {
    return totalDays
  }

  const getDays = () => {
    return days
  }

  const noTask = () => {
    return totalTasks === 0
  }

  const isDataLoadingError = () => {
    return statusResponse >= 400
  }

  const isNotFoundError = () => {
    return statusResponse === 404
  }

  const isInternalServerError = () => {
    return statusResponse === 500
  }

  const getStatusMessage = () => {
    return statusResponse
  }

  return {
    getTotalTasks,
    getTotalDays,
    getDays,
    noTask,
    isDataLoadingError,
    isNotFoundError,
    isInternalServerError,
    getStatusMessage
  }
}
