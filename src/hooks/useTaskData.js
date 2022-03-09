import { useSelector } from "react-redux"

const useTaskData = () => {
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
      ? true : false
  }

  const isDataLoadingError = () => {
    return statusResponse >= 400
      ? true : false
  }

  const isNotFoundError = () => {
    return statusResponse === 404
      ? true : false
  }

  const isInternalServerError = () => {
    return statusResponse === 500
      ? true : false
  }

  return {
    getTotalTasks, getTotalDays, getDays, noTask,
    isDataLoadingError, isNotFoundError, isInternalServerError
  }


}

export default useTaskData

